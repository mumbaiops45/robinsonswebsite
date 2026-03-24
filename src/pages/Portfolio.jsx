import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'E-commerce Platform', category: 'Web Development', year: '2024' },
    { id: 2, title: 'Mobile Banking App', category: 'Mobile Apps', year: '2023' },
    { id: 3, title: 'Corporate Website', category: 'Web Design', year: '2024' },
    { id: 4, title: 'CRM System', category: 'Web Development', year: '2023' },
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Portfolio</h1>
        <p className="text-lg text-gray-600 text-center mb-12">Some of our recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category} • {project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;