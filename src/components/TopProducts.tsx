import React from 'react';
import { Award } from 'lucide-react';

interface TopProduct {
  name: string;
  count: number;
  revenue: number;
}

interface Props {
  products: TopProduct[];
}

export function TopProducts({ products }: Props) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <Award className="h-5 w-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Top Products</h2>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-500 w-8">
                  #{index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.count} orders</p>
                </div>
              </div>
              <span className="font-medium text-gray-900">
                €{product.revenue.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}