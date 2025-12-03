import React, { useState } from 'react';
import IntroSlide from './components/IntroSlide';
import SkillsSlide from './components/SkillsSlide';
import WorkSlide from './components/WorkSlide';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const sections = [
  { id: 'intro', component: IntroSlide, title: '자기소개', emoji: '👋' },
  { id: 'skills', component: SkillsSlide, title: '역량', emoji: '🛠️' },
  { id: 'work', component: WorkSlide, title: '프로젝트', emoji: '💼' },
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
      className="flex flex-col"
      style={{
        position: 'relative',
        padding: '5rem 0 0 0',
        backgroundColor: '#F3F4F6',
      }}
    >
      <Header
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="h-[100vh] flex flex-col" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="h-[90px] md:h-[80px]"></div>
        <main className="flex-1 max-w-7xl mx-auto px-4 w-full py-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden min-h-[600px]">
            {CurrentComponent && <CurrentComponent />}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}