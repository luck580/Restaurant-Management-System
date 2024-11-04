import React, { useState } from 'react';
import { Product } from '../types';
import { MenuCategories } from '../components/pos/MenuCategories';
import { ProductGrid } from '../components/pos/ProductGrid';
import { OrderSummary } from '../components/pos/OrderSummary';

const mockProducts: Product[] = [
  { id: '1', name: 'Steak Frites', price: 29.99, category: 'Main Course' },
  { id: '2', name: 'Coq au Vin', price: 24.99, category: 'Main Course' },
  { id: '3', name: 'French Onion Soup', price: 9.99, category: 'Starters' },
  { id: '4', name: 'Escargots', price: 12.99, category: 'Starters' },
  { id: '5', name: 'Crème Brûlée', price: 8.99, category: 'Desserts' },
  { id: '6', name: 'Tarte Tatin', price: 7.99, category: 'Desserts' },
];

export function POS() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentOrder, setCurrentOrder] = useState<{ product: Product; quantity: number }[]>([]);

  const categories = ['All', ...new Set(mockProducts.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === selectedCategory);

  const addToOrder = (product: Product) => {
    setCurrentOrder(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCurrentOrder(prev =>
      quantity === 0
        ? prev.filter(item => item.product.id !== productId)
        : prev.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <MenuCategories
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <ProductGrid products={filteredProducts} onProductClick={addToOrder} />
      </div>
      <div>
        <OrderSummary
          orderItems={currentOrder}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
}