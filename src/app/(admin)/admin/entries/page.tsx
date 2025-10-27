'use client';

import { useState, useEffect, Suspense, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SvgIcon from "@/component/icons/svg-icon";
import { useAdminEntries } from "@/hooks/useAdminEntries";
import { AdminDictionaryEntry } from "@/services/adminDataService";
import EntryEditModal from "@/components/admin/EntryEditModal";
import EnhancedAiAddEntryModal from "@/components/admin/EnhancedAiAddEntryModal";

function ManageEntriesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state from URL params
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [searchInput, setSearchInput] = useState(searchParams.get('search') || ''); // For immediate UI updates
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1'));
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || '');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  
  // Handler for AI-generated entries (now handled directly in the modal)
  const handleAiEntrySubmit = async (entryData: Partial<AdminDictionaryEntry>) => {
    // Ensure required fields are present
    if (!entryData.word || !entryData.meanings) {
      return { success: false, error: 'Missing required fields', message: 'Missing required fields' };
    }
    
    const result = await createEntry(entryData as Omit<AdminDictionaryEntry, "_id" | "createdAt" | "updatedAt">);
    if (result.success) {
      setShowAiModal(false);
      // Optionally navigate to the new entry
      // router.push(`/admin/entries/${encodeURIComponent(entryData.word)}/edit`);
    }
    return result;
  };
  
  // Helper function to update URL params
  const updateUrlParams = (newParams: { search?: string; page?: number; category?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (newParams.search !== undefined) {
      if (newParams.search) {
        params.set('search', newParams.search);
      } else {
        params.delete('search');
      }
    }
    
    if (newParams.page !== undefined) {
      if (newParams.page > 1) {
        params.set('page', newParams.page.toString());
      } else {
        params.delete('page');
      }
    }
    
    if (newParams.category !== undefined) {
      if (newParams.category) {
        params.set('category', newParams.category);
      } else {
        params.delete('category');
      }
    }
    
    const newUrl = params.toString() ? `/admin/entries?${params.toString()}` : '/admin/entries';
    router.push(newUrl);
  };

  const { entries, loading, error, createEntry, updateEntry, deleteEntry, total, currentPage, totalPages } = useAdminEntries({
    page,
    limit: 10, // Show 10 entries per page
    search,
    category: categoryFilter,
    autoFetch: true
  });

  // Helper function to format word display for admin list - shows each meaning separately
  const formatWordDisplay = (entry: any) => {
    if (!entry.meanings || entry.meanings.length === 0) {
      return <span className="text-blue-700 dark:text-blue-300 font-medium">{entry.word}</span>;
    }

    // Group meanings by part of speech to handle multiple meanings of same type
    const meaningsByPartOfSpeech = entry.meanings.reduce((acc: any, meaning: any) => {
      const pos = meaning.partOfSpeech?.toLowerCase() || 'unknown';
      if (!acc[pos]) {
        acc[pos] = [];
      }
      acc[pos].push(meaning);
      return acc;
    }, {});

    const partOfSpeechEntries = Object.entries(meaningsByPartOfSpeech);

    return (
      <div className="space-y-0">
        {partOfSpeechEntries.map(([partOfSpeech, meanings], index) => {
          const isVerb = partOfSpeech === 'verb';
          const isLast = index === partOfSpeechEntries.length - 1;
          
          return (
            <div 
              key={`${partOfSpeech}-${index}`}
              className={`${
                index > 0 ? 'pt-2 border-t border-gray-200 dark:border-gray-600 border-dashed' : ''
              } ${!isLast ? 'pb-2' : ''}`}
            >
              {isVerb ? (
                <>
                  <span className="text-green-700 dark:text-green-300 font-bold">ku-</span>
                  <span className="text-blue-700 dark:text-blue-300 font-medium">{entry.word}</span>
                </>
              ) : (
                <span className="text-blue-700 dark:text-blue-300 font-medium">{entry.word}</span>
              )}
              <span className="text-gray-400 text-sm ml-1">
                ({partOfSpeech}{Array.isArray(meanings) && meanings.length > 1 ? ` × ${meanings.length}` : ''})
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // Helper function to format definitions for admin list
  const formatDefinitionsDisplay = (entry: any) => {
    if (!entry.meanings || entry.meanings.length === 0) {
      return <span className="text-gray-500">No definitions</span>;
    }

    // Group meanings by part of speech
    const meaningsByPartOfSpeech = entry.meanings.reduce((acc: any, meaning: any) => {
      const pos = meaning.partOfSpeech?.toLowerCase() || 'unknown';
      if (!acc[pos]) {
        acc[pos] = [];
      }
      acc[pos].push(meaning);
      return acc;
    }, {});

    const partOfSpeechEntries = Object.entries(meaningsByPartOfSpeech);

    return (
      <div className="space-y-0">
        {partOfSpeechEntries.map(([partOfSpeech, meanings], index) => {
          const firstMeaning = Array.isArray(meanings) ? meanings[0] : meanings;
          const firstDefinition = firstMeaning?.definitions?.[0]?.definition || 'No definition';
          const isLast = index === partOfSpeechEntries.length - 1;
          
          return (
            <div 
              key={`${partOfSpeech}-def-${index}`} 
              className={`text-sm text-gray-900 dark:text-gray-100 ${
                index > 0 ? 'pt-2 border-t border-gray-200 dark:border-gray-600 border-dashed' : ''
              } ${!isLast ? 'pb-2' : ''}`}
            >
              {firstDefinition}
              {Array.isArray(meanings) && meanings.length > 1 && (
                <span className="text-xs text-gray-500 ml-2">
                  (+{meanings.length - 1} more)
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Immediate search effect
  useEffect(() => {
    if (searchInput !== search) {
      setSearch(searchInput);
      setPage(1);
      // Use replace instead of push to avoid history entries for each keystroke
      const params = new URLSearchParams(searchParams.toString());
      if (searchInput) {
        params.set('search', searchInput);
      } else {
        params.delete('search');
      }
      params.delete('page'); // Reset to page 1
      
      const newUrl = params.toString() ? `/admin/entries?${params.toString()}` : '/admin/entries';
      router.replace(newUrl);
    }
  }, [searchInput, search, searchParams, router]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Dictionary Entries
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Add, edit, and organize dictionary content
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowCreateForm(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <SvgIcon className="h-4 w-4" variant="light" icon="Plus" />
            <span>Add New Entry</span>
          </button>
          <button
            onClick={() => setShowAiModal(true)}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
          >
            <span>🤖</span>
            <span>AI Add Entry</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search entries
            </label>
            <div className="relative">
              <SvgIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                variant="default"
                icon="Search"
              />
              {loading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              )}
              <input
                type="text"
                id="search"
                placeholder="Search dictionary entries..."
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                className={`w-full pl-10 ${loading ? 'pr-10' : 'pr-4'} py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
              />
            </div>
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => {
              const newCategory = e.target.value;
              setCategoryFilter(newCategory);
              setPage(1);
              updateUrlParams({ category: newCategory, page: 1 });
            }}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Categories</option>
            <option value="noun">Nouns</option>
            <option value="verb">Verbs</option>
            <option value="adjective">Adjectives</option>
            <option value="adverb">Adverbs</option>
            <option value="pronoun">Pronouns</option>
          </select>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">Error: {error}</p>
        </div>
      )}

      {/* Entries Table */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dictionary Entries ({entries.length})
          </h3>
        </div>
        
        {loading ? (
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Word
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Definition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="animate-pulse">
                    <td className="px-6 py-4">
                      <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-white dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32 animate-pulse"></div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : entries.length === 0 ? (
          <div className="p-6 text-center">
            <SvgIcon
              className="h-12 w-12 text-gray-400 mx-auto mb-4"
              variant="default"
              icon="Book"
            />
            <p className="text-gray-600 dark:text-gray-400">
              {search ? `No entries found for "${search}"` : 'No entries found'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Word
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Definition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {entries.map((entry) => (
                  <tr key={entry._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700">
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="text-sm font-medium">
                        {formatWordDisplay(entry)}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      {formatDefinitionsDisplay(entry)}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap align-top">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        entry.status === 'published' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {entry.status || 'published'}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300 align-top">
                      {entry.updatedAt ? new Date(entry.updatedAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium align-top">
                      <div className="flex justify-end space-x-2">
                        <Link
                          href={`/admin/entries/${encodeURIComponent(entry.word)}/edit`}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          title={`Edit entry for "${entry.word}"`}
                          aria-label={`Edit dictionary entry for "${entry.word}"`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={async () => {
                            if (confirm(`Delete "${entry.word}"?`)) {
                              await deleteEntry(entry.word);
                            }
                          }}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, total)} of {total} entries
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  const newPage = Math.max(1, page - 1);
                  setPage(newPage);
                  updateUrlParams({ page: newPage });
                }}
                disabled={currentPage <= 1}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setPage(pageNum);
                        updateUrlParams({ page: pageNum });
                      }}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        currentPage === pageNum
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => {
                  const newPage = Math.min(totalPages, page + 1);
                  setPage(newPage);
                  updateUrlParams({ page: newPage });
                }}
                disabled={currentPage >= totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Entry Modal */}
      {showCreateForm && (
        <EntryEditModal
          isOpen={showCreateForm}
          onClose={() => setShowCreateForm(false)}
          onSubmit={async (entryData: Partial<AdminDictionaryEntry>) => {
            // Ensure required fields are present
            if (!entryData.word || !entryData.meanings) {
              return { success: false, error: 'Missing required fields', message: 'Missing required fields' };
            }
            
            const result = await createEntry(entryData as Omit<AdminDictionaryEntry, "_id" | "createdAt" | "updatedAt">);
            return result;
          }}
        />
      )}

      {/* Enhanced AI Add Entry Modal */}
      {showAiModal && (
        <EnhancedAiAddEntryModal
          isOpen={showAiModal}
          onClose={() => setShowAiModal(false)}
          onSubmit={handleAiEntrySubmit}
        />
      )}

      {/* Back to Dashboard */}
      <div className="flex justify-start">
        <Link
          href="/admin"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          title="Back to admin dashboard"
          aria-label="Back to admin dashboard"
        >
          <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}

export default function ManageEntriesPage() {
  return (
    <Suspense fallback={
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    }>
      <ManageEntriesContent />
    </Suspense>
  );
}
