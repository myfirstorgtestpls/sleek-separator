
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function TextCounter() {
  const [input, setInput] = useState('');
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
  });
  
  useEffect(() => {
    const characters = input.length;
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const sentences = input.trim() ? input.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = input.trim() ? input.split(/\n\s*\n/).filter(Boolean).length : 0;
    
    setStats({ characters, words, sentences, paragraphs });
  }, [input]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 space-y-8 glass-effect rounded-xl"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Text Counter</h2>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Enter your text here..."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border rounded-lg bg-white/50 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.characters}</div>
            <div className="text-sm text-gray-600">Characters</div>
          </div>
          <div className="p-4 border rounded-lg bg-white/50 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.words}</div>
            <div className="text-sm text-gray-600">Words</div>
          </div>
          <div className="p-4 border rounded-lg bg-white/50 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.sentences}</div>
            <div className="text-sm text-gray-600">Sentences</div>
          </div>
          <div className="p-4 border rounded-lg bg-white/50 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.paragraphs}</div>
            <div className="text-sm text-gray-600">Paragraphs</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
