import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Discord() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <MessageCircle className="w-16 h-16 mx-auto mb-6 text-indigo-500" />
        <h1 className="text-4xl font-bold mb-6">Join Our Discord Community</h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Connect with fellow gamers, get the latest updates, and join the conversation in our vibrant Discord community.
        </p>
        <a
          href="https://discord.gg/wyx2zS56qP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Join Discord Server
        </a>
      </div>
      
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Community Events</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Participate in weekly gaming sessions, tournaments, and special events organized by our community.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Game Discussion</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Share strategies, tips, and discuss your favorite games with other passionate players.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Support Channel</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get help from our community moderators and fellow players for any game-related questions.
          </p>
        </div>
      </div>
    </div>
  );
}