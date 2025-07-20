import React, { useState } from 'react';
import { Filter, ExternalLink, Star } from 'lucide-react';

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Brand Identity', 'Print Design', 'Digital Graphics', 'Marketing Materials'];

  const projects = [
    {
      id: 1,
      title: "Modern Tech Logo",
      category: "Brand Identity",
      image: "/bekky-logo-design.png",
      description: "Clean and modern logo design for technology startup with complete brand guidelines."
    },
    {
      id: 2,
      title: "Restaurant Menu Design",
      category: "Print Design",
      image: "/menu.jpg",
      description: "Elegant menu design for upscale restaurant featuring sophisticated typography and layout."
    },
    {
      id: 3,
      title: "Night Party Flyer",
      category: "Marketing Materials",
      image: "/night-party-flyer.png",
      description: "Eye-catching promotional flyer design for entertainment event with vibrant colors."
    },
    {
      id: 4,
      title: "Corporate Logo Design",
      category: "Brand Identity",
      image: "/albert-logo.png",
      description: "Professional corporate logo design with timeless appeal and versatile applications."
    },
    {
      id: 5,
      title: "Business Flyer",
      category: "Marketing Materials",
      image: "/WEDI.jpg",
      description: "Professional business flyer design for corporate event promotion."
    },
    {
      id: 6,
      title: "Event Promotion",
      category: "Marketing Materials",
      image: "/CS.jpg",
      description: "Creative event promotion design with engaging visual elements."
    },
    {
      id: 7,
      title: "Hair Salon Branding",
      category: "Brand Identity",
      image: "/hairlogo.png",
      description: "Complete branding package for beauty salon including logo and visual identity."
    },
    {
      id: 8,
      title: "Gold Luxury Logo",
      category: "Brand Identity",
      image: "/gold-logo.png",
      description: "Luxury brand logo design with premium gold aesthetic and elegant typography."
    },
    {
      id: 9,
      title: "Social Media Graphics",
      category: "Digital Graphics",
      image: "/makeup.jpg",
      description: "Social media post designs for beauty and cosmetics brand with consistent styling."
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "BettyTech's design work exceeded our expectations. The logo perfectly captures our brand essence.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Local Restaurant",
      text: "The menu design and promotional materials helped increase our customer engagement significantly.",
      rating: 5
    },
    {
      name: "Emma Davis",
      company: "Fashion Boutique",
      text: "Professional, creative, and always delivers on time. Highly recommend BettyTech for any design needs.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-sm bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of creative design projects spanning brand identity, 
            print materials, and digital graphics. Each project represents a unique 
            story and solution tailored to client needs.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-primary">Filter by Category:</h2>
              
              {/* Desktop Filter */}
              <div className="hidden lg:flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Mobile Filter */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg"
                >
                  <Filter className="w-4 h-4" />
                  {activeCategory}
                </button>
                
                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          activeCategory === category ? 'text-primary font-medium' : 'text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="text-gray-600">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="card p-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                        <span className="font-semibold">View Details</span>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What clients say about working with BettyTech
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
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
            Like What You See?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your next project and create something amazing together.
          </p>
          <a href="/contact" className="btn btn-accent">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
