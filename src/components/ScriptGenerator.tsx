import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { generateYouTubeScript } from '../services/api';
import InputSection from './InputSection';
import GenerateButton from './GenerateButton';
import ScriptOutput from './ScriptOutput';

export default function ScriptGenerator() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!linkedinUrl.trim()) {
      toast.error('Please enter a LinkedIn post URL');
      return;
    }

    setIsLoading(true);
    try {
      const script = await generateYouTubeScript(linkedinUrl);
      setGeneratedScript(script);
      toast.success('Script generated successfully!');
    } catch (error) {
      toast.error('Failed to generate script. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedScript) return;

    const blob = new Blob([generatedScript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'youtube-script.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white rounded-xl shadow-sm">
      <InputSection linkedinUrl={linkedinUrl} onChange={setLinkedinUrl} />
      <GenerateButton onClick={handleGenerate} isLoading={isLoading} />
      <ScriptOutput script={generatedScript} onDownload={handleDownload} />
    </div>
  );
}