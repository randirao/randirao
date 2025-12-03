import React from 'react';
import {Card} from '../ui/card';
import {TechCategory} from '../../data/skills';

interface TechStackCardProps {
    category: TechCategory,
    key?: string
}

export default function TechStackCard({category, key}: TechStackCardProps) {
    return (
        <Card className="p-6 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl">
            <div className="mb-4">
                <span className="text-4xl block mb-2">{category.emoji}</span>
                <h3 className="text-lg text-slate-800">{category.title}</h3>
            </div>

            <div className="space-y-2">
                {category.items.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                        <div key={techIndex} className="flex items-center gap-2 p-2 bg-white/50 rounded-lg">
                            <Icon className={`text-2xl ${tech.color}`}/>
                            <span className="text-slate-700 text-sm">{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}