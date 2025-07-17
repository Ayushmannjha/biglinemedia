// src/components/filters/FilterSection.jsx

import React from 'react';
import {
  Search, ChevronDown, Layers, LineChart,
  // Import all icons needed for focusAreas here
  Palette, BookOpen, TrendingUp, Users, DollarSign, Play, Share2
} from 'lucide-react';

// Define the icon mapping within the component or above it
// This ensures JSX is used in a file processed by React/Babel
const focusAreaIcons = {
  'all': <Layers size={16} />,
  'design': <Palette size={16} />,
  'content': <BookOpen size={16} />,
  'seo': <TrendingUp size={16} />,
  'engagement': <Users size={16} />,
  'monetization': <DollarSign size={16} />,
  'video': <Play size={16} />,
  'social': <Share2 size={16} />
};

const FilterSection = ({ filters, handleFilterChange, viewMode, setViewMode, categories, focusAreas }) => (
  <section className="bg-white py-8 border-b border-gray-100 sticky top-16 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search blogs, topics, or insights..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Category Filter */}
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px]"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.count})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>

          {/* Focus Area Filter */}
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[150px]"
              value={filters.focus}
              onChange={(e) => handleFilterChange('focus', e.target.value)}
            >
              {focusAreas.map(area => (
                // Now you can display the icon based on the 'id'
                <option key={area.id} value={area.id}>
                  {area.name} {/* Icon is usually not visible in <option> but can be used in a custom select component if needed */}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>

          {/* ... rest of your FilterSection component ... */}

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
            <button
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <Layers size={18} />
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <LineChart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FilterSection;