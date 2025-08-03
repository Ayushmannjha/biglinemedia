import React from 'react';
import { Star, Eye, MessageCircle, ArrowRight, Award, Heart, Bookmark, Clock } from 'lucide-react';
import FadeInAnimation from './FadeInAnimation'; // Adjust the import path as necessary

const BlogListItem = ({ blog, isFavorite, isBookmarked, toggleFavorite, toggleBookmark }) => (
  <FadeInAnimation className="w-full">
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center p-4 border border-gray-100">
      <div className="flex-shrink-0 w-full sm:w-48 h-32 rounded-lg overflow-hidden relative mb-4 sm:mb-0 sm:mr-4">
        <img
          src={blog.thumbnail}
          alt={blog.name}
          className="w-full h-full object-cover"
        />
        
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{blog.name}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => toggleFavorite(blog.id)}
              className={`p-1 rounded-full transition-colors ${isFavorite ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
              title="Add to Favorites"
            >
              <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={() => toggleBookmark(blog.id)}
              className={`p-1 rounded-full transition-colors ${isBookmarked ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              title="Bookmark"
            >
              <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{blog.keyInsight}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  </FadeInAnimation>
);

export default BlogListItem;