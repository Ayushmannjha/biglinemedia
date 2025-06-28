import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SuccessStoryCard from '../molecules/SuccessStoryCard';
import { successStoriesData } from '../../assets/data/successStories';

const SuccessStories = () => {
  const [filter, setFilter] = useState('all');
  const [stories, setStories] = useState(successStoriesData);

  const categories = ['all', 'Digital Government', 'Smart City', 'Public Safety', 'Transportation'];

  const filteredStories = filter === 'all' 
    ? stories 
    : stories.filter(story => story.tags.includes(filter));

  const handleLearnMore = (story) => {
    // Navigate to case study or open modal
    window.open(story.caseStudyUrl, '_blank');
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hall of Fame
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how we've transformed communities and delivered exceptional results for our clients
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {filteredStories.map((story, index) => (
            <SuccessStoryCard
              key={story.id}
              story={story}
              index={index}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Join Our Hall of Fame?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your community with innovative solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;