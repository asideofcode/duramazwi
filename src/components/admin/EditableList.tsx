'use client';

import { useState } from 'react';

interface EditableListProps {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
  addButtonText?: string;
  draggable?: boolean;
  showNumbers?: boolean;
}

export default function EditableList({
  items,
  onChange,
  placeholder = 'Item',
  addButtonText = '+ Add Item',
  draggable = false,
  showNumbers = false,
}: EditableListProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleUpdate = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  const handleRemove = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems.length > 0 ? newItems : ['']);
  };

  const handleAdd = () => {
    onChange([...items, '']);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) return;
    
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    onChange(newItems);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    onChange(newItems);
  };

  const handleMoveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    onChange(newItems);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          draggable={draggable}
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`flex items-center space-x-3 ${draggable ? 'cursor-move' : ''}`}
        >
          {/* Drag handle with up/down arrows - only show when draggable and multiple items */}
          {draggable && items.length > 1 && (
            <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
              <button
                type="button"
                onClick={() => handleMoveUp(index)}
                disabled={index === 0}
                className={`transition-colors ${
                  index === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                title="Move up"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
              <button
                type="button"
                onClick={() => handleMoveDown(index)}
                disabled={index === items.length - 1}
                className={`transition-colors ${
                  index === items.length - 1 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:text-gray-600 dark:hover:text-gray-300'
                }`}
                title="Move down"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
          
          {showNumbers && (
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-[2rem]">
              {index + 1}.
            </span>
          )}
          
          <input
            type="text"
            value={item}
            onChange={(e) => handleUpdate(index, e.target.value)}
            className="flex-1 px-4 py-2 bg-gray-700 dark:bg-gray-700 text-white rounded-md border border-gray-600 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={placeholder}
          />
          
          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Remove
          </button>
        </div>
      ))}
      
      <button
        type="button"
        onClick={handleAdd}
        className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {addButtonText}
      </button>
    </div>
  );
}
