import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Fresh Bites</h1>
      <div className="space-y-6">
        <p>
          Fresh Bites was founded in 2020 with a simple mission: to provide delicious, nutritious meals made from locally-sourced ingredients to our community. Our passion for good food and sustainability drives us to create meals that are not only tasty but also good for you and the environment.
        </p>
        <p>
          We believe that eating well shouldn't be a luxury or a chore. That's why we've made it our goal to make healthy eating accessible, convenient, and enjoyable for everyone. Our team of expert chefs works tirelessly to create a diverse menu that caters to various dietary needs and preferences, ensuring that there's something for everyone at Fresh Bites.
        </p>
        <p>
          At Fresh Bites, we're committed to:
        </p>
        <ul className="list-disc pl-6">
          <li>Using only the freshest, locally-sourced ingredients</li>
          <li>Supporting local farmers and producers</li>
          <li>Minimizing our environmental impact through sustainable practices</li>
          <li>Providing excellent customer service and a seamless ordering experience</li>
          <li>Continuously innovating our menu to bring you exciting and nutritious options</li>
        </ul>
        <p>
          We're more than just a food delivery service - we're your partner in healthy living. Join us in our mission to make the world a healthier, happier place, one meal at a time.
        </p>
      </div>
    </div>
  );
};

export default About;