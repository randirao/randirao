import React from 'react';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-6 md:p-8 bg-white/70 backdrop-blur-sm border-stone-200 rounded-3xl shadow-md space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-600 rounded-full">
          {project.badge}
        </Badge>
        <div className="flex gap-3 flex-wrap">
          {project.links.map((link, linkIndex) => (
            <Button
              key={linkIndex}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              asChild
            >
              <a href={link.href} target="_blank" rel="noreferrer">
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {project.logo && (
            <img src={project.logo} alt={`${project.title} logo`} className="w-12 h-12 object-contain" />
          )}
          <h2 className="text-2xl md:text-3xl text-slate-800">{project.title}</h2>
        </div>
        <p className="text-slate-600 text-base md:text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            {project.period}
          </span>
          <span className="flex items-center gap-2">
            <span className="font-medium text-slate-600">역할</span>
            {project.role}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
          배경
        </h3>
        <div className="space-y-2 text-sm text-slate-600">
          {project.background.map((item, backgroundIndex) => (
            <div key={backgroundIndex} className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
          핵심 기능
        </h3>
        <div className="space-y-2 text-sm text-slate-600">
          {project.coreFeatures.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
          결과
        </h3>
        <div className="space-y-2 text-sm text-slate-600">
          {project.impact.map((impact, impactIndex) => (
            <div key={impactIndex} className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
              <span>{impact}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
          사용 기술
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="border-yellow-300 bg-yellow-50/30 rounded-full text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}