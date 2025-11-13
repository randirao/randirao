import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/90 border-t border-stone-200 mt-auto">
      <div className="mx-auto px-4 py-6">
        <div className="text-center text-slate-600 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            <a href="https://github.com/randirao">Made with passion by 이하은</a>
            <Sparkles className="w-4 h-4" />
          </p>
        </div>
      </div>
    </footer>
  );
}