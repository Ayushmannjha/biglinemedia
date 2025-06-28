import React, { useState, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import TrustBadge from '../../../atom/electionmangement/TrustBadge';
import CampaignCard from '../../../atom/electionmangement/CampaignCard';
import IndianSection from '../../../atom/electionmangement/IndianSection';
import CampaignFeatureCard from '../../../atom/electionmangement/CampaignFeatureCard';
import StatCounter from '../../../atom/electionmangement/StatCounter';
import TestimonialSlider from '../../../atom/electionmangement/TestimonialSlider';
import CredibilityBanner from '../../../atom/electionmangement/CredibilityBanner';
import  {config }from '../../../../assets/data/PoliticalCampaignPage';
import { PoliticalPage } from '../../../../assets/data/PoliticalPageAnimations';
// Indian-themed Animation Variants (remain mostly the same, as they're stylistic)










const PoliticalCampaignPage = () => {
  

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-green-50 text-gray-800 min-h-screen relative overflow-hidden">
      {/* Credibility Banner */}
      <CredibilityBanner />
      {/* Decorative Ashoka Chakra */}
      <motion.div
        className="fixed top-20 right-10 text-6xl opacity-5 pointer-events-none z-0"
        variants={PoliticalPage.wheelOfDharma}
        animate="animate"
      >
        ☸️
      </motion.div>
      {/* Hero Section */}
      <motion.div
         className="relative py-20 px-6 text-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,153,51,0.1), rgba(0,0,0,0.3)), url(${config.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
           className="max-w-5xl mx-auto"
          variants={PoliticalPage.parliamentWave}
          initial="initial"
          animate="animate"
        >
          <motion.h1
             className="text-5xl font-bold mb-4 text-orange-800"
            variants={PoliticalPage.slideInFromTricolor}
          >
            {config.hero.title}
          </motion.h1>
          <motion.h2
             className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
            variants={PoliticalPage.slideInFromTricolor}
          >
            {config.hero.subtitle}
          </motion.h2>
          <motion.p
             className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700"
            variants={PoliticalPage.slideInFromTricolor}
          >
            {config.hero.description}
          </motion.p>
          {/* Trust Indicators */}
          <motion.div
             className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
            variants={PoliticalPage.parliamentWave}
          >
            {config.trustIndicators.map((indicator, i) => (
              <TrustBadge key={i} {...indicator} delay={i * 0.2} />
            ))}
          </motion.div>
          <motion.button
            className="bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl"
            variants={PoliticalPage.lotusBloom}
            whileHover={{
               scale: 1.1,
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {config.hero.ctaLabel}
          </motion.button>
        </motion.div>
      </motion.div>
      {/* Challenge Section */}
      <IndianSection title="आपकी चुनौतियाँ / Your Challenges" icon="🤔" backgroundPattern="ashoka">
        <motion.p
           className="text-center mb-8 text-lg text-gray-600"
          variants={PoliticalPage.slideInFromTricolor}
        >
          भारत में एक सफल राजनीतिक अभियान चलाना जटिल हो सकता है। आप सोच रहे होंगे:
        </motion.p>
        <motion.div
           className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={PoliticalPage.parliamentWave}
        >
          {config.problems.map((item, i) => (
            <motion.div key={i} variants={PoliticalPage.pillarsRise}>
              <CampaignCard variant="tricolor" delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-lg font-medium text-red-600 mb-2">{item.problem}</p>
                  <p className="text-sm text-gray-600 italic">{item.english}</p>
                </div>
              </CampaignCard>
            </motion.div>
          ))}
        </motion.div>
      </IndianSection>
      {/* Solution Section */}
      <IndianSection title="हमारा समाधान / Our Solution" icon="✅" backgroundPattern="parliament">
        <motion.div
           className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-200"
          variants={PoliticalPage.lotusBloom}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-white">
                  <th className="text-left p-6 text-lg font-bold">आपकी समस्याएं / Your Problems</th>
                  <th className="text-left p-6 text-lg font-bold">हमारे समाधान / Our Solutions</th>
                </tr>
              </thead>
              <tbody>
                {config.problems.map(({ problem, solution }, idx) => (
                  <motion.tr
                    key={idx}
                    className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 transition-all duration-500 border-b border-gray-200"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <td className="p-6">
                      <span className="block text-lg">{problem}</span>
                    </td>
                    <td className="p-6">
                      <span className="block text-lg font-semibold text-green-700">{solution}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </IndianSection>
      {/* Features Section */}
      <IndianSection title="हमारी सेवाएं / Our Services" icon="🛠️" backgroundPattern="lotus">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {config.features.map((feature, i) => (
            <CampaignFeatureCard
              key={i}
              {...feature}
              delay={i * 0.2}
            />
          ))}
        </div>
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {config.stats.map((stat, i) => (
            <StatCounter key={i} {...stat} delay={i} />
          ))}
        </div>
      </IndianSection>
      {/* Testimonials */}
      <IndianSection title="ग्राहकों की आवाज़ / Client Testimonials" icon="🗣️" backgroundPattern="parliament">
        <TestimonialSlider testimonials={config.testimonials} />
      </IndianSection>
      {/* Clients Section */}
      <IndianSection title="हमारे ग्राहक / Our Clients" icon="🤝" backgroundPattern="ashoka">
        <motion.div
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={PoliticalPage.parliamentWave}
        >
          {config.clients.map((client, i) => (
            <motion.div key={i} variants={PoliticalPage.pillarsRise}>
              <CampaignCard variant="parliament" delay={i * 0.1} className="text-center">
                <div className="text-4xl mb-3">{client.icon}</div>
                <h3 className="font-bold text-blue-800 mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{client.english}</p>
                <div className="bg-orange-100 rounded-full px-3 py-1 inline-block">
                  <span className="text-orange-700 font-bold">{client.count}</span>
                </div>
              </CampaignCard>
            </motion.div>
          ))}
        </motion.div>
        {/* Final CTA */}
        <motion.div
           className="bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 p-10 rounded-2xl shadow-2xl text-center text-white border-4 border-yellow-400"
          variants={PoliticalPage.lotusBloom}
          whileHover={{
             scale: 1.02,
            boxShadow: "0 30px 60px rgba(0,0,0,0.2)"
          }}
        >
          <h3 className="text-4xl font-bold mb-4">
            🚀 सफल राजनीतिक अभियान के लिए तैयार हैं?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join leaders and parties shaping India's political landscape
          </p>
          <motion.button
            className="bg-white text-orange-600 px-12 py-4 rounded-full font-bold text-xl shadow-lg"
            whileHover={{
               scale: 1.1,
              boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            निःशुल्क परामर्श पाएं / Get Free Consultation
          </motion.button>
        </motion.div>
      </IndianSection>
    </div>
  );
};

export default PoliticalCampaignPage;