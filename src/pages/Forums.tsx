import React from 'react';
import Container from '../components/ui/Container';

const Forums: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Community Forums
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Welcome to Mov Enterprise Forums
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Join our vibrant gaming community! Discuss strategies, share experiences, and connect with fellow gamers.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Forum Categories */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Popular Categories
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Game Discussion', topics: 234, posts: 1543 },
                    { name: 'Technical Support', topics: 156, posts: 892 },
                    { name: 'Community Events', topics: 89, posts: 445 },
                    { name: 'Feedback & Suggestions', topics: 123, posts: 678 }
                  ].map((category, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {category.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {category.topics} topics · {category.posts} posts
                        </p>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        View →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Discussions */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Discussions
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'New Game Features Discussion', replies: 23, views: 156 },
                    { title: 'Tips for Beginners Guide', replies: 45, views: 289 },
                    { title: 'Weekend Event Feedback', replies: 12, views: 98 },
                    { title: 'Bug Report: Main Quest Issue', replies: 34, views: 167 }
                  ].map((discussion, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {discussion.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {discussion.replies} replies · {discussion.views} views
                        </p>
                      </div>
                      <button className="text-primary hover:text-primary/80 transition-colors">
                        Read →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Forums;