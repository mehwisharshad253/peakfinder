import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaStar, FaFilter } from 'react-icons/fa';
import { tours, destinations } from '../data/tourData';
import imgPackagesHero from '../assets/images/kashmir.jpg';

const Packages = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const searchParams = new URLSearchParams(location.search);
    const destParam = searchParams.get('dest');
    if (destParam) {
      const destObj = destinations.find(d => d.slug === destParam);
      if (destObj) setFilter(destObj.name);
    }
  }, [location]);

  const filterOptions = ['All', 'Hunza & Skardu', 'Skardu', 'Naran & Kaghan Valley', 'Fairy Meadows & Nanga Parbat', 'Azad Kashmir'];

  const filteredTours = filter === 'All' 
    ? tours 
    : tours.filter(t => t.location === filter || t.region === filter);

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="bg-navy-950 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src={imgPackagesHero} 
            alt="Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Choose your next adventure in the majestic mountains of Pakistan.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div className="flex items-center gap-2 text-navy-900 font-bold">
            <FaFilter className="text-accent-500" />
            <span>Filter by Destination:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(opt => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  filter === opt 
                    ? 'bg-accent-500 text-white border-accent-500' 
                    : 'bg-white text-warm-600 border-warm-200 hover:border-accent-500'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 text-sm text-warm-500">
          Showing {filteredTours.length} {filteredTours.length === 1 ? 'package' : 'packages'} {filter !== 'All' && `in ${filter}`}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <Link to={`/packages/${tour.slug}`} key={tour.id} className="bg-white rounded-2xl overflow-hidden card-hover border border-warm-200 no-underline flex flex-col h-full group">
                <div className="relative h-56 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover img-zoom" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 shadow-md">
                    {tour.duration}
                  </div>
                  {tour.featured && (
                    <div className="absolute top-4 left-4 bg-accent-500 px-3 py-1 rounded text-xs font-bold text-white shadow-md uppercase tracking-wider">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-forest-600 mb-2 uppercase tracking-wider">
                    <FaMapMarkerAlt />
                    <span>{tour.location}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy-900 group-hover:text-accent-600 transition-colors mb-3 line-clamp-2">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-warm-500 mb-4">
                    <span className="flex items-center gap-1"><FaStar className="text-yellow-400"/> {tour.rating} ({tour.reviews})</span>
                    <span className="flex items-center gap-1"><FaClock /> {tour.days} Days</span>
                  </div>
                  <p className="text-warm-500 text-sm line-clamp-2 mb-6 flex-grow border-b border-warm-100 pb-6">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-xs text-warm-400 font-medium uppercase">Price</p>
                      <p className="text-lg font-heading font-bold text-navy-900">{tour.priceLabel}</p>
                    </div>
                    <span className="btn-primary py-2 px-4 text-sm no-underline shadow-none">
                      Details
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-warm-200">
              <h3 className="text-xl font-bold text-navy-900 mb-2">No packages found</h3>
              <p className="text-warm-500 mb-6">We couldn't find any packages matching your filter.</p>
              <button 
                onClick={() => setFilter('All')}
                className="btn-primary no-underline"
              >
                View All Packages
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Packages;
