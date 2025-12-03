import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 border-t border-stone-200 mt-auto">
      <div className="mx-auto px-4 py-4 flex items-center justify-center min-h-[60px]">
        <p className="flex items-center justify-center gap-2 text-slate-600 text-sm">
          <a
            href="https://www.notion.so/yourlast/2a7cfec9e254801fb722f759a6bc0603?source=copy_link"
            className="cursor-pointer hover:text-slate-800 hover:underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            이하은 더 알아보기
          </a>
        </p>
      </div>
    </footer>
  );
}