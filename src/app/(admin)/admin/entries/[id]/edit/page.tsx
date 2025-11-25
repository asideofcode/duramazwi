'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SvgIcon from '@/component/icons/svg-icon';
import { AdminDictionaryEntry } from '@/services/adminDataService';
import { EditFormData, entryToFormData, formDataToEntry, validateFormData } from '@/components/admin/EditFormHelpers';
import WordInput from '@/components/admin/WordInput';
import StatusSelector from '@/components/admin/StatusSelector';
import MeaningEditor from '@/components/admin/MeaningEditor';
import AudioManager from '@/components/admin/AudioManager';
import EntryMetadata from '@/components/admin/EntryMetadata';

interface EditEntryPageProps {
  params: Promise<{ id: string }>;
}

export default function EditEntryPage({ params }: EditEntryPageProps) {
  const router = useRouter();
  
  const [entry, setEntry] = useState<AdminDictionaryEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [entryId, setEntryId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<EditFormData>({
    word: '',
    meanings: [
      {
        partOfSpeech: '',
        definitions: [
          {
            definition: '',
            examples: [{ shona: '', english: '' }]
          }
        ]
      }
    ],
    status: 'published'
  });

  // Resolve params first
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setEntryId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  // Load entry data
  useEffect(() => {
    if (!entryId) return;
    
    const loadEntry = async () => {
      try {
        const response = await fetch(`/api/admin/entries/${entryId}`);
        const result = await response.json();
        
        if (response.ok && result.success) {
          const entryData = result.data;
          setEntry(entryData);
          setFormData(entryToFormData(entryData));
        } else {
          setError('Entry not found');
        }
      } catch (err) {
        setError('Failed to load entry');
      } finally {
        setLoading(false);
      }
    };

    loadEntry();
  }, [entryId]); // Only depend on entryId

  // Helper function to format word display for admin edit header - just show the root word
  const formatWordDisplay = (entry: any) => {
    if (!entry) return null;
    
    // Always just show the base word for the header
    return entry.word;
  };

  const handleMarkAsReviewed = () => {
    const now = new Date().toISOString();
    setFormData({ 
      ...formData, 
      needsReview: false,
      lastReviewed: now
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      // Validate form data
      const errors = validateFormData(formData);
      if (errors.length > 0) {
        setError(errors.join(', '));
        setSaving(false);
        return;
      }

      const updateData = formDataToEntry(formData);

      const response = await fetch(`/api/admin/entries/${entryId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setSuccess('Entry saved successfully!');
        // Update the entry state with the saved data
        setEntry(result.data);
        setFormData(entryToFormData(result.data));
      } else {
        setError(result.error || result.message || 'Failed to update entry');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/entries"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
            <span>Back to Entries</span>
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !entry) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/entries"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
            <span>Back to Entries</span>
          </Link>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Error</h2>
          <p className="text-red-700 dark:text-red-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-8 p-3 sm:p-6">
      {/* Page Header */}
      <div className="space-y-4">
        <Link
          href="/admin/entries"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
        >
          <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
          <span>← Back to Entries</span>
        </Link>
        
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white break-words">
              Edit Entry: {formatWordDisplay(entry)}
            </h1>
            {entry?.word && (
              <Link
                href={`/word/${encodeURIComponent(entry.word)}`}
                target="_blank"
                className="inline-flex items-center justify-center space-x-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-md transition-colors text-sm w-full sm:w-auto"
              >
                <SvgIcon className="h-4 w-4" variant="default" icon="Search" />
                <span>View Public Entry</span>
              </Link>
            )}
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Modify the dictionary entry details
          </p>
        </div>
      </div>

      {/* Edit Form */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Entry Details
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <p className="text-green-800 dark:text-green-200">{success}</p>
            </div>
          )}

          <div className="space-y-8">
            <WordInput
              value={formData.word}
              onChange={(value) => setFormData({ ...formData, word: value })}
              word={entry?.word}
            />

            <MeaningEditor
              meanings={formData.meanings}
              onChange={(meanings) => setFormData({ ...formData, meanings })}
              word={formData.word}
              entryId={entryId || undefined}
            />

            <EntryMetadata
              entry={entry}
              needsReview={formData.needsReview || false}
              onNeedsReviewChange={(value) => setFormData({ ...formData, needsReview: value })}
              onMarkAsReviewed={handleMarkAsReviewed}
            />

            <StatusSelector
              value={formData.status}
              onChange={(value) => setFormData({ ...formData, status: value })}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/admin/entries"
              className="w-full sm:w-auto text-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving || !formData.word.trim() || !formData.meanings[0]?.definitions[0]?.definition?.trim()}
              className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {saving ? 'Saving Changes...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
