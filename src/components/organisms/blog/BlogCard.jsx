import React from 'react';
import { Star, Calendar, Eye, MessageCircle, ArrowRight, Award, Heart, Bookmark,Clock } from 'lucide-react';
import FadeInAnimation from './FadeInAnimation';

const BlogCard = ({ blog, isFavorite, isBookmarked, toggleFavorite, toggleBookmark }) => (
  <FadeInAnimation className="h-full">
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden border border-gray-100">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-2xl">
        <img
          src={blog.thumbnail}
          alt={blog.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <h3 className="text-xl font-bold text-white leading-tight">{blog.name}</h3>
          {blog.premium && (
            <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <Award size={14} /> Premium
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => toggleFavorite(blog.id)}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors ${isFavorite ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
            title="Add to Favorites"
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => toggleBookmark(blog.id)}
            className={`p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors ${isBookmarked ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            title="Bookmark"
          >
            <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center mr-3"><Calendar size={14} className="mr-1" /> {blog.date}</span>
          <span className="flex items-center"><Clock size={14} className="mr-1" /> {blog.readTime} min read</span>
        </div>
        <p className="text-gray-700 text-base mb-4 flex-grow">{blog.keyInsight}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-blue-600 font-semibold">
              <Star size={16} fill="currentColor" className="mr-1" /> {blog.rating}
            </span>
            <span className="flex items-center">
              <Eye size={16} className="mr-1" /> {blog.views}
            </span>
            <span className="flex items-center">
              <MessageCircle size={16} className="mr-1" /> {blog.comments}
            </span>
          </div>
          <a href={`https://www.blogger.com/about/?bpli=1&pli=1`} className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
            View Analysis
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </FadeInAnimation>
);

export default BlogCard;