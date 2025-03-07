import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  image: string;
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    credentialId: 'AWS-ASA-12345',
    verificationUrl: 'https://aws.amazon.com/verification',
    description: 'Expertise in designing distributed systems and deploying applications on AWS infrastructure.',
    skills: ['EC2', 'S3', 'Lambda', 'VPC', 'CloudFormation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  },
  {
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: 'January 2024',
    credentialId: 'PSM-123456',
    verificationUrl: 'https://www.scrum.org/verification',
    description: 'Certified in Scrum framework implementation and Agile project management methodologies.',
    skills: ['Scrum', 'Agile', 'Sprint Planning', 'Team Leadership'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'December 2023',
    credentialId: 'GCP-DEV-789',
    verificationUrl: 'https://google.com/verification',
    description: 'Proficiency in developing and managing applications on Google Cloud Platform.',
    skills: ['App Engine', 'Cloud Functions', 'Cloud SQL', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
  },
];

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h1>
            <p className="text-lg text-gray-600">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                      <p className="text-white/80">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4 text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Skills Validated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-2" />
                      <span className="text-sm">ID: {cert.credentialId}</span>
                    </div>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                    >
                      <span className="text-sm mr-1">Verify</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Certifications;