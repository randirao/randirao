import React from 'react';
import { featuredProjects } from '../data/projects';
import ProjectCard from './work/ProjectCard';

export default function WorkSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">성과</h1>
          <p className="text-slate-600">
            실무 프로젝트와 경험을 하나의 여정으로 묶어 보여드립니다.
          </p>
        </div>

        <section className="space-y-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
}