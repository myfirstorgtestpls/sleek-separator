
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function Base64Tool() {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodeBase64 = (str: string) => {
    try {
      return window.btoa(str);
    } catch (e) {
      return 'Invalid input for Base64 encoding';
    }
  };

  const decodeBase64 = (str: string) => {
    try {
      return window.atob(str);
    } catch (e) {
      return 'Invalid Base64 string';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 space-y-8 glass-effect rounded-xl"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Base64 Encoder/Decoder</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Input
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter text to encode/decode..."
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Base64 Encoded
                </label>
                <button
                  onClick={() => handleCopy(encodeBase64(input))}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800 transition-colors text-sm"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  Copy
                </button>
              </div>
              <textarea
                value={encodeBase64(input)}
                readOnly
                className="w-full h-[72px] p-4 border rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Base64 Decoded
                </label>
                <button
                  onClick={() => handleCopy(decodeBase64(input))}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800 transition-colors text-sm"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  Copy
                </button>
              </div>
              <textarea
                value={decodeBase64(input)}
                readOnly
                className="w-full h-[72px] p-4 border rounded-lg bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
