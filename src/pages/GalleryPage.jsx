import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { galleryImages } from '../data/tourData';

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="bg-navy-950 py-16 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-lg text-white/70">Glimpses of the breathtaking landscapes waiting for you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-accent-500 text-white shadow-md' 
                  : 'bg-white text-navy-900 border border-warm-200 hover:border-accent-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer border border-warm-200 shadow-sm hover:shadow-xl transition-all"
              onClick={() => setLightboxImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-medium text-sm drop-shadow-md truncate">{img.alt}</p>
                  <span className="text-accent-400 text-xs font-bold uppercase tracking-wider">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all"
            onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
          >
            <FaTimes size={24} />
          </button>
          <div className="max-w-5xl max-h-[85vh] w-full px-4 animate-scale-in" onClick={e => e.stopPropagation()}>
            <img 
              src={lightboxImg.src} 
              alt={lightboxImg.alt} 
              className="w-full h-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{lightboxImg.alt}</p>
              <p className="text-accent-400 text-sm font-bold uppercase tracking-wider">{lightboxImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
