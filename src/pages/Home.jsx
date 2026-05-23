import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaStar, FaShieldAlt, FaHiking, FaHeadset, FaQuoteLeft } from 'react-icons/fa';
import { tours, destinations, testimonials, stats } from '../data/tourData';
import imgHero from '../assets/images/skarduhunza.webp';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredTours = tours.filter(t => t.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-warm-50">
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="Mountains of Pakistan" 
            className="w-full h-full object-cover object-center animate-float"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 gradient-hero z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
            Explore The Unseen
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Discover the <span className="text-accent-400">Peaks</span> of Pakistan
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Premium tour packages to Hunza, Skardu, Naran, and Fairy Meadows. Experience adventure, culture, and unmatched beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages" className="btn-primary text-lg px-8 py-4 no-underline shadow-xl shadow-accent-500/20">
              View All Packages
            </Link>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4 no-underline bg-white/10 backdrop-blur-sm">
              Custom Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Our Featured Tours</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-warm-500 max-w-2xl mx-auto">Handpicked adventures that guarantee unforgettable memories. Book our most popular tour packages at the best prices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {featuredTours.map((tour) => (
            <Link to={`/packages/${tour.slug}`} key={tour.id} className="bg-white rounded-2xl overflow-hidden card-hover border border-warm-200 no-underline flex flex-col h-full group">
              <div className="relative h-64 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover img-zoom" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 shadow-md">
                  {tour.duration}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <FaMapMarkerAlt className="text-accent-500" />
                    <span>{tour.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-heading font-bold text-navy-900 group-hover:text-accent-600 transition-colors line-clamp-2">
                    {tour.title}
                  </h3>
                </div>
                <p className="text-warm-500 text-sm line-clamp-3 mb-6 flex-grow">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-warm-100">
                  <div>
                    <p className="text-xs text-warm-400 font-medium uppercase tracking-wider">Starting From</p>
                    <p className="text-lg font-heading font-bold text-forest-600">{tour.priceLabel}</p>
                  </div>
                  <span className="text-accent-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/packages" className="inline-block text-navy-900 font-bold border-b-2 border-accent-500 pb-1 hover:text-accent-600 transition-colors no-underline">
            View All Tour Packages
          </Link>
        </div>
      </section>

      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-600/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Travel With Peak Finder?</h2>
              <div className="w-16 h-1 bg-accent-500 mb-8"></div>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We don't just organize tours; we craft unforgettable experiences. With over a decade of expertise in Pakistan's northern areas, we ensure your journey is safe, comfortable, and truly magical.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-accent-400">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Safe & Secure</h4>
                    <p className="text-sm text-white/60">Your safety is our top priority with experienced local drivers and guides.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-accent-400">
                    <FaStar size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Premium Service</h4>
                    <p className="text-sm text-white/60">Top-rated hotels, luxury transport, and excellent meals included.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-accent-400">
                    <FaHiking size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Local Experts</h4>
                    <p className="text-sm text-white/60">Our guides know the hidden gems, culture, and history of every valley.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-accent-400">
                    <FaHeadset size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">24/7 Support</h4>
                    <p className="text-sm text-white/60">We are always available during your trip for any assistance needed.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-transform">
                  <div className="text-4xl md:text-5xl font-heading font-extrabold text-accent-400 mb-2">{stat.number}</div>
                  <div className="text-sm font-medium tracking-wide text-white/80 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">Popular Destinations</h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-warm-500 max-w-2xl mx-auto">Explore the most breathtaking valleys and mountains of Pakistan.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((dest, idx) => (
            <Link 
              key={idx} 
              to={`/packages?dest=${dest.slug}`}
              className={`relative rounded-2xl overflow-hidden group block ${idx === 0 || idx === 3 ? 'row-span-2 h-[300px] md:h-[400px]' : 'h-[142px] md:h-[188px]'}`}
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent group-hover:from-navy-900/90 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-white font-heading font-bold text-lg md:text-xl group-hover:text-accent-400 transition-colors">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-warm-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <div className="section-divider mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-warm-200">
                <div className="flex gap-1 text-accent-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-warm-600 text-sm italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-warm-100">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-warm-400">{review.tour}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
