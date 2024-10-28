import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="bg-white bg-opacity-90 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600 flex items-center">
            <ShoppingBag className="mr-2" />
            Fresh Bites
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-700 hover:text-green-600 transition duration-300">Home</Link></li>
              <li><Link to="/menu" className="text-gray-700 hover:text-green-600 transition duration-300">Menu</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-green-600 transition duration-300">About</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-green-600 transition duration-300">Contact</Link></li>
              <li>
                <Link to="/cart" className="text-gray-700 hover:text-green-600 transition duration-300 flex items-center">
                  <ShoppingCart className="mr-1" />
                  <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;