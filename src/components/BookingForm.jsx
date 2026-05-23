import React, { useState } from 'react';
import { FaWhatsapp, FaUser, FaPhone, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { tours, WHATSAPP_NUMBER } from '../data/tourData';

const BookingForm = ({ selectedTour = '', compact = false }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    tour: selectedTour,
    date: '',
    people: '1',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTourObj = tours.find((t) => t.slug === form.tour);
    const tourName = selectedTourObj ? selectedTourObj.title : form.tour || 'Not selected';
    const message = `*New Tour Booking Inquiry — Peak Finder*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n🏔️ Tour: ${tourName}\n📅 Date: ${form.date}\n👥 People: ${form.people}\n\nPlease confirm availability and share details. Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? '' : 'space-y-4'} id="booking-form">
      {!compact && (
        <div className="text-center mb-6">
          <h3 className="font-heading font-bold text-xl text-navy-900">Book Your Tour</h3>
          <p className="text-warm-500 text-sm mt-1">Fill in the details and we'll get back to you via WhatsApp</p>
        </div>
      )}

      <div className={compact ? 'space-y-3' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" size={13} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input pl-9"
            id="booking-name"
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" size={13} />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="form-input pl-9"
            id="booking-phone"
          />
        </div>

        <div className="relative">
          <select
            name="tour"
            value={form.tour}
            onChange={handleChange}
            required
            className="form-select"
            id="booking-tour"
          >
            <option value="">Select Tour Package</option>
            {tours.map((t) => (
              <option key={t.id} value={t.slug}>
                {t.title} — {t.priceLabel}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" size={13} />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="form-input pl-9"
            id="booking-date"
          />
        </div>

        <div className={compact ? '' : 'md:col-span-2'}>
          <div className="relative">
            <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400" size={13} />
            <select
              name="people"
              value={form.people}
              onChange={handleChange}
              className="form-select pl-9"
              id="booking-people"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Person' : 'People'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn-whatsapp w-full justify-center mt-4 text-sm"
        id="booking-submit"
      >
        <FaWhatsapp size={18} />
        Book via WhatsApp
      </button>
    </form>
  );
};

export default BookingForm;
