import React from 'react';
import { Product } from '../../types';

interface Props {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {products.map((product) => (
        <button
          key={product.id}
          onClick={() => onProductClick(product)}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-left"
        >
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-gray-600 mt-1">€{product.price.toFixed(2)}</p>
        </button>
      ))}
    </div>
  );
}