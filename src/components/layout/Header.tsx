import React from 'react';

interface Section {
  id: string;
  title: string;
  emoji: string;
}

interface HeaderProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Header({ sections, activeSection, onSectionChange }: HeaderProps) {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }} className="bg-white backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-slate-800 flex items-center gap-2">
            <span className="text-2xl">👩‍💻</span>
            이하은 포트폴리오
          </h1>
          <div className="hidden md:flex items-center gap-1 bg-white/80 rounded-full p-1 shadow-sm">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-yellow-300 text-slate-800 shadow-md'
                    : 'text-slate-600 hover:bg-white/60'
                }`}
              >
                <span className="text-lg">{section.emoji}</span>
                <span className="hidden lg:inline">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden bg-transparent backdrop-blur-sm border-t border-stone-200 shadow-sm">
        <div className="flex overflow-x-auto px-4 py-3 gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-yellow-300 text-slate-800 shadow-md'
                  : 'text-slate-600 hover:bg-white/60 bg-white/40'
              }`}
            >
              <span>{section.emoji}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}