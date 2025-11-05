import React from 'react';
import { Brain, Zap, Shield, Users, Target, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

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

const technicalStrengths = [
  {
    title: '문제 해결 능력',
    icon: Brain,
    color: 'sky',
    description: '복잡한 비즈니스 로직을 분석하고 효율적인 해결책을 제시합니다',
    examples: [
      '동시성 문제 해결을 위한 락 메커니즘 구현',
      '메모리 누수 문제 분석 및 해결',
      '성능 병목 지점 식별 및 개선'
    ],
    score: 90
  },
  {
    title: '성능 최적화',
    icon: Zap,
    color: 'yellow',
    description: '시스템의 성능을 분석하고 최적화하여 사용자 경험을 개선합니다',
    examples: [
      '데이터베이스 쿼리 최적화로 응답시간 80% 단축',
      '캐싱 전략 도입으로 서버 부하 60% 감소',
      'Connection Pool 튜닝으로 동시 처리량 증대'
    ],
    score: 85
  },
  {
    title: '안정성 & 보안',
    icon: Shield,
    color: 'sky',
    description: '견고하고 안전한 시스템 구축을 위해 항상 보안을 고려합니다',
    examples: [
      'Spring Security를 활용한 인증/인가 구현',
      'SQL Injection 방지를 위한 prepared statement 사용',
      '에러 핸들링 및 로깅 시스템 구축'
    ],
    score: 88
  }
];

const softSkills = [
  {
    title: '커뮤니케이션',
    icon: Users,
    description: '기술적 내용을 비개발자도 이해할 수 있게 설명',
    score: 85
  },
  {
    title: '목표 지향성',
    icon: Target,
    description: '명확한 목표 설정과 체계적인 업무 추진',
    score: 90
  },
  {
    title: '학습 능력',
    icon: BookOpen,
    description: '새로운 기술 습득과 빠른 적응력',
    score: 92
  }
];

export default function SkillsSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">역량</h1>
          <p className="text-slate-600">
            기술 스택과 강점, 그리고 함께 일하고 싶은 이유를 한눈에 담았습니다
          </p>
        </div>

        {/* Technical stack */}
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

        {/* Technical strengths */}
        <div className="mt-12">
          <h2 className="text-xl text-slate-800 mb-6">기술적 강점</h2>
          <div className="space-y-8">
            {technicalStrengths.map((strength, index) => (
              <Card key={index} className="p-6 bg-white/60 backdrop-blur-sm border-stone-200">
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 bg-${strength.color}-100 rounded-lg flex items-center justify-center`}>
                        <strength.icon className={`w-6 h-6 text-${strength.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-lg text-slate-800">{strength.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={strength.score} className="w-16 h-2" />
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
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div className="mt-12">
          <h2 className="text-xl text-slate-800 mb-6">소프트 스킬</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 text-center">
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
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-amber-50 border border-stone-200">
          <h3 className="text-lg text-slate-800 mb-4 text-center">개발 철학</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="text-slate-700 mb-2">사용자 중심</h4>
              <p className="text-sm text-slate-600">
                최종 사용자의 경험을 항상 고려하여<br />
                성능과 안정성을 보장하는 시스템 구축
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-slate-700 mb-2">지속적 개선</h4>
              <p className="text-sm text-slate-600">
                코드 품질과 시스템 성능을<br />
                지속적으로 모니터링하고 개선
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
