import React, { useState } from 'react';
import { User, Code, Briefcase, Star, Mail, Laptop } from 'lucide-react';
import IntroSlide from './components/IntroSlide';
import TechStackSlide from './components/TechStackSlide';
import Project1Slide from './components/Project1Slide';
import Project2Slide from './components/Project2Slide';
import Project3Slide from './components/Project3Slide';
import ExperienceSlide from './components/ExperienceSlide';
import StrengthsSlide from './components/StrengthsSlide';
import ContactSlide from './components/ContactSlide';

const sections = [
  { id: 'intro', component: IntroSlide, title: '자기소개', emoji: '👋', icon: User },
  { id: 'tech', component: TechStackSlide, title: '기술 스택', emoji: '🛠️', icon: Code },
  { id: 'projects', component: null, title: '프로젝트', emoji: '💼', icon: Briefcase },
  { id: 'experience', component: ExperienceSlide, title: '경험', emoji: '🚀', icon: Laptop },
  { id: 'strengths', component: StrengthsSlide, title: '강점', emoji: '✨', icon: Star },
  { id: 'contact', component: ContactSlide, title: '연락처', emoji: '📧', icon: Mail },
];

const projects = [
  { id: 'project1', component: Project1Slide, title: '실시간 채팅 플랫폼', emoji: '💬' },
  { id: 'project2', component: Project2Slide, title: 'API 게이트웨이', emoji: '🌐' },
  { id: 'project3', component: Project3Slide, title: '모니터링 시스템', emoji: '📊' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [activeProject, setActiveProject] = useState('project1');

  const getCurrentComponent = () => {
    if (activeSection === 'projects') {
      const project = projects.find(p => p.id === activeProject);
      return project?.component;
    }
    const section = sections.find(s => s.id === activeSection);
    return section?.component;
  };

  const CurrentComponent = getCurrentComponent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-yellow-100 flex flex-col">
      {/* Header */}
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
      <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-stone-200">
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

      {/* Projects Sub-navigation */}
      {activeSection === 'projects' && (
        <div className="bg-white/60 backdrop-blur-sm border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 overflow-x-auto">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                    activeProject === project.id
                      ? 'bg-sky-200 text-slate-800 shadow-md'
                      : 'text-slate-600 hover:bg-white/60 bg-white/40'
                  }`}
                >
                  <span className="text-lg">{project.emoji}</span>
                  <span>{project.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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