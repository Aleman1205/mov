import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Download, Image, FileText, Package } from 'lucide-react';

const PressKit: React.FC = () => {
  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Press Kit
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about Mov Enterprise and our games
            </p>
          </div>

          {/* Company Info */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Company Information
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">About</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mov Enterprise is an innovative game development studio focused on creating unique gaming experiences that push creative boundaries.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Founded</h3>
                  <p className="text-gray-600 dark:text-gray-300">2023</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Silicon Valley, California</p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Release */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Latest Release: Campus Zero
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Release Date</h3>
                  <p className="text-gray-600 dark:text-gray-300">April 9, 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Platforms</h3>
                  <p className="text-gray-600 dark:text-gray-300">Windows PC</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Genre</h3>
                  <p className="text-gray-600 dark:text-gray-300">2D Narrative Adventure</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A unique 2D narrative experience set in a pixelated version of TEC de Monterrey, where players must survive a mysterious outbreak while uncovering the truth behind the chaos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Downloads */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Downloads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Image className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Logo & Assets
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Download our brand assets, including logos, icons, and screenshots.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Assets
                </Button>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Fact Sheet
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get detailed information about our company and games.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Fact Sheet
                </Button>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Press Contact
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                For press inquiries, please contact:
              </p>
              <p className="text-gray-900 dark:text-white font-medium">
                press@moventerprise.com
              </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PressKit;