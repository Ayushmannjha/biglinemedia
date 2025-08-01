import { Zap, Target, BarChart3, Users, Award, Globe, Search ,ArrowRight,Eye,} from 'lucide-react'
import FadeInAnimation from './FadeInAnimation';

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        <FadeInAnimation delay={0}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Now analyzing 500+ top blogs
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock the Secrets of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Blog Success
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dive deep into design, content, SEO, and engagement strategies of the world's most successful blogs.
            Get data-driven insights to supercharge your online presence.
          </p>
        </FadeInAnimation>

        <FadeInAnimation delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group">
              <Target size={20} />
              Submit Blog for Analysis
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2">
              <Eye size={20} />
              Explore Analyses
            </button>
          </div>
        </FadeInAnimation>
        {/* Stats */}
        <FadeInAnimation delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '500+', label: 'Blogs Analyzed', icon: <Globe size={24} /> },
              { number: '50K+', label: 'Insights Generated', icon: <BarChart3 size={24} /> },
              { number: '10K+', label: 'Active Users', icon: <Users size={24} /> },
              { number: '95%', label: 'Accuracy Rate', icon: <Award size={24} /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-blue-600 mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInAnimation>
      </div>
      {/* Process Steps */}
      <FadeInAnimation delay={600}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Search size={32} />,
              title: "Discover",
              desc: "AI-powered blog discovery finds the most influential sites",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: <BarChart3 size={32} />,
              title: "Analyze",
              desc: "Deep dive into UI, UX, content strategy, and performance metrics",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: <Zap size={32} />,
              title: "Extract",
              desc: "Machine learning extracts key patterns and success factors",
              color: "from-orange-500 to-red-500"
            },
            {
              icon: <Target size={32} />,
              title: "Apply",
              desc: "Actionable recommendations tailored to your niche and goals",
              color: "from-green-500 to-emerald-500"
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </FadeInAnimation>
    </div>
  </section>
);

export default HeroSection;