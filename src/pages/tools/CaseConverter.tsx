
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function CaseConverter() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 space-y-8 glass-effect rounded-xl"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Case Converter</h2>
        
        <div className="space-y-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Enter your text here..."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleCopy(input.toUpperCase())}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              UPPERCASE
            </button>
            <button
              onClick={() => handleCopy(input.toLowerCase())}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              lowercase
            </button>
            <button
              onClick={() => handleCopy(
                input.split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ')
              )}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              Title Case
            </button>
          </div>
          
          {copied && (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Check size={16} />
              <span>Copied to clipboard!</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
