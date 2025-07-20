import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Printer, 
  Monitor, 
  PenTool, 
  Image, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';

function Services() {
  const mainServices = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Identity Design",
      description: "Complete brand identity solutions that establish your unique market presence.",
      features: [
        "Logo Design & Variations",
        "Color Palette Development", 
        "Typography Selection",
        "Brand Guidelines",
        "Business Card Design",
        "Letterhead & Stationery"
      ],
      price: "Starting at $500"
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: "Print Design",
      description: "Professional print materials that make a lasting impression on your audience.",
      features: [
        "Flyers & Brochures",
        "Posters & Banners", 
        "Menu Design",
        "Event Materials",
        "Packaging Design",
        "Marketing Collateral"
      ],
      price: "Starting at $150"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Digital Graphics",
      description: "Eye-catching digital designs optimized for online platforms and marketing.",
      features: [
        "Social Media Graphics",
        "Web Banners",
        "Email Templates",
        "Digital Advertisements", 
        "Infographics",
        "Presentation Design"
      ],
      price: "Starting at $100"
    }
  ];

  const additionalServices = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Custom Illustrations",
      description: "Unique hand-crafted illustrations for your specific needs."
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Photo Editing",
      description: "Professional photo retouching and enhancement services."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Design",
      description: "Professional layouts for reports, proposals, and documents."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We discuss your vision, goals, and requirements to understand your project needs."
    },
    {
      step: "02", 
      title: "Concept Development",
      description: "I create initial concepts and design directions based on our consultation."
    },
    {
      step: "03",
      title: "Design & Refinement", 
      description: "Detailed design work with revisions to ensure the perfect final result."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final files delivered in all required formats with ongoing support."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Proven track record with diverse clients and projects"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround", 
      description: "Quick delivery without compromising on quality"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Personalized service and unlimited revisions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all projects"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-sm bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            Design Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional graphic design services tailored to help your business 
            create a strong visual identity and connect with your audience effectively.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design solutions to elevate your brand
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Link to="/contact" className="btn btn-secondary w-full justify-center">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized design services to complement your main projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
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
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach that ensures exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-primary border-2 border-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Why Choose BettyTech?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Dedicated to delivering exceptional design solutions that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your design needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
