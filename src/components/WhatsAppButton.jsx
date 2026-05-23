import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppBookingUrl } from '../data/tourData';

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppBookingUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      id="whatsapp-float-btn"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
