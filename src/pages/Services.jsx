import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { id: 1, title: 'Web Development', desc: 'Custom websites and web applications', icon: '🌐' },
    { id: 2, title: 'Mobile Apps', desc: 'iOS and Android app development', icon: '📱' },
    { id: 3, title: 'UI/UX Design', desc: 'User-centered design solutions', icon: '🎨' },
    { id: 4, title: 'Digital Marketing', desc: 'Grow your online presence', icon: '📈' },
    { id: 5, title: 'SEO Optimization', desc: 'Improve search engine rankings', icon: '🔍' },
    { id: 6, title: 'E-commerce Solutions', desc: 'Online stores and shopping carts', icon: '🛒' },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 text-center mb-12">What we can do for you</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link to={`/services/${service.title.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;