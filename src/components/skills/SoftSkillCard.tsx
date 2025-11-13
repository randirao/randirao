import React from 'react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { SoftSkill } from '../../data/skills';

interface SoftSkillCardProps {
  skill: SoftSkill;
}

export default function SoftSkillCard({ skill }: SoftSkillCardProps) {
  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 text-center">
      <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <skill.icon className="w-6 h-6 text-sky-600" />
      </div>
      <h3 className="text-lg text-slate-800 mb-2">{skill.title}</h3>
      <p className="text-slate-600 text-sm mb-4">{skill.description}</p>
      <div className="flex items-center gap-2 justify-center">
        <Progress value={skill.score} className="w-20 h-2" />
        <span className="text-sm text-slate-600">{skill.score}%</span>
      </div>
    </Card>
  );
}