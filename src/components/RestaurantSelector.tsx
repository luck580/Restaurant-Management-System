import React from 'react';
import { Store } from 'lucide-react';
import { Restaurant } from '../types';

interface Props {
  restaurants: Restaurant[];
  selectedId: string | 'all';
  onSelect: (id: string | 'all') => void;
}

export function RestaurantSelector({ restaurants, selectedId, onSelect }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        <Store className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-900">Select Restaurant</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedId === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Restaurants
        </button>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => onSelect(restaurant.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedId === restaurant.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
    </div>
  );
}