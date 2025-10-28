'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Challenge } from '@/types/challenge';
import CompactAudioRecorder from '@/components/admin/CompactAudioRecorder';
import { AudioRecord } from '@/services/audioAPIClient';
import AIFieldAssistant from '@/components/admin/AIFieldAssistant';
import EditableList from '@/components/admin/EditableList';

export default function EditChallengePage() {
  const router = useRouter();
  const params = useParams();
  const challengeId = params.id as string;
  
  const [formData, setFormData] = useState<Partial<Challenge>>({
    type: 'multiple_choice',
    difficulty: 'beginner',
    points: 10,
    options: ['', '', '', ''],
    correctAnswer: '',
    question: '',
    explanation: '',
    audioUrl: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<AudioRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchChallenge();
  }, [challengeId]);

  const fetchChallenge = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/challenges/${challengeId}`);
      const result = await response.json();
      
      if (result.success) {
        setFormData(result.data);
      } else {
        setError('Failed to load challenge: ' + result.error);
        setTimeout(() => router.push('/admin/challenges'), 2000);
      }
    } catch (error) {
      console.error('Error fetching challenge:', error);
      setError('Failed to load challenge');
      setTimeout(() => router.push('/admin/challenges'), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    // Validate form
    if (!formData.question || !formData.correctAnswer) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setSaving(true);
      const response = await fetch(`/api/admin/challenges/${challengeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Challenge updated successfully!');
        // Don't redirect - let user continue editing or navigate manually
      } else {
        setError('Failed to update challenge: ' + (result.error || result.message));
      }
    } catch (error) {
      console.error('Error updating challenge:', error);
      setError('Failed to update challenge');
    } finally {
      setSaving(false);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

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
          <Link
            href={`/admin/challenges/${challengeId}/preview`}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
          >
            Preview Challenge
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Edit Challenge
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Modify the challenge details and settings
        </p>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
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
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
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
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Question
          </h2>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Question Text *
              </label>
              <AIFieldAssistant
                type="question"
                currentValue={formData.question}
                context={{
                  type: formData.type,
                  correctAnswer: formData.correctAnswer
                }}
                onSuggestion={() => {}}
                onApprove={handleAIQuestion}
                onReject={() => {}}
              />
            </div>
            <textarea
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Enter the challenge question..."
              required
            />
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
                    entryId={`challenge-${challengeId}`}
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

            <button
              type="button"
              onClick={addOption}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Option
            </button>
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
                  items={(Array.isArray(formData.correctAnswer) ? formData.correctAnswer : [formData.correctAnswer]).filter((w): w is string => Boolean(w))}
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
                  items={formData.distractors || []}
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
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Explanation (shown after answer)
              </label>
              <AIFieldAssistant
                type="explanation"
                currentValue={formData.explanation}
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
            <textarea
              value={formData.explanation}
              onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Provide additional context or explanation..."
            />
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
            disabled={saving}
            className={`px-6 py-2 rounded-md font-medium ${
              saving
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {saving ? 'Saving...' : 'Update Challenge'}
          </button>
        </div>
      </form>
    </div>
  );
}
