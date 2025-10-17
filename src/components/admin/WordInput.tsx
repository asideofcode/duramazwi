'use client';

interface WordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function WordInput({ value, onChange, error }: WordInputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="word" className="block text-base font-semibold text-gray-900 dark:text-white">
        Shona Word *
      </label>
      <input
        type="text"
        id="word"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 text-lg border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
          error 
            ? 'border-red-300 dark:border-red-600' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
        placeholder="Enter the Shona word"
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
