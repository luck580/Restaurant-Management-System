import React from 'react';
import { LayoutGrid } from 'lucide-react';

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export function MenuCategories({ categories, selected, onSelect }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        <LayoutGrid className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-900">Categories</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selected === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}