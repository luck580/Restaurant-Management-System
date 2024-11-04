export interface Restaurant {
  id: string;
  name: string;
  location: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export type DateRange = 'daily' | 'weekly' | 'monthly' | 'custom';

export interface SalesData {
  total: number;
  orderCount: number;
  topProducts: { name: string; count: number; revenue: number }[];
}