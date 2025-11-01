'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Challenge } from '@/types/challenge';
import CompactAudioRecorder from '@/components/admin/CompactAudioRecorder';
import { AudioRecord } from '@/services/audioAPIClient';
import AITextBlobParser from '@/components/admin/AITextBlobParser';
import AIFieldAssistant from '@/components/admin/AIFieldAssistant';
import BatchChallengeCreator from '@/components/admin/BatchChallengeCreator';
import EditableList from '@/components/admin/EditableList';

export default function NewChallengePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<Challenge>>({
    type: 'multiple_choice',
    difficulty: 'beginner',
    points: 10,
    options: ['', '', '', ''],
    correctAnswer: '',
    question: '',
    explanation: '',
    labels: []
  });
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<AudioRecord | null>(null);
  const [showAIParser, setShowAIParser] = useState(false);
  const [showBatchCreator, setShowBatchCreator] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    
    // Validate form
    if (!formData.question || !formData.correctAnswer) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Challenge created successfully!');
        // Redirect after showing success message
        setTimeout(() => {
          router.push('/admin/challenges');
        }, 1500);
      } else {
        setError('Failed to create challenge: ' + (result.error || result.message));
      }
    } catch (error) {
      console.error('Error creating challenge:', error);
      setError('Failed to create challenge');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...(formData.options || ['', '', '', ''])];
    newOptions[index] = value;
    setFormData({ ...formData, options: newOptions });
  };

  const addOption = () => {
    const newOptions = [...(formData.options || []), ''];
    setFormData({ ...formData, options: newOptions });
  };

  const removeOption = (index: number) => {
    const newOptions = (formData.options || []).filter((_, i) => i !== index);
    setFormData({ ...formData, options: newOptions });
  };

  const handleAudioRecordingComplete = (audioRecord: AudioRecord) => {
    setRecordedAudio(audioRecord);
    setFormData({ ...formData, audioUrl: audioRecord.url });
    setShowAudioRecorder(false);
  };

  const handleRemoveAudio = () => {
    setRecordedAudio(null);
    setFormData({ ...formData, audioUrl: '' });
  };

  const handleAIChallenge = (challenge: Partial<Challenge>) => {
    setFormData({ ...formData, ...challenge });
    setShowAIParser(false);
  };

  const handleAIExplanation = (value: string | string[]) => {
    const explanation = Array.isArray(value) ? value.join(' ') : value;
    setFormData({ ...formData, explanation });
  };

  const handleAIQuestion = (value: string | string[]) => {
    const question = Array.isArray(value) ? value.join(' ') : value;
    setFormData({ ...formData, question });
  };

  const handleAIOptions = (value: string | string[]) => {
    const newOptions = Array.isArray(value) ? value : [value];
    const currentOptions = formData.options || [];
    const allOptions = [...currentOptions.filter(opt => opt.trim()), ...newOptions];
    setFormData({ ...formData, options: allOptions });
  };

  const handleBatchChallengesCreated = (challenges: Challenge[]) => {
    setShowBatchCreator(false);
    setSuccess(`Successfully created ${challenges.length} challenges!`);
    // Redirect to challenges list
    setTimeout(() => {
      router.push('/admin/challenges');
    }, 1500);
  };

  const handleTypeChange = (newType: string) => {
    // Preserve common fields, reset type-specific fields
    const baseData = {
      type: newType as any,
      difficulty: formData.difficulty,
      points: formData.points,
      question: formData.question,
      explanation: formData.explanation,
      labels: formData.labels
    };

    // Set type-specific defaults
    if (newType === 'multiple_choice' || newType === 'audio_recognition') {
      setFormData({
        ...baseData,
        options: ['', '', '', ''],
        correctAnswer: '',
        audioUrl: newType === 'audio_recognition' ? formData.audioUrl : ''
      });
    } else if (newType === 'translation_builder') {
      setFormData({
        ...baseData,
        correctAnswer: [],
        distractors: []
      });
    }
  };

  const addLabel = (label: string) => {
    if (label.trim() && !(formData.labels || []).includes(label.trim())) {
      setFormData({ 
        ...formData, 
        labels: [...(formData.labels || []), label.trim()] 
      });
    }
  };

  const removeLabel = (label: string) => {
    setFormData({
      ...formData,
      labels: (formData.labels || []).filter(l => l !== label)
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/challenges"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ← Back to Challenges
            </Link>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowBatchCreator(true)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span>🚀 Batch Create</span>
            </button>
            <button
              onClick={() => setShowAIParser(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              <span>🤖 AI Generate</span>
            </button>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Create New Challenge
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Design a new challenge for the Shona dictionary
        </p>
      </div>

      {/* Status Messages */}
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

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Basic Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Challenge Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => handleTypeChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="multiple_choice">Multiple Choice</option>
                <option value="audio_recognition">Audio Recognition</option>
                <option value="translation_builder">Translation Builder</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Difficulty *
              </label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Points *
              </label>
              <input
                type="number"
                value={formData.points}
                onChange={(e) => setFormData({ ...formData, points: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                min="1"
                max="100"
                required
              />
            </div>
          </div>

          {/* Labels Section */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Labels (for grouping challenges)
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {(formData.labels || []).map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  {label}
                  <button
                    type="button"
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
                placeholder="Add label (e.g., daily-activities, beginner, vocabulary)"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const input = e.target as HTMLInputElement;
                    addLabel(input.value);
                    input.value = '';
                  }
                }}
              />
              <button
                type="button"
                onClick={(e) => {
                  const input = (e.target as HTMLButtonElement).previousElementSibling as HTMLInputElement;
                  addLabel(input.value);
                  input.value = '';
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Question
          </h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Question Text *
            </label>
            <textarea
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Enter the challenge question..."
              required
            />
            <div className="mt-2">
              <AIFieldAssistant
                type="question"
                context={{
                  correctAnswer: formData.correctAnswer,
                  type: formData.type
                }}
                onSuggestion={() => {}}
                onApprove={handleAIQuestion}
                onReject={() => {}}
              />
            </div>
          </div>

          {formData.type === 'audio_recognition' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Audio Source
              </label>
              
              {!formData.audioUrl && !showAudioRecorder && (
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowAudioRecorder(true)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center space-x-2"
                    >
                      <div className="w-3 h-3 bg-current rounded-full"></div>
                      <span>Record Audio</span>
                    </button>
                    <span className="text-gray-500 dark:text-gray-400 self-center">or</span>
                  </div>
                  <input
                    type="url"
                    value={formData.audioUrl || ''}
                    onChange={(e) => setFormData({ ...formData, audioUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="https://example.com/audio.mp3"
                  />
                </div>
              )}

              {showAudioRecorder && (
                <div className="mt-3">
                  <CompactAudioRecorder
                    entryId="new-challenge"
                    level="word"
                    onRecordingComplete={handleAudioRecordingComplete}
                    onCancel={() => setShowAudioRecorder(false)}
                  />
                </div>
              )}

              {formData.audioUrl && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-800 dark:text-green-200">
                          Audio Ready
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400">
                          {recordedAudio ? 'Recorded audio' : 'External URL'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {formData.audioUrl && (
                        <audio controls className="h-8">
                          <source src={formData.audioUrl} />
                        </audio>
                      )}
                      <button
                        type="button"
                        onClick={handleRemoveAudio}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Answer Options */}
        {(formData.type === 'multiple_choice' || formData.type === 'audio_recognition') && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Answer Options
            </h2>
            
            <div className="space-y-3">
              {(formData.options || []).map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder={`Option ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, correctAnswer: option })}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      formData.correctAnswer === option
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                    }`}
                  >
                    {formData.correctAnswer === option ? 'Correct' : 'Set as Correct'}
                  </button>
                  {(formData.options || []).length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 mt-3">
              <button
                type="button"
                onClick={addOption}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Option
              </button>
              <div className="flex-1">
                <AIFieldAssistant
                  type="options"
                  context={{
                    question: formData.question,
                    correctAnswer: formData.correctAnswer,
                    existingOptions: formData.options?.filter(opt => opt.trim()) || []
                  }}
                  onSuggestion={() => {}}
                  onApprove={handleAIOptions}
                  onReject={() => {}}
                />
              </div>
            </div>
          </div>
        )}

        {/* Translation Builder */}
        {formData.type === 'translation_builder' && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Translation Setup
            </h2>
            
            <div className="space-y-6">
              {/* Correct Answer */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correct Answer (in order) *
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Drag to reorder words. This is the exact sequence users must build.
                </p>
                
                <EditableList
                  items={Array.isArray(formData.correctAnswer) && formData.correctAnswer.length > 0 ? formData.correctAnswer : ['']}
                  onChange={(items) => setFormData({ ...formData, correctAnswer: items })}
                  placeholder="Word"
                  addButtonText="+ Add Word"
                  draggable={true}
                  showNumbers={true}
                />
              </div>

              {/* Distractor Words */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Distractor Words (optional)
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Wrong words to make the challenge harder. These will be shuffled with the correct words.
                </p>
                
                <EditableList
                  items={formData.distractors && formData.distractors.length > 0 ? formData.distractors : ['']}
                  onChange={(items) => setFormData({ ...formData, distractors: items })}
                  placeholder="Distractor word"
                  addButtonText="+ Add Distractor"
                  draggable={false}
                  showNumbers={false}
                />
              </div>
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Explanation
          </h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Explanation (shown after answer)
            </label>
            <textarea
              value={formData.explanation}
              onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Provide additional context or explanation..."
            />
            <div className="mt-2">
              <AIFieldAssistant
                type="explanation"
                context={{
                  question: formData.question,
                  correctAnswer: formData.correctAnswer,
                  type: formData.type
                }}
                onSuggestion={() => {}}
                onApprove={handleAIExplanation}
                onReject={() => {}}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/challenges"
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isSubmitting && (
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            )}
            <span>{isSubmitting ? 'Creating...' : 'Create Challenge'}</span>
          </button>
        </div>
      </form>

      {/* AI Text Blob Parser Modal */}
      {showAIParser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="max-w-2xl w-full">
            <AITextBlobParser
              onChallengeGenerated={handleAIChallenge}
              onCancel={() => setShowAIParser(false)}
            />
          </div>
        </div>
      )}

      {/* Batch Challenge Creator Modal */}
      <BatchChallengeCreator
        isOpen={showBatchCreator}
        onClose={() => setShowBatchCreator(false)}
        onChallengesCreated={handleBatchChallengesCreated}
      />
    </div>
  );
}
