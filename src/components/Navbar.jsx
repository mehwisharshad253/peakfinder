import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTiktok, FaBars, FaTimes } from 'react-icons/fa';
import { COMPANY_EMAIL, COMPANY_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK } from '../data/tourData';
import logoImg from '../assets/images/logo.jpg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isDarkHero = location.pathname === '/';
  const navClass = scrolled || !isDarkHero
    ? 'navbar-solid'
    : 'navbar-transparent';

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-[9990] ${navClass}`}
      >
        <div className="hidden md:block border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 text-xs text-white/70">
            <div className="flex items-center gap-6">
              <span>📞 {COMPANY_PHONE}</span>
              <span>✉️ {COMPANY_EMAIL}</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                <FaFacebookF size={13} />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                <FaInstagram size={13} />
              </a>
              <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                <FaTiktok size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            <Link to="/" className="flex items-center gap-2 group" id="logo-link">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110">
                <img src={logoImg} alt="Peak Finder Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-heading font-extrabold text-white tracking-tight">
                  Peak<span className="text-accent-400">Finder</span>
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    id={`nav-${link.label.toLowerCase()}`}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-accent-400 bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                );
              })}
              <Link
                to="/packages"
                className="ml-3 btn-primary text-sm py-2 px-5 no-underline"
                id="nav-book-now"
              >
                Book Now
              </Link>
            </div>

            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div className="mobile-menu">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={logoImg} alt="Peak Finder Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-lg font-heading font-extrabold text-white">
                  Peak<span className="text-accent-400">Finder</span>
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/60 hover:text-white p-1"
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'text-accent-400 bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                to="/packages"
                className="btn-primary w-full justify-center text-sm no-underline"
              >
                Book Now
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
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

            <div className="mt-6 text-white/40 text-xs space-y-1">
              <p>📞 {COMPANY_PHONE}</p>
              <p>✉️ {COMPANY_EMAIL}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
