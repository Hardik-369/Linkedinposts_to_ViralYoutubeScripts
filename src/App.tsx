import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ScriptGenerator from './components/ScriptGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <LandingSection />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ScriptGenerator />
      </main>
    </div>
  );
}

export default App;