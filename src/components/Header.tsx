import React from 'react';
import { Youtube } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <Youtube className="w-8 h-8 text-red-600" />
          <h1 className="text-2xl font-bold text-gray-900">
            LinkedIn to YouTube Script Converter
          </h1>
        </div>
        <p className="mt-2 text-gray-600">
          Transform your LinkedIn posts into engaging YouTube scripts
        </p>
      </div>
    </header>
  );
}