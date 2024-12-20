import React from 'react';
import { Lightbulb, TrendingUp, Clock, Share2 } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    title: 'AI-Powered Conversion',
    description: 'Transform your LinkedIn content into engaging YouTube scripts using advanced AI technology.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: 'Optimized for Virality',
    description: 'Get scripts structured for maximum engagement with hooks, transitions, and calls-to-action.'
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: 'Save Time',
    description: 'Convert your content in seconds instead of spending hours rewriting for YouTube.'
  },
  {
    icon: <Share2 className="w-6 h-6 text-purple-500" />,
    title: 'Cross-Platform Success',
    description: 'Leverage your LinkedIn success to build your YouTube presence effectively.'
  }
];

export default function LandingSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Repurpose Your LinkedIn Content for YouTube Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't let your valuable LinkedIn content stay in one place. Convert your posts into
            engaging YouTube scripts and expand your reach across platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm inline-block">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How It Works
            </h3>
            <ol className="text-left space-y-4">
              <li className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</span>
                <span>Paste your LinkedIn post URL</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</span>
                <span>Click generate to create your YouTube script</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</span>
                <span>Download and start creating your video</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}