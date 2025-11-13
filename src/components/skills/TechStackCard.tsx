import React from 'react';
import { Card } from '../ui/card';
import { TechCategory } from '../../data/skills';

interface TechStackCardProps {
  category: TechCategory;
}

export default function TechStackCard({ category }: TechStackCardProps) {
  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl">
      <div className="text-center mb-4">
        <span className="text-4xl block mb-2">{category.emoji}</span>
        <h3 className="text-lg text-slate-800">{category.title}</h3>
      </div>

      <div className="space-y-2">
        {category.items.map((tech, techIndex) => (
          <div key={techIndex} className="flex items-center gap-3 p-2 bg-white/50 rounded-lg">
            <span className="text-xl">{tech.emoji}</span>
            <span className="text-slate-700 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}