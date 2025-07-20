import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Clock, 
  Heart,
  Lightbulb,
  Target,
  Palette,
  Monitor,
  Printer,
  PenTool
} from 'lucide-react';

function About() {
  const skills = [
    { name: "Adobe Photoshop", level: 95 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Adobe InDesign", level: 85 },
    { name: "Brand Identity", level: 92 },
    { name: "Print Design", level: 88 },
    { name: "Digital Graphics", level: 90 }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Design",
      description: "Every project is approached with genuine enthusiasm and creative energy."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly exploring new design trends and techniques to deliver fresh solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focused on creating designs that not only look great but achieve business goals."
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers across various industries"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "250+",
      label: "Projects Completed",
      description: "Successful design projects delivered"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "5+",
      label: "Years Experience",
      description: "Professional design experience"
    }
  ];

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Identity",
      description: "Creating memorable brand experiences"
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Print Design",
      description: "Professional marketing materials"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Digital Graphics",
      description: "Engaging online visual content"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Custom Illustrations",
      description: "Unique artistic creations"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-sm bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-display font-bold text-primary leading-tight">
                  About
                  <span className="block text-primary-light">BettyTech</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional graphic designer with over 5 years of experience creating 
                  stunning visual identities and marketing materials that help businesses 
                  stand out and connect with their audiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Work With Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="btn btn-secondary">
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-primary to-primary-light rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl text-gray-400">👩‍🎨</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary mb-4">
                My Design Journey
              </h2>
              <p className="text-xl text-gray-600">
                From passion to profession - the story behind BettyTech
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">
                  The Beginning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  My journey into graphic design began with a simple fascination for visual storytelling. 
                  What started as a hobby quickly evolved into a passion, and eventually became my profession. 
                  I discovered that design has the power to communicate, inspire, and transform businesses.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Over the years, I've had the privilege of working with diverse clients, from startups 
                  to established businesses, helping them create visual identities that truly represent 
                  their values and connect with their audiences.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">
                  Design Philosophy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe that great design is not just about making things look beautiful—it's about 
                  solving problems and creating meaningful connections. Every project I undertake is 
                  approached with careful consideration of the client's goals, target audience, and 
                  brand personality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My design process is collaborative and iterative, ensuring that the final result 
                  not only meets but exceeds expectations. I'm committed to delivering designs that 
                  are both visually striking and strategically effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technical proficiency combined with creative vision
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Achievements
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Milestones that reflect dedication and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <p className="text-gray-200 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design services to meet all your visual communication needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-6 mx-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project 
            and discuss how we can work together.
          </p>
          <Link to="/contact" className="btn btn-accent">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
