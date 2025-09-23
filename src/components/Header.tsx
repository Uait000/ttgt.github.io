import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and title */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop" 
              alt="Логотип" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-bold text-gray-900 leading-tight">
                Тихорецкий техникум
              </h1>
              <h2 className="text-xs text-gray-600 leading-tight">
                железнодорожного транспорта
              </h2>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;