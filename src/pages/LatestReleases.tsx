import React from 'react';
import Container from '../components/ui/Container';
import { Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const releases = [
  {
    title: 'Campus Zero',
    releaseDate: '2025-04-09',
    description: 'A 2D narrative experience set in a pixelated version of TEC de Monterrey.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    link: '/game'
  }
];

const LatestReleases: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Releases
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out our newest game releases and updates
          </p>
        </div>

        <div className="grid gap-8">
          {releases.map((game, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video">
                  <img 
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {game.title}
                  </h2>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Release Date: {new Date(game.releaseDate).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {game.description}
                  </p>
                  <Button 
                    as="a" 
                    href={game.link}
                    className="inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {releases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No releases available at the moment. Check back soon!
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default LatestReleases;