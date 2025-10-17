'use client';

interface StatusSelectorProps {
  value: 'published' | 'draft' | 'archived';
  onChange: (value: 'published' | 'draft' | 'archived') => void;
}

export default function StatusSelector({ value, onChange }: StatusSelectorProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="status" className="block text-base font-semibold text-gray-900 dark:text-white">
        Publication Status
      </label>
      <select
        id="status"
        value={value}
        onChange={(e) => onChange(e.target.value as 'published' | 'draft' | 'archived')}
        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors max-w-xs"
      >
        <option value="published">Published</option>
        <option value="draft">Draft</option>
        <option value="archived">Archived</option>
      </select>
    </div>
  );
}
