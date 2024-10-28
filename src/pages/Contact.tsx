import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <Phone className="mr-2 text-green-600" />
              (123) 456-7890
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 text-green-600" />
              info@freshbites.com
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2 text-green-600" />
              123 Foodie Lane, Tasty Town, FL 12345
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 9:00 PM</li>
              <li>Saturday: 10:00 AM - 10:00 PM</li>
              <li>Sunday: 11:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;