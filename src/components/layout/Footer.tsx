import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 border-t border-stone-200 mt-auto">
      <div className="mx-auto px-4 py-4 flex items-center justify-center min-h-[60px]">
        <p className="flex items-center justify-center gap-2 text-slate-600 text-sm">
          <a href="https://github.com/randirao">이하은</a>
        </p>
      </div>
    </footer>
  );
}