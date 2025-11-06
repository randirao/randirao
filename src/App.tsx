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
    <div
        className="bg-gradient-to-br from-stone-50 to-yellow-100 flex flex-col"
        style={{
            position: 'relative',
            padding: '5rem 0 0 0',
        }}
    >
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
            <div className="md:hidden bg-transparent backdrop-blur-sm border-t border-stone-200 shadow-sm">
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
        </header>
      <div className="h-[100vh] bg-gradient-to-br from-stone-50 to-yellow-100 flex flex-col">
        <div className="h-[90px] md:h-[80px]"></div>
        <main className="flex-1 max-w-7xl mx-auto px-4 w-full py-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden min-h-[600px]">
            {CurrentComponent && <CurrentComponent />}
          </div>
        </main>

        <footer className="bg-white/90 border-t border-stone-200 mt-auto">
          <div className="mx-auto px-4 py-6">
            <div className="text-center text-slate-600 text-sm">
              <p className="flex items-center justify-center gap-2">
                <span>✨</span>
                <a href={"https://github.com/randirao"}
                >Made with passion by 이하은</a>
                <span>✨</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}