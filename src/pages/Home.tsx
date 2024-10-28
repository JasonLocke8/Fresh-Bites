import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ];

  return (
    <div className="space-y-12">
      <section className="relative">
        <Slider {...sliderSettings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="relative h-[60vh]">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4">Fresh Bites</h1>
                  <p className="text-xl mb-8">Delicious, healthy food delivered to your doorstep</p>
                  <Link to="/menu" className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300">
                    View Our Menu
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Fresh Bites?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Fresh Ingredients</h3>
            <p>We use only the freshest, locally-sourced ingredients in all our dishes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Healthy Options</h3>
            <p>Our menu caters to various dietary needs, including vegetarian and gluten-free options.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p>Enjoy your meal within 30 minutes of ordering, hot and fresh at your doorstep.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740&auto=format&fit=crop&w=500&q=60" alt="Vegetarian Bowl" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Vegetarian Bowl</h3>
              <p className="text-gray-600">A colorful mix of fresh vegetables and grains</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1740&auto=format&fit=crop&w=500&q=60" alt="Grilled Salmon" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Grilled Salmon</h3>
              <p className="text-gray-600">Perfectly grilled salmon with a side of vegetables</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&w=500&q=60" alt="Quinoa Salad" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Quinoa Salad</h3>
              <p className="text-gray-600">A protein-packed salad with fresh greens and quinoa</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;