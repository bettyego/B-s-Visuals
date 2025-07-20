import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Palette, Printer, Monitor, CheckCircle } from 'lucide-react';

function Homepage() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Complete brand identity design including logos, color schemes, and brand guidelines that make your business memorable."
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Print Design",
      description: "Professional print materials including flyers, brochures, business cards, and marketing collateral that impress."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Digital Graphics",
      description: "Social media graphics, web banners, and digital marketing materials optimized for online platforms."
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "100+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "250+", label: "Projects Completed" },
    { icon: <Star className="w-6 h-6" />, number: "5+", label: "Years Experience" }
  ];

  const featuredWork = [
    {
      id: 1,
      title: "Modern Logo Design",
      category: "Brand Identity",
      image: "/bekky-logo-design.png",
      description: "Clean and modern logo design for tech startup"
    },
    {
      id: 2,
      title: "Restaurant Menu",
      category: "Print Design", 
      image: "/menu.jpg",
      description: "Elegant menu design for upscale restaurant"
    },
    {
      id: 3,
      title: "Event Flyer",
      category: "Marketing Materials",
      image: "/night-party-flyer.png",
      description: "Eye-catching promotional flyer design"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "BettyTech delivered exceptional design work that perfectly captured our brand vision. Highly professional and creative!",
      rating: 5
    },
    {
      name: "Michael Chen", 
      company: "Local Restaurant",
      text: "The menu design and branding materials helped transform our restaurant's image. Outstanding quality and service.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary leading-tight">
                  Professional
                  <span className="block text-primary-light">Graphic Design</span>
                  <span className="block text-primary">Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your business with stunning visual designs that capture attention, 
                  communicate your message, and drive results. From brand identity to digital graphics.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="btn btn-primary">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get Started
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/bekky-logo-design.png" 
                    alt="Logo Design" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img 
                    src="/menu.jpg" 
                    alt="Menu Design" 
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/night-party-flyer.png" 
                    alt="Flyer Design" 
                    className="w-full h-32 object-cover rounded-lg shadow-lg"
                  />
                  <img 
                    src="/albert-logo.png" 
                    alt="Brand Identity" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions to help your business create a strong visual identity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card text-center group">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-accent">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of recent projects that demonstrate creativity and professional excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="card p-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold">View Project</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-primary">
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with BettyTech
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed text-center">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's work together to create stunning designs that elevate your brand and connect with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-accent">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
