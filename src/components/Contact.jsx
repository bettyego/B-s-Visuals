import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
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
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@bettytech.com',
      href: 'mailto:hello@bettytech.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+234 806 411 1501',
      href: 'tel:+2348064111501',
      description: 'Call for urgent inquiries'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#',
      description: 'Available for local meetings'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Response Time',
      value: '24 Hours',
      href: '#',
      description: 'Typical response time'
    }
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      name: 'Instagram',
      handle: '@bettytech_designs',
      url: 'https://instagram.com/bettytech_designs',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      name: 'Facebook',
      handle: 'BettyTech Designs',
      url: 'https://facebook.com/bettytechdesigns',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      handle: 'Betty Tech',
      url: 'https://linkedin.com/in/bettytech',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaBehance className="w-5 h-5" />,
      name: 'Behance',
      handle: 'BettyTech',
      url: 'https://behance.net/bettytech',
      color: 'from-blue-400 to-purple-500'
    }
  ];

  const projectTypes = [
    'Brand Identity',
    'Print Design',
    'Digital Graphics',
    'Logo Design',
    'Marketing Materials',
    'Other'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
    'Let\'s discuss'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-sm bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? I'm here to help you create stunning designs 
            that make your brand stand out. Let's discuss your project and make it happen.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Start Your Project
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and I'll get back to you within 24 hours. 
                  The more details you provide, the better I can understand your needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Message sent successfully!</div>
                      <div className="text-sm">I'll get back to you within 24 hours.</div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Have questions or want to discuss your project? I'm here to help. 
                  Choose the best way to reach out to me.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-1">{info.label}</h3>
                        <a
                          href={info.href}
                          className="text-lg text-gray-900 hover:text-primary transition-colors duration-300 block"
                        >
                          {info.value}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Follow My Work
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card p-4 text-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white mx-auto mb-3`}>
                        {social.icon}
                      </div>
                      <div className="text-sm font-medium text-gray-900">{social.name}</div>
                      <div className="text-xs text-gray-600">{social.handle}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="card bg-green-50 border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800">Available for New Projects</span>
                </div>
                <p className="text-green-700 text-sm leading-relaxed">
                  I'm currently accepting new projects and collaborations. 
                  Let's discuss how we can work together to bring your vision to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
