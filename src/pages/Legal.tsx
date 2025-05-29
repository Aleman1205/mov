import React from 'react';
import Container from '../components/ui/Container';
import { useLocation } from 'react-router-dom';

const Legal: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');

  return (
    <div className="pt-20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Policy */}
          <section id="privacy" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Last updated: March 15, 2025
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Information We Collect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Account information (username, email address)</li>
                <li>Profile information</li>
                <li>Game progress and preferences</li>
                <li>Communication data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. How We Use Your Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Send important notifications</li>
                <li>Prevent fraud and abuse</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                3. Cookie Policy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Remember your preferences</li>
                <li>Understand how you use our services</li>
                <li>Provide personalized content</li>
                <li>Improve our services</li>
              </ul>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Last updated: March 15, 2025
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing or using our services, you agree to be bound by these Terms of Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. User Responsibilities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Maintaining account security</li>
                <li>Following community guidelines</li>
                <li>Respecting intellectual property rights</li>
                <li>Complying with applicable laws</li>
              </ul>
            </div>
          </section>

          {/* EULA */}
          <section id="eula" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">End User License Agreement</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Last updated: March 15, 2025
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. License Grant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We grant you a limited, non-exclusive license to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Download and install the game</li>
                <li>Play the game for personal use</li>
                <li>Access online features</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. Restrictions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li>Copy or distribute the game</li>
                <li>Modify or create derivative works</li>
                <li>Reverse engineer the software</li>
                <li>Use cheats or unauthorized modifications</li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Legal;