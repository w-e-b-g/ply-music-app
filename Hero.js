import React from 'react';

const Hero = ({ description }) => (
  <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg">
    <p className="text-lg">{description}</p>
  </section>
);

export default Hero;