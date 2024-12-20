import React from 'react';
import { Youtube, Loader2 } from 'lucide-react';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function GenerateButton({ onClick, isLoading }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Generating...</span>
        </>
      ) : (
        <>
          <Youtube className="w-5 h-5" />
          <span>Generate YouTube Script</span>
        </>
      )}
    </button>
  );
}