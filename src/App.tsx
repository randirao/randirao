import React, { useState } from 'react';
import { User, Code, Briefcase, Mail } from 'lucide-react';
import IntroSlide from './components/IntroSlide';
import SkillsSlide from './components/SkillsSlide';
import WorkSlide from './components/WorkSlide';
import ContactSlide from './components/ContactSlide';

const sections = [
  { id: 'intro', component: IntroSlide, title: '자기소개', emoji: '👋', icon: User },
  { id: 'skills', component: SkillsSlide, title: '역량', emoji: '🛠️', icon: Code },
  { id: 'work', component: WorkSlide, title: '성과', emoji: '💼', icon: Briefcase },
  { id: 'contact', component: ContactSlide, title: '연락처', emoji: '📧', icon: Mail },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');

  const getCurrentComponent = () => {
    const section = sections.find(s => s.id === activeSection);
    return section?.component;
  };

  const CurrentComponent = getCurrentComponent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-yellow-100 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50">
        <header className="bg-white/90 backdrop-blur-sm shadow-sm">
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
                    onClick={() => setActiveSection(section.id)}
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
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-stone-200 shadow-sm">
          <div className="flex overflow-x-auto px-4 py-3 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
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
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden">
          {CurrentComponent && <CurrentComponent />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-stone-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-slate-600 text-sm">
            <p className="flex items-center justify-center gap-2">
              <span>✨</span>
                <a href={"https://github.com/randirao"}>Made with passion by 이하은</a>
              <span>✨</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
