import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const positions = [
  {
    title: 'Game Developer',
    department: 'Engineering',
    location: 'Silicon Valley, CA',
    type: 'Full-time',
    description: 'We are looking for a passionate game developer to join our team and help create innovative gaming experiences.',
    requirements: [
      'Bachelors degree in Computer Science or related field',
      '3+ years of game development experience',
      'Proficiency in Unity or Unreal Engine',
      'Strong programming skills in C++ or C#',
      'Experience with game optimization and performance tuning'
    ]
  },
  {
    title: 'Game Artist',
    department: 'Art',
    location: 'Silicon Valley, CA',
    type: 'Full-time',
    description: 'Join our art team to create stunning visual assets for our upcoming games.',
    requirements: [
      'Portfolio demonstrating strong artistic skills',
      '3+ years of game art experience',
      'Proficiency in Maya, Blender, or similar 3D software',
      'Experience with texture creation and UV mapping',
      'Knowledge of game art optimization techniques'
    ]
  }
];

const benefits = [
  'Competitive salary and equity',
  'Health, dental, and vision insurance',
  'Flexible work hours',
  'Remote work options',
  'Professional development budget',
  'Game industry events and conferences'
];

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Help us create the next generation of gaming experiences. We're always looking for talented individuals who are passionate about games and innovation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-900 dark:text-white font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-8">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {position.department}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 mr-2" />
                      {position.type}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Competitive
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {position.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li 
                          key={reqIndex}
                          className="text-gray-600 dark:text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full sm:w-auto">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Careers;