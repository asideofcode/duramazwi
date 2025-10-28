import { Challenge } from '@/types/challenge';
import MultipleChoiceChallenge from '@/components/challenge/MultipleChoiceChallenge';
import AudioChallenge from '@/components/challenge/AudioChallenge';
import TranslationChallenge from '@/components/challenge/TranslationChallenge';

interface ChallengePreviewModalProps {
  challenge: Challenge;
  challengeNumber: number;
  onClose: () => void;
}

export default function ChallengePreviewModal({ challenge, challengeNumber, onClose }: ChallengePreviewModalProps) {
  const handleChallengeComplete = (userAnswer: string | string[], isCorrect: boolean) => {
    console.log('Preview completed:', { userAnswer, isCorrect });
    // Just close preview in editor mode
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="flex items-center justify-center min-h-full p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full my-8">
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Preview Challenge #{challengeNumber}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="p-6">
            {challenge.type === 'multiple_choice' && (
              <MultipleChoiceChallenge
                challenge={challenge}
                onComplete={handleChallengeComplete}
              />
            )}
            {challenge.type === 'audio_recognition' && (
              <AudioChallenge
                challenge={challenge}
                onComplete={handleChallengeComplete}
              />
            )}
            {challenge.type === 'translation_builder' && (
              <TranslationChallenge
                challenge={challenge}
                onComplete={handleChallengeComplete}
              />
            )}
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
