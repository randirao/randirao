import React from 'react';
import {Card} from '../ui/card';
import {Progress} from '../ui/progress';
import {TechnicalStrength} from '../../data/skills';

interface TechnicalStrengthCardProps {
    strength: TechnicalStrength,
    key?: string
}

export default function TechnicalStrengthCard({strength, key}: TechnicalStrengthCardProps) {
    return (
        <Card className="p-6 bg-white/60 backdrop-blur-sm border-stone-200">
            <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div
                            className={`w-12 h-12 bg-${strength.color}-100 rounded-lg flex items-center justify-center`}>
                            <strength.icon className={`w-6 h-6 text-${strength.color}-600`}/>
                        </div>
                        <div>
                            <h3 className="text-lg text-slate-800">{strength.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <Progress value={strength.score} className="w-16 h-2"/>
                                <span className="text-sm text-slate-600">{strength.score}%</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm">{strength.description}</p>
                </div>

                <div className="lg:col-span-2">
                    <h4 className="text-slate-700 mb-3">구체적 사례</h4>
                    <ul className="space-y-2">
                        {strength.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                                {example}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}