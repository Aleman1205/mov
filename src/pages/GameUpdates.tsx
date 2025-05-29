import React from 'react';
import Container from '../components/ui/Container';
import { Calendar } from 'lucide-react';

const updates = [
  {
    version: '1.0.0',
    date: '2025-04-09',
    title: 'Initial Release',
    description: 'First public release of Campus Zero',
    changes: [
      'Complete main story campaign',
      'Basic combat mechanics',
      'Character customization',
      'Achievement system'
    ]
  },
  {
    version: '1.0.1',
    date: '2025-04-16',
    title: 'Bug Fixes & Improvements',
    description: 'First patch addressing initial feedback',
    changes: [
      'Performance optimizations',
      'Fixed save game issues',
      'Improved controller support',
      'Balance adjustments'
    ]
  }
];

const GameUpdates: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Game Updates
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay informed about the latest changes and improvements to our games
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {update.title}
                  </h2>
                  <span className="text-primary font-semibold">
                    v{update.version}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(update.date).toLocaleDateString()}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {update.description}
                </p>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Changes:
                  </h3>
                  <ul className="space-y-2">
                    {update.changes.map((change, changeIndex) => (
                      <li 
                        key={changeIndex}
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GameUpdates;