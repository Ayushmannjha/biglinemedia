import { Zap, Rocket, ArrowRight, Eye, ChevronDown } from 'lucide-react';
import { heroStats, socialPlatforms } from '../../../assets/data/ScoialMediaData';
import StatCard from './StatCard'; // New sub-component

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating social icons */}
      <div className="absolute inset-0 overflow-hidden">
        {socialPlatforms.map((platform, i) => (
          <div
            key={platform.name}
            className="absolute animate-float"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + (i * 0.5)}s`
            }}
          >
            <div className={`p-4 bg-gradient-to-r ${platform.color} rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform`}>
              <platform.icon className="w-8 h-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 inline-block animate-bounce-slow">
          <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-purple-300 text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Transform Your Social Media Presence
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight animate-pulse-slow">
          Your Social Media
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
            Success Journey
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          We don't just manage your social media – we craft digital experiences that captivate, engage, and convert your audience into loyal brand advocates.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-300">
            <Eye className="w-5 h-5" />
            Watch Demo
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent group-hover:from-purple-300 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          {heroStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-purple-300">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;