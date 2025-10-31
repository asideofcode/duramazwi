'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Challenge } from '@/types/challenge';

interface BatchChallengeCreatorProps {
  isOpen: boolean;
  onClose: () => void;
  onChallengesCreated: (challenges: Challenge[]) => void;
}

interface GeneratedChallenge extends Partial<Challenge> {
  tempId: string;
  approved: boolean;
}

export default function BatchChallengeCreator({ isOpen, onClose, onChallengesCreated }: BatchChallengeCreatorProps) {
  const [textBlob, setTextBlob] = useState('');
  const [sharedLabels, setSharedLabels] = useState<string[]>([]);
  const [newLabel, setNewLabel] = useState('');
  const [targetQuantity, setTargetQuantity] = useState(20);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedChallenges, setGeneratedChallenges] = useState<GeneratedChallenge[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleGenerate = async () => {
    if (!textBlob.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/admin/generate-challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'batch_parse_text_blob',
          textBlob: textBlob.trim(),
          sharedLabels: sharedLabels,
          targetQuantity: targetQuantity
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate challenges');
      }

      if (result.success && result.challenges) {
        const challengesWithTempId = result.challenges.map((challenge: Partial<Challenge>, index: number) => ({
          ...challenge,
          tempId: `temp-${Date.now()}-${index}`,
          approved: true, // Default to approved
          labels: [...(challenge.labels || []), ...sharedLabels]
        }));
        setGeneratedChallenges(challengesWithTempId);
        setSuccess(`Generated ${challengesWithTempId.length} challenges for review`);
      } else {
        throw new Error('No challenges generated');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate challenges');
    } finally {
      setIsGenerating(false);
    }
  };

  const addLabel = () => {
    if (newLabel.trim() && !sharedLabels.includes(newLabel.trim())) {
      setSharedLabels([...sharedLabels, newLabel.trim()]);
      setNewLabel('');
    }
  };

  const removeLabel = (label: string) => {
    setSharedLabels(sharedLabels.filter(l => l !== label));
  };

  const toggleChallengeApproval = (tempId: string) => {
    setGeneratedChallenges(challenges =>
      challenges.map(challenge =>
        challenge.tempId === tempId
          ? { ...challenge, approved: !challenge.approved }
          : challenge
      )
    );
  };

  const updateChallengeLabels = (tempId: string, labels: string[]) => {
    setGeneratedChallenges(challenges =>
      challenges.map(challenge =>
        challenge.tempId === tempId
          ? { ...challenge, labels }
          : challenge
      )
    );
  };

  const handleCreateApprovedChallenges = async () => {
    const approvedChallenges = generatedChallenges.filter(c => c.approved);
    
    if (approvedChallenges.length === 0) {
      setError('No challenges approved for creation');
      return;
    }

    setIsCreating(true);
    setError(null);

    try {
      const createdChallenges: Challenge[] = [];
      
      for (const challenge of approvedChallenges) {
        const { tempId, approved, ...challengeData } = challenge;
        
        const response = await fetch('/api/admin/challenges', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(challengeData),
        });

        const result = await response.json();

        if (result.success) {
          createdChallenges.push(result.data);
        } else {
          throw new Error(`Failed to create challenge: ${result.error}`);
        }
      }

      setSuccess(`Successfully created ${createdChallenges.length} challenges!`);
      onChallengesCreated(createdChallenges);
      
      // Reset form after success
      setTimeout(() => {
        handleClose();
      }, 2000);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create challenges');
    } finally {
      setIsCreating(false);
    }
  };

  const handleClose = () => {
    setTextBlob('');
    setSharedLabels([]);
    setNewLabel('');
    setTargetQuantity(20);
    setGeneratedChallenges([]);
    setError(null);
    setSuccess(null);
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div 
        className="flex items-center justify-center min-h-full p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-7xl w-full my-8">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              🤖 AI Batch Challenge Creator
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Step 1: Input */}
            {generatedChallenges.length === 0 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Describe challenges to generate:
                  </label>
                  <textarea
                    value={textBlob}
                    onChange={(e) => setTextBlob(e.target.value)}
                    placeholder="Example: Create challenges about daily activities in Shona - waking up, eating breakfast, going to work. Include vocabulary like kumuka, kudya, kuenda kubasa. Make them beginner level with cultural context."
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                    disabled={isGenerating}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Target Number of Challenges:
                  </label>
                  <div className="flex items-center space-x-4 mb-4">
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={targetQuantity}
                      onChange={(e) => setTargetQuantity(parseInt(e.target.value))}
                      className="flex-1"
                      disabled={isGenerating}
                    />
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="5"
                        max="50"
                        value={targetQuantity}
                        onChange={(e) => setTargetQuantity(Math.max(5, Math.min(50, parseInt(e.target.value) || 5)))}
                        className="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-center dark:bg-gray-700 dark:text-white"
                        disabled={isGenerating}
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">challenges</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    AI will generate approximately this many challenges. More content = more challenges possible.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Shared Labels (will be added to all generated challenges):
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {sharedLabels.map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {label}
                        <button
                          onClick={() => removeLabel(label)}
                          className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newLabel}
                      onChange={(e) => setNewLabel(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLabel()}
                      placeholder="Add label (e.g., daily-activities, beginner, vocabulary)"
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <button
                      onClick={addLabel}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !textBlob.trim()}
                    className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isGenerating && (
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    )}
                    <span>{isGenerating ? 'Generating...' : '🤖 Generate Challenges'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Review Generated Challenges */}
            {generatedChallenges.length > 0 && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Review Generated Challenges ({generatedChallenges.filter(c => c.approved).length}/{generatedChallenges.length} approved)
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setGeneratedChallenges(challenges => 
                        challenges.map(c => ({ ...c, approved: true }))
                      )}
                      className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      ✓ Approve All
                    </button>
                    <button
                      onClick={() => setGeneratedChallenges(challenges => 
                        challenges.map(c => ({ ...c, approved: false }))
                      )}
                      className="text-sm px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      ✗ Reject All
                    </button>
                    <button
                      onClick={() => setGeneratedChallenges([])}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                      ← Start Over
                    </button>
                  </div>
                </div>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  {generatedChallenges.map((challenge) => (
                    <div
                      key={challenge.tempId}
                      className={`border rounded-lg p-4 ${
                        challenge.approved
                          ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={challenge.approved}
                            onChange={() => toggleChallengeApproval(challenge.tempId)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {challenge.type?.replace('_', ' ').toUpperCase()} - {challenge.difficulty}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {challenge.points} pts
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <strong className="text-gray-700 dark:text-gray-300">Question:</strong>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">{challenge.question}</span>
                        </div>
                        <div>
                          <strong className="text-gray-700 dark:text-gray-300">Answer:</strong>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {Array.isArray(challenge.correctAnswer) 
                              ? challenge.correctAnswer.join(', ') 
                              : challenge.correctAnswer}
                          </span>
                        </div>
                        {challenge.type === 'translation_builder' && challenge.distractors && challenge.distractors.length > 0 && (
                          <div>
                            <strong className="text-gray-700 dark:text-gray-300">Distractors:</strong>
                            <span className="ml-2 text-gray-600 dark:text-gray-400">
                              {challenge.distractors.join(', ')}
                            </span>
                          </div>
                        )}
                        {(challenge.type === 'multiple_choice' || challenge.type === 'audio_recognition') && challenge.options && challenge.options.length > 0 && (
                          <div>
                            <strong className="text-gray-700 dark:text-gray-300">Options:</strong>
                            <span className="ml-2 text-gray-600 dark:text-gray-400">
                              {challenge.options.join(', ')}
                            </span>
                          </div>
                        )}
                        {challenge.labels && challenge.labels.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {challenge.labels.map((label) => (
                              <span
                                key={label}
                                className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setGeneratedChallenges([])}
                    className="px-6 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    Start Over
                  </button>
                  <button
                    onClick={handleCreateApprovedChallenges}
                    disabled={isCreating || generatedChallenges.filter(c => c.approved).length === 0}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isCreating && (
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    )}
                    <span>
                      {isCreating 
                        ? 'Creating...' 
                        : `✅ Create ${generatedChallenges.filter(c => c.approved).length} Challenges`
                      }
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Status Messages */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-green-800 dark:text-green-200 text-sm">{success}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
