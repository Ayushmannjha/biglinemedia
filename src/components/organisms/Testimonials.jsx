import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialCard from '../molecules/TestimonialCard';
import {testimonialData }from '../../assets/data/Testimonnials'; // Assuming you have a data file for testimonials

import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Residents
              </span>{' '}
              Say
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Read what our residents have to say about the positive impact of our municipality services and community initiatives
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">98%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-white/70">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4.9★</div>
                <div className="text-sm text-white/70">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-custom-active'
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="max-w-xl testimonial-swiper"
            >
              {testimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <button className="swiper-button-prev-custom bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="swiper-button-next-custom bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default Testimonials;