import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your cross-border trade finance operations? Get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="Tell us about your trade finance needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">contact@tradesync.ai</p>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600">+91 79907 79342</p>
                    <p className="text-sm text-slate-500">Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Location</h3>
                    <p className="text-slate-600">Mumbai, India</p>
                    <p className="text-sm text-slate-500">Serving Indian and UK markets</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 2:00 PM IST</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Service Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">United Kingdom</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">Cross-border Trade</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-orange-600" />
                  <span className="text-slate-700">Smart Contracts</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="#/demo/domestic" className="hover:underline">
                  Domestic Bank Demo
                </a>
                <a href="#/demo/international" className="hover:underline">
                  International Bank Demo
                </a>
                <a href="#/about" className="hover:underline">
                  About Us
                </a>
                <a href="#/terms" className="hover:underline">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
