import React from 'react';
import { Calendar } from 'lucide-react';
import { DateRange } from '../types';

interface Props {
  range: DateRange;
  onRangeChange: (range: DateRange) => void;
}

export function DateRangeSelector({ range, onRangeChange }: Props) {
  const ranges: DateRange[] = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        <Calendar className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-900">Date Range</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {ranges.map((r) => (
          <button
            key={r}
            onClick={() => onRangeChange(r)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              range === r
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}