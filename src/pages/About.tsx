import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = {
    technical: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'],
    soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                alt="Professional headshot"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
              <p className="text-lg text-gray-600 mb-6">
                With expertise in machine learning, data analytics, and cloud computing, 
                I have led projects in data visualization, predictive modeling, and NLP, 
                transforming complex data into actionable insights. My experience as a 
                Graduate Research Assistant, combined with published research, 
                highlights my strong technical foundation and analytical mindset for solving 
                real-world data challenges.
              </p>
              <p className="text-lg text-gray-600">
                I specialize in React, Node.js, and cloud technologies, with a strong emphasis on
                writing clean, maintainable code and building user-friendly interfaces. When I'm not
                coding, you can find me contributing to open-source projects or mentoring junior
                developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Code2 className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.technical.map((skill) => (
                  <div
                    key={skill}
                    className="bg-indigo-50 px-4 py-2 rounded-md text-indigo-600 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Brain className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.soft.map((skill) => (
                  <div
                    key={skill}
                    className="bg-indigo-50 px-4 py-2 rounded-md text-indigo-600 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What I Value</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <Users className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  I believe the best results come from working together and sharing knowledge within
                  a team.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Zap className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  I'm always exploring new technologies and approaches to solve problems more
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
