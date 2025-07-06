import React, { useState } from 'react';
import Header from './Header';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nwabethroseonuoha@gmail.com',
      href: 'mailto:nwabethroseonuoha@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '08064111501',
      href: 'tel:08064111501'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-950 pt-32 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="w-full max-w-3xl mx-auto text-center mb-16 px-4">
          <h1 className="text-6xl lg:text-7xl font-extrabold font-display text-white mb-6 drop-shadow-lg">
            <span className="block">Let's Connect</span>
          </h1>
          <p className="text-xl text-white/80 mb-2">Ready to bring your vision to life?</p>
          <p className="text-lg text-white/60">I'm here to help you create stunning designs that make your brand stand out.</p>
        </div>
        {/* Main Card Layout */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 pb-24">
          {/* Contact Form Card */}
          <div className="bg-white/10 glass-dark rounded-3xl shadow-2xl p-10 flex flex-col justify-center animate-slide-up">
            <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Email Address"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Subject"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder="Your Message"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl text-white font-semibold text-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner w-5 h-5 mr-2"></div> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </button>
              {submitted && (
                <div className="p-4 mt-2 bg-green-600/10 border border-green-400/30 rounded-xl text-green-300 flex items-center gap-2 animate-fade-in">
                  <MessageCircle className="w-5 h-5" /> Message sent successfully!
                </div>
              )}
            </form>
          </div>
          {/* Contact Info Card */}
          <div className="bg-white/10 glass-dark rounded-3xl shadow-2xl p-10 flex flex-col gap-10 animate-slide-up">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-5 p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/10 hover:from-purple-600/30 hover:to-blue-600/20 transition-all"
                  >
                    <span className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"><Icon className="w-6 h-6 text-white" /></span>
                    <span className="text-white/80 font-medium">{value}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Follow Me</h3>
              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/10 hover:from-pink-600/30 hover:to-purple-600/20 transition-all"
              >
                <span className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg"><FaInstagram className="w-6 h-6 text-white" /></span>
                <span className="text-white/80 font-medium">@Betty-Empire</span>
              </a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-lg">Available for projects</span>
            </div>
            <p className="text-white/70 mt-2">
              I'm currently accepting new projects and collaborations. Let's discuss how we can work together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
