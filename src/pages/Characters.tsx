import React from 'react';
import Container from '../components/ui/Container';

const Characters: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Personajes
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Conoce acerca de nuestros personajes unicos dentro de nuestro universo.
        </p>
      </Container>
    </div>
  );
};

export default Characters;