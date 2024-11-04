import React, { useState } from 'react';
import { DateRangeSelector } from '../components/DateRangeSelector';
import { RestaurantSelector } from '../components/RestaurantSelector';
import { SalesOverview } from '../components/SalesOverview';
import { TopProducts } from '../components/TopProducts';
import { DateRange, Restaurant } from '../types';

const mockRestaurants: Restaurant[] = [
  { id: '1', name: 'Restaurant Paris', location: 'Paris' },
  { id: '2', name: 'Restaurant Lyon', location: 'Lyon' },
];

const mockSalesData = {
  total: 25890,
  orderCount: 342,
  topProducts: [
    { name: 'Steak Frites', count: 89, revenue: 2670 },
    { name: 'Coq au Vin', count: 76, revenue: 1900 },
    { name: 'Crème Brûlée', count: 65, revenue: 520 },
  ],
};

export function Dashboard() {
  const [dateRange, setDateRange] = useState<DateRange>('daily');
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | 'all'>('all');

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <DateRangeSelector range={dateRange} onRangeChange={setDateRange} />
        <RestaurantSelector
          restaurants={mockRestaurants}
          selectedId={selectedRestaurant}
          onSelect={setSelectedRestaurant}
        />
      </div>

      <SalesOverview data={mockSalesData} />
      
      <div className="mt-6">
        <TopProducts products={mockSalesData.topProducts} />
      </div>
    </>
  );
}