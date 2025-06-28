// components/Footer.jsx
import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c136f] text-white pt-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-12 border-b border-gray-500">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-500 text-white p-2 rounded-md">
              🏠
            </div>
            <h2 className="text-xl font-bold">Municipal</h2>
          </div>
          <p className="text-sm text-gray-300">
            Here, you’ll find comprehensive information about our town’s services, events, local government, and resources available to residents and visitors alike.
          </p>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="font-semibold mb-4">Upcoming Events</h3>
          <div className="mb-4 flex gap-3">
            <div className="text-center bg-blue-600 text-white px-2 py-1 rounded">
              <div className="text-xs">Dec</div>
              <div className="text-lg font-bold">21</div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Farmers Market</p>
              <p>6:30 pm - 10:00 pm</p>
              <a href="#" className="text-blue-400 underline text-xs">Barselona IT Hall</a>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-center bg-blue-600 text-white px-2 py-1 rounded">
              <div className="text-xs">Oct</div>
              <div className="text-lg font-bold">15</div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Concert Series</p>
              <p>5:30 pm - 9:00 pm</p>
              <a href="#" className="text-blue-400 underline text-xs">Berlin, Bussines Street</a>
            </div>
          </div>
        </div>

        {/* More Info */}
        <div>
          <h3 className="font-semibold mb-4">More Info</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-300">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300">Departments</a></li>
            <li><a href="#" className="hover:text-blue-300">Services</a></li>
            <li><a href="#" className="hover:text-blue-300">News</a></li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="font-semibold mb-4">Quick Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Clock size={16} /> Mon – Fri: 8:00 am – 6:00 pm</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> 1234 N Maple Grove Rd<br />Boise, ID 83704</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +1 212 425 8617</li>
            <li className="flex items-center gap-2"><Mail size={16} /> information@office.com</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto pt-10 pb-16">
        <h3 className="text-xl font-semibold mb-2">Subscribe Our Newsletter</h3>
        <p className="text-sm text-gray-300 mb-4">Subscribe now to receive the latest updates and news.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
