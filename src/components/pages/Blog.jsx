import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDebounce } from '../../hooks/blogs/useDebounce';
import { useLocalStorage } from '../../hooks/blogs/useLocalStorage';
import { blogAnalysesData, categories, focusAreas } from '../../assets/data/blogdata/blogData.js';


import HeroSection from '../../components/organisms/blog/HeroSection';
import FilterSection from '../../components/filters/FilterSection';
import BlogCard from '../../components/organisms/blog/BlogCard';
import BlogListItem from '../../components/organisms/blog/BlogListItem';

import { Info } from 'lucide-react'; // For the no blogs found message

const Blog = () => {
  // State Management
  const [filters, setFilters] = useState({
    category: 'all',
    focus: 'all',
    search: '',
    sort: 'latest',
    rating: 0,
    premium: 'all'
  });
  const [ui, setUI] = useState({
    isMenuOpen: false,
    selectedBlogId: null, // Not used in this current UI, but kept for potential future use
    viewMode: 'grid', // grid, list
    showFilters: false, // Not explicitly used but can be for responsive filter toggles
    theme: 'light' // Not explicitly used but can be for future theme toggles
  });

  // Custom Hooks
  const debouncedSearch = useDebounce(filters.search, 300);
  const [favorites, setFavorites] = useLocalStorage('blog-favorites', []);
  const [bookmarks, setBookmarks] = useLocalStorage('blog-bookmarks', []);

  // Computed Values
  const filteredBlogs = useMemo(() => {
    return blogAnalysesData.filter(blog => {
      const matchesCategory = filters.category === 'all' ||
        blog.category.toLowerCase() === filters.category;

      const matchesFocus = filters.focus === 'all' ||
        blog.focus.toLowerCase().includes(filters.focus.toLowerCase());

      const matchesSearch = !debouncedSearch ||
        blog.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase())) ||
        blog.keyInsight.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesRating = blog.rating >= filters.rating;

      const matchesPremium = filters.premium === 'all' ||
        (filters.premium === 'premium' && blog.premium) ||
        (filters.premium === 'free' && !blog.premium);

      return matchesCategory && matchesFocus && matchesSearch && matchesRating && matchesPremium;
    }).sort((a, b) => {
      switch (filters.sort) {
        case 'rating':
          return b.rating - a.rating;
        case 'views':
          const parseViews = (views) => {
            if (typeof views === 'number') return views;
            const value = parseFloat(views);
            if (views.includes('M')) return value * 1000000;
            if (views.includes('K')) return value * 1000;
            return value;
          };
          return parseViews(b.views) - parseViews(a.views);
        case 'comments':
          return b.comments - a.comments;
        case 'latest':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });
  }, [filters, debouncedSearch]);

  // Event Handlers passed down to children
  const handleFilterChange = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleFavorite = useCallback((blogId) => {
    setFavorites(prev =>
      prev.includes(blogId)
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId]
    );
  }, [setFavorites]);

  const toggleBookmark = useCallback((blogId) => {
    setBookmarks(prev =>
      prev.includes(blogId)
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId]
    );
  }, [setBookmarks]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
    
      <HeroSection />
      <FilterSection
        filters={filters}
        handleFilterChange={handleFilterChange}
        viewMode={ui.viewMode}
        setViewMode={(mode) => setUI(prev => ({ ...prev, viewMode: mode }))}
        categories={categories}
        focusAreas={focusAreas}
      />

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>{' '}
              ({filteredBlogs.length})
            </h2>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <Info size={48} className="mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">No blogs found matching your criteria.</h2>
              <p>Try adjusting your filters or search terms.</p>
            </div>
          ) : ui.viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  isFavorite={favorites.includes(blog.id)}
                  isBookmarked={bookmarks.includes(blog.id)}
                  toggleFavorite={toggleFavorite}
                  toggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          ) : ( // ui.viewMode === 'list'
            <div className="space-y-6">
              {filteredBlogs.map(blog => (
                <BlogListItem
                  key={blog.id}
                  blog={blog}
                  isFavorite={favorites.includes(blog.id)}
                  isBookmarked={bookmarks.includes(blog.id)}
                  toggleFavorite={toggleFavorite}
                  toggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          )}
        </div>
      </section>

     
    </div>
  );
};

export default Blog;