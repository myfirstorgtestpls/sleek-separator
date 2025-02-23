import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const separatorOptions = [
  { label: 'Comma', value: ',' },
  { label: 'Semicolon', value: ';' },
  { label: 'Space', value: ' ' },
  { label: 'New Line', value: '\n' },
  { label: 'Custom', value: 'custom' },
];

export const Delimiter: React.FC = () => {
  const [input, setInput] = useState('');
  const [separator, setSeparator] = useState(',');
  const [customSeparator, setCustomSeparator] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [showCustom, setShowCustom] = useState(false);

  useEffect(() => {
    const actualSeparator = separator === 'custom' ? customSeparator : separator;
    const result = input
      .split('\n')
      .filter(line => line.trim())
      .join(actualSeparator);
    setOutput(result);
  }, [input, separator, customSeparator]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSeparatorChange = (value: string) => {
    setSeparator(value);
    setShowCustom(value === 'custom');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 space-y-8 glass-effect rounded-xl"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Delimiter Tool</h2>
        
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {separatorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSeparatorChange(option.value)}
              className={`px-4 py-2 rounded-full transition-all ${
                separator === option.value
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {showCustom && (
          <motion.input
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            type="text"
            value={customSeparator}
            onChange={(e) => setCustomSeparator(e.target.value)}
            placeholder="Enter custom separator"
            className="w-full p-2 border rounded-lg mb-4"
          />
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Input (one item per line)
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="Enter your items here&#10;One per line&#10;Like this"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Output
              </label>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full h-64 p-4 border rounded-lg bg-gray-50"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
