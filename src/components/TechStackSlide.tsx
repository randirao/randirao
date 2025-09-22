import React from 'react';
import { 
  Coffee, 
  Database, 
  Server, 
  Cloud, 
  Container, 
  Cpu, 
  Shield,
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const techCategories = [
  {
    title: '백엔드 언어 & 프레임워크',
    emoji: '☕',
    items: [
      { name: 'Java', level: 'Expert', emoji: '☕' },
      { name: 'Spring Boot', level: 'Expert', emoji: '🌱' },
      { name: 'Spring Security', level: 'Advanced', emoji: '🛡️' },
      { name: 'JPA/Hibernate', level: 'Advanced', emoji: '🔗' },
    ]
  },
  {
    title: '데이터베이스',
    emoji: '🗃️',
    items: [
      { name: 'PostgreSQL', level: 'Expert', emoji: '🐘' },
      { name: 'Redis', level: 'Advanced', emoji: '⚡' },
      { name: 'MySQL', level: 'Intermediate', emoji: '🐬' },
    ]
  },
  {
    title: '인프라 & DevOps',
    emoji: '☁️',
    items: [
      { name: 'AWS EC2/RDS', level: 'Advanced', emoji: '☁️' },
      { name: 'Docker', level: 'Advanced', emoji: '🐳' },
      { name: 'Linux', level: 'Intermediate', emoji: '🐧' },
      { name: 'Git', level: 'Expert', emoji: '🌳' },
    ]
  }
];

const levelColors = {
  'Expert': 'bg-green-100 text-green-800',
  'Advanced': 'bg-blue-100 text-blue-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800'
};

export default function TechStackSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">기술 스택</h1>
          <p className="text-slate-600">
            현재 보유하고 있는 기술들과 숙련도입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="p-6 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-2">{category.emoji}</span>
                <h3 className="text-lg text-slate-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{tech.emoji}</span>
                      <span className="text-slate-700 text-sm">{tech.name}</span>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${levelColors[tech.level as keyof typeof levelColors]} rounded-full`}
                    >
                      {tech.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-yellow-200 rounded-2xl shadow-md border border-stone-200">
          <h4 className="text-lg text-slate-800 mb-4 text-center">✨ 추가 역량</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {['RESTful API', 'Microservices', 'TDD', 'Clean Architecture', 'Design Patterns', 'Performance Tuning', 'Code Review'].map((skill, index) => (
              <Badge key={index} variant="outline" className="border-yellow-300 text-slate-600 bg-yellow-50/50 rounded-full px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}