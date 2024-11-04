import React from 'react';
import { TrendingUp, ShoppingBag } from 'lucide-react';

interface SalesData {
  total: number;
  orderCount: number;
}

interface Props {
  data: SalesData;
}

export function SalesOverview({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Sales</p>
            <h3 className="text-2xl font-bold text-gray-900">
              €{data.total.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <ShoppingBag className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {data.orderCount.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}