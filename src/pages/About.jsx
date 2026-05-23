import React, { useEffect } from 'react';
import { FaCheckCircle, FaAward, FaHeart, FaUsers } from 'react-icons/fa';
import imgAboutHero from '../assets/images/hunzavalley.jpg';
import imgTeam from '../assets/images/fairymeadows.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="bg-navy-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={imgAboutHero} 
            alt="Mountains" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 text-sm font-bold tracking-wider uppercase mb-4 backdrop-blur-md">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">About Peak Finder</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">We are passionate explorers dedicated to sharing the magic of Pakistan's northern areas with the world.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-500 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={imgTeam} 
              alt="Team in Skardu" 
              className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-warm-100 max-w-xs animate-float hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="text-accent-500 text-3xl"><FaAward /></div>
                <div className="text-2xl font-heading font-extrabold text-navy-900">10+ Years</div>
              </div>
              <p className="text-sm text-warm-500 font-medium">Of excellence in tourism across Pakistan</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">Discover the Real Beauty of Pakistan With Us</h2>
            <p className="text-warm-600 mb-6 leading-relaxed">
              Peak Finder started with a simple vision: to showcase the breathtaking, untouched beauty of Pakistan's northern areas while providing safe, comfortable, and premium travel experiences. 
            </p>
            <p className="text-warm-600 mb-8 leading-relaxed">
              Based in Lahore, our team consists of passionate locals, experienced guides, and travel experts who know every valley, trail, and hidden gem from Hunza to Skardu, and Naran to Fairy Meadows. We don't just sell tours; we craft unforgettable memories.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-accent-500 mt-1 text-lg" />
                <span className="text-navy-900 font-medium">Curated itineraries by local experts</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-accent-500 mt-1 text-lg" />
                <span className="text-navy-900 font-medium">Premium transport & handpicked hotels</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-accent-500 mt-1 text-lg" />
                <span className="text-navy-900 font-medium">Commitment to sustainable & responsible tourism</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-navy-950 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/20 rounded-full blur-[100px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent-400 mb-6 mx-auto md:mx-0">
                <FaHeart size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 text-sm leading-relaxed">To provide seamless, safe, and enriching travel experiences that connect people with the majestic nature and rich culture of northern Pakistan.</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent-400 mb-6 mx-auto md:mx-0">
                <FaUsers size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Local Community</h3>
              <p className="text-white/70 text-sm leading-relaxed">We believe in giving back. We hire local guides, use local services, and promote sustainable tourism that benefits the communities we visit.</p>
            </div>
            
            <div className="text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent-400 mb-6 mx-auto md:mx-0">
                <FaAward size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Quality Service</h3>
              <p className="text-white/70 text-sm leading-relaxed">We never compromise on the quality of our vehicles, the standard of our accommodation, or the professionalism of our staff.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
