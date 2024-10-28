import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-8">Looks like you haven't added any items to your cart yet.</p>
        <a href="/menu" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
          Browse Our Menu
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="bg-gray-200 px-2 py-1 rounded-l"
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded-r"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <div className="flex justify-between items-center border-t pt-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;