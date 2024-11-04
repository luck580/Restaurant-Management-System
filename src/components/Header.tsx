import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Store, LayoutDashboard, Menu } from 'lucide-react';

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Store className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold">RestaurantPro</h1>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/'
                  ? 'bg-indigo-700'
                  : 'hover:bg-indigo-500'
              }`}
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
            <Link
              to="/pos"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/pos'
                  ? 'bg-indigo-700'
                  : 'hover:bg-indigo-500'
              }`}
            >
              <Store className="h-4 w-4 mr-2" />
              POS
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-indigo-500">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}