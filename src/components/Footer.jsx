import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { COMPANY_EMAIL, COMPANY_PHONE, INSTAGRAM_LINK, FACEBOOK_LINK, TIKTOK_LINK } from '../data/tourData';
import logoImg from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white/70" id="footer">
      <div className="gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-heading font-bold text-xl md:text-2xl">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Book your dream tour to Pakistan's northern areas today!
            </p>
          </div>
          <Link
            to="/packages"
            className="bg-white text-accent-600 font-heading font-bold px-8 py-3 rounded-lg hover:bg-warm-50 transition-all hover:shadow-lg text-sm no-underline"
          >
            Explore Packages →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={logoImg} alt="Peak Finder Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-heading font-extrabold text-white">
                Peak<span className="text-accent-400">Finder</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted adventure partner for exploring Pakistan's breathtaking northern areas. From Hunza to Skardu, Naran to Fairy Meadows — we make your mountain dreams come true.
            </p>
            <div className="flex items-center gap-3">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-accent-400 hover:bg-white/15 transition-all">
                <FaFacebookF size={14} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-accent-400 hover:bg-white/15 transition-all">
                <FaInstagram size={14} />
              </a>
              <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-accent-400 hover:bg-white/15 transition-all">
                <FaTiktok size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-accent-400 transition-colors no-underline text-white/70">Home</Link></li>
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Tour Packages</Link></li>
              <li><Link to="/about" className="hover:text-accent-400 transition-colors no-underline text-white/70">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-400 transition-colors no-underline text-white/70">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-accent-400 transition-colors no-underline text-white/70">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Hunza Valley</Link></li>
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Skardu</Link></li>
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Naran Kaghan</Link></li>
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Kashmir</Link></li>
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Fairy Meadows</Link></li>
              <li><Link to="/packages" className="hover:text-accent-400 transition-colors no-underline text-white/70">Nanga Parbat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-accent-400 mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-white font-medium">{COMPANY_PHONE}</p>
                  <p className="text-xs text-white/50">Mon-Sat 9am - 9pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-accent-400 mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-white font-medium">{COMPANY_EMAIL}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p>Johar Town</p>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Peak Finder. All rights reserved.</p>
          <p>Designed with ❤️ for adventure lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
