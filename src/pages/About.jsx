import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a passionate team of developers and designers dedicated to creating amazing digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">To help businesses succeed through innovative digital solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">To be the leading digital agency known for quality and innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;