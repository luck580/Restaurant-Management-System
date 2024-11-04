export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
}

export type DateRange = 'daily' | 'weekly' | 'monthly' | 'yearly';