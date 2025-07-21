import { motion } from 'framer-motion';

const SuccessStoryCard = ({ 
  story, 
  index, 
  onLearnMore, 
  variant = 'default' // 'default', 'featured', 'compact'
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1 
      }
    }
  };

  const featuredClass = story.featured ? 'md:col-span-2 md:row-span-2' : '';
  const compactClass = variant === 'compact' ? 'h-64' : 'h-80 md:h-96';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative ${story.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${featuredClass} ${compactClass}`}
      onClick={() => onLearnMore(story)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={story.image}
          alt={story.projectTitle}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between text-white">
        {/* Client Logo */}
        <div className="flex justify-between items-start mb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            <img
              src={story.logo}
              alt={story.clientName}
              className="h-8 md:h-10 w-auto opacity-90"
            />
          </div>
          {story.featured && (
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              FEATURED
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
            {story.headline}
          </h3>
          <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-2">
            {story.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {story.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics & CTA */}
        <div className="space-y-4">
          {variant !== 'compact' && (
            <div className="grid grid-cols-3 gap-2 text-center">
              {Object.entries(story.metrics).slice(0, 3).map(([key, value], idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-lg md:text-xl font-bold">{value}</div>
                  <div className="text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          )}
          
          
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStoryCard;