import React from 'react';
import { Linkedin } from 'lucide-react';

interface InputSectionProps {
  linkedinUrl: string;
  onChange: (value: string) => void;
}

export default function InputSection({ linkedinUrl, onChange }: InputSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Linkedin className="w-6 h-6 text-blue-600" />
        <label htmlFor="linkedin-url" className="block text-sm font-medium">
          LinkedIn Post URL
        </label>
      </div>
      <input
        id="linkedin-url"
        type="text"
        value={linkedinUrl}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your LinkedIn post URL here..."
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}