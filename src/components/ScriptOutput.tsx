import React from 'react';
import { Download } from 'lucide-react';

interface ScriptOutputProps {
  script: string;
  onDownload: () => void;
}

export default function ScriptOutput({ script, onDownload }: ScriptOutputProps) {
  if (!script) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Generated Script</h2>
        <button
          onClick={onDownload}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
        >
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <pre className="whitespace-pre-wrap font-mono text-sm">{script}</pre>
      </div>
    </div>
  );
}