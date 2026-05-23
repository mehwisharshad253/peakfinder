import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaStar, FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaUsers, FaHiking, FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { tours } from '../data/tourData';
import BookingForm from '../components/BookingForm';

const PackageDetail = () => {
  const { slug } = useParams();
  const [tour, setTour] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundTour = tours.find(t => t.slug === slug);
    setTour(foundTour);
  }, [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Tour Package Not Found</h2>
          <Link to="/packages" className="btn-primary no-underline">View All Packages</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-warm-50 pb-20">
      <div className="relative h-[60vh] min-h-[500px]">
        <img src={tour.heroImage || tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <Link to="/packages" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors no-underline">
              <FaArrowLeft /> Back to Packages
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                {tour.days} Days
              </span>
              <span className="flex items-center gap-1 text-white/90 text-sm font-medium">
                <FaMapMarkerAlt className="text-accent-500" /> {tour.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 drop-shadow-lg max-w-4xl leading-tight">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400 text-lg" />
                <span>{tour.rating} ({tour.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHiking className="text-white/60 text-lg" />
                <span>Difficulty: {tour.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-white/60 text-lg" />
                <span>Max Group: {tour.maxGroupSize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-warm-200 mb-8">
              <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">Overview</h2>
              <p className="text-warm-600 leading-relaxed">{tour.description}</p>
              
              <div className="mt-8">
                <h3 className="font-bold text-navy-900 mb-4">Tour Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((h, i) => (
                    <span key={i} className="bg-forest-50 text-forest-700 border border-forest-100 px-4 py-2 rounded-lg text-sm font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {tour.gallery.map((img, i) => (
                <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                  <img src={img} alt={`${tour.shortTitle} gallery ${i}`} className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500 cursor-pointer" />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-warm-200 overflow-hidden mb-8">
              <div className="flex border-b border-warm-200">
                <button 
                  className={`flex-1 py-4 font-heading font-bold text-sm uppercase tracking-wider transition-colors ${activeTab === 'itinerary' ? 'text-accent-600 border-b-2 border-accent-500 bg-warm-50/50' : 'text-warm-500 hover:text-navy-900 hover:bg-warm-50'}`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  Day-by-Day Itinerary
                </button>
                <button 
                  className={`flex-1 py-4 font-heading font-bold text-sm uppercase tracking-wider transition-colors ${activeTab === 'inclusions' ? 'text-accent-600 border-b-2 border-accent-500 bg-warm-50/50' : 'text-warm-500 hover:text-navy-900 hover:bg-warm-50'}`}
                  onClick={() => setActiveTab('inclusions')}
                >
                  Inclusions & Exclusions
                </button>
              </div>

              <div className="p-6 md:p-8">
                {activeTab === 'itinerary' && (
                  <div className="relative pl-4 md:pl-10">
                    <div className="timeline-line"></div>
                    <div className="space-y-12">
                      {tour.itinerary.map((day) => (
                        <div key={day.day} className="relative">
                          <div className="absolute -left-[50px] md:-left-[74px]">
                            <div className="timeline-dot shadow-lg shadow-accent-500/20">
                              {day.day}
                            </div>
                          </div>
                          <div className="bg-warm-50 p-6 rounded-xl border border-warm-100">
                            <h3 className="font-bold text-navy-900 text-lg mb-2">{day.title}</h3>
                            <p className="text-warm-600 text-sm leading-relaxed">{day.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'inclusions' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-navy-900 mb-6 text-lg">
                        <FaCheckCircle className="text-forest-500" /> What's Included
                      </h3>
                      <ul className="space-y-4">
                        {tour.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-warm-600">
                            <FaCheckCircle className="text-forest-400 mt-1 flex-shrink-0" size={14} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-navy-900 mb-6 text-lg">
                        <FaTimesCircle className="text-red-500" /> What's Not Included
                      </h3>
                      <ul className="space-y-4">
                        {tour.exclusions.map((exc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-warm-600">
                            <FaTimesCircle className="text-red-400 mt-1 flex-shrink-0" size={14} />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-lg shadow-navy-900/5 border border-warm-200 overflow-hidden">
              <div className="bg-navy-950 p-6 text-center">
                <p className="text-white/70 text-sm font-medium mb-1 uppercase tracking-wider">Tour Price</p>
                <div className="text-3xl font-heading font-extrabold text-white">
                  {tour.priceLabel}
                </div>
                <p className="text-white/50 text-xs mt-1">per person (starting price)</p>
              </div>
              
              <div className="p-6 bg-warm-50/50 border-b border-warm-100 flex justify-around text-center">
                <div>
                  <FaClock className="text-accent-500 mx-auto mb-2" size={20} />
                  <p className="text-xs font-bold text-navy-900 uppercase">{tour.duration}</p>
                </div>
                <div>
                  <FaCalendarAlt className="text-accent-500 mx-auto mb-2" size={20} />
                  <p className="text-xs font-bold text-navy-900 uppercase">Available</p>
                </div>
              </div>

              <div className="p-6">
                <BookingForm selectedTour={tour.slug} compact={true} />
              </div>
            </div>

            <div className="mt-6 bg-forest-50 p-6 rounded-2xl border border-forest-100 text-sm text-forest-800 flex items-start gap-3">
              <FaShieldAlt className="text-forest-600 mt-0.5 flex-shrink-0" size={18} />
              <p><strong>Secure Booking:</strong> No payment required right now. Submit the form to check availability and finalize details on WhatsApp.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
