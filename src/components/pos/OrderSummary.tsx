import React from 'react';
import { ShoppingCart, Minus, Plus, Receipt } from 'lucide-react';
import { Product } from '../../types';

interface Props {
  orderItems: { product: Product; quantity: number }[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function OrderSummary({ orderItems, onUpdateQuantity }: Props) {
  const total = orderItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow h-full">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <ShoppingCart className="h-5 w-5 text-gray-500 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">Current Order</h2>
        </div>
      </div>

      <div className="p-4 space-y-4 flex-grow">
        {orderItems.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-600">€{product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus className="h-4 w-4 text-gray-500" />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        ))}

        {orderItems.length === 0 && (
          <p className="text-gray-500 text-center py-4">No items in order</p>
        )}
      </div>

      <div className="border-t p-4">
        <div className="flex justify-between mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">€{total.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
          disabled={orderItems.length === 0}
        >
          <Receipt className="h-5 w-5 mr-2" />
          Complete Order
        </button>
      </div>
    </div>
  );
}