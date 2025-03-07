import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Trophy } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  role: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  metrics: string[];
  technologies: string[];
};

type Projects = {
  [key: number]: Project;
};

const projects: Projects = {
  1: {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    role: 'Lead Developer',
    duration: '6 months',
    challenges: [
      'Implementing real-time inventory management',
      'Optimizing database queries for large product catalogs',
      'Building a secure payment processing system',
    ],
    solutions: [
      'Utilized WebSocket for real-time updates',
      'Implemented database indexing and caching strategies',
      'Integrated Stripe payment gateway with robust error handling',
    ],
    metrics: [
      '50K+ Monthly Active Users',
      '99.9% Uptime',
      '30% Increase in Sales Conversion',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projects[Number(id)] : null;

  if (!project) {
    return (
      <div className="pt-24 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
        <Link to="/projects" className="text-indigo-600 hover:text-indigo-700">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/projects"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Role</h3>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Duration</h3>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg"
                    >
                      <Trophy className="w-5 h-5 text-indigo-600" />
                      <span className="text-gray-900 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Solutions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;