import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Briefcase, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
              >
                Hi, I'm Bhavya Singh
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-8"
              >
                Senior Full Stack Developer specializing in building exceptional digital experiences
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                alt="Professional headshot"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <User className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                About Me
              </h3>
              <p className="text-gray-600">
                Learn more about my background, skills, and what drives me as a developer.
              </p>
            </Link>
            <Link
              to="/projects"
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Code2 className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                Projects
              </h3>
              <p className="text-gray-600">
                Explore my latest work and see how I solve real-world problems.
              </p>
            </Link>
            <Link
              to="/experience"
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Briefcase className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                Experience
              </h3>
              <p className="text-gray-600">
                View my professional journey and the impact I've made.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
