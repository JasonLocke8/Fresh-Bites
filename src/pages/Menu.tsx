import React from 'react';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Fresh Salad', description: 'Mixed greens with seasonal vegetables', price: 8.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Salads' },
  { id: 2, name: 'Grilled Chicken', description: 'Herb-marinated chicken breast', price: 12.99, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Main Courses' },
  { id: 3, name: 'Pasta Primavera', description: 'Whole wheat pasta with fresh vegetables', price: 10.99, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Pasta' },
  { id: 4, name: 'Quinoa Bowl', description: 'Protein-packed quinoa with roasted vegetables', price: 9.99, image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Bowls' },
  { id: 5, name: 'Grilled Salmon', description: 'Wild-caught salmon with lemon butter sauce', price: 14.99, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Main Courses' },
  { id: 6, name: 'Vegetable Stir-Fry', description: 'Assorted vegetables in a savory sauce', price: 11.99, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Main Courses' },
  { id: 7, name: 'Greek Yogurt Parfait', description: 'Layered yogurt with fresh berries and granola', price: 6.99, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Desserts' },
  { id: 8, name: 'Avocado Toast', description: 'Whole grain toast with mashed avocado and toppings', price: 7.99, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', category: 'Breakfast' },
];

const Menu: React.FC = () => {
  const { addToCart } = useCart();

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      {categories.map(category => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.filter(item => item.category === category).map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;