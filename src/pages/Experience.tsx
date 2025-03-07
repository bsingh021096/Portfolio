import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2020 - Present',
      description: [
        'Led development of enterprise-scale web applications using React and Node.js',
        'Improved system performance by 40% through optimization and caching strategies',
        'Mentored junior developers and implemented best practices',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      duration: '2018 - 2020',
      description: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with design team to improve UX/UI',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Co',
      duration: '2016 - 2018',
      description: [
        'Built and maintained responsive web applications',
        'Participated in code reviews and team planning sessions',
        'Assisted in the migration of legacy systems to modern frameworks',
      ],
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Tech University',
      duration: '2014 - 2016',
      description: 'Specialized in Software Engineering and Distributed Systems',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'State University',
      duration: '2010 - 2014',
      description: 'Deans List, Computer Science Club President',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-indigo-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AWS Certified Solutions Architect</h3>
                <p className="text-gray-600">Amazon Web Services</p>
                <p className="text-gray-500">2022 - Present</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Scrum Master</h3>
                <p className="text-gray-600">Scrum.org</p>
                <p className="text-gray-500">2021 - Present</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <span className="text-gray-500">{edu.duration}</span>
                  </div>
                  <p className="text-indigo-600 mb-2">{edu.school}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;