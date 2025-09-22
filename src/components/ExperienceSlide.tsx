import React from 'react';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const experiences = [
  {
    period: '2024.03 - 2024.08',
    title: '테크 스타트업 백엔드 인턴',
    company: '(주)이노베이션테크',
    type: 'internship',
    description: 'MSA 기반 전자상거래 플랫폼 개발 참여',
    achievements: [
      '주문 처리 API 설계 및 구현',
      '결제 시스템 연동 작업',
      '코드 리뷰 프로세스 참여',
      '테스트 코드 커버리지 80% 달성'
    ],
    tech: ['Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'Jenkins']
  },
  {
    period: '2023.09 - 2023.12',
    title: '캡스톤 프로젝트 팀장',
    company: '대학교 소프트웨어학과',
    type: 'project',
    description: '학습 관리 시스템 개발 (4인 팀)',
    achievements: [
      '팀 리더로서 프로젝트 일정 관리',
      '백엔드 아키텍처 설계',
      '실시간 화상 강의 기능 구현',
      '최우수 프로젝트 선정'
    ],
    tech: ['Spring Boot', 'WebRTC', 'MySQL', 'Redis', 'AWS EC2']
  },
  {
    period: '2023.06 - 2023.08',
    title: '오픈소스 기여 활동',
    company: 'Spring Framework Community',
    type: 'opensource',
    description: 'Spring Boot 관련 문서 번역 및 버그 수정',
    achievements: [
      'Spring Boot 공식 문서 한국어 번역',
      '3개의 Pull Request 승인',
      '커뮤니티 멘토링 참여',
      'Spring 컨퍼런스 발표'
    ],
    tech: ['Spring Boot', 'Documentation', 'Git', 'Community']
  }
];

const typeStyles = {
  internship: {
    bg: 'bg-sky-50',
    text: 'text-sky-600',
    label: '인턴십'
  },
  project: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-600',
    label: '팀 프로젝트'
  },
  opensource: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    label: '오픈소스'
  }
};

export default function ExperienceSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">경험 타임라인</h1>
          <p className="text-slate-600">
            인턴십, 팀 프로젝트, 오픈소스 활동 등의 경험들입니다
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-200 to-yellow-200 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-500">{exp.period}</span>
                        <Badge 
                          variant="secondary" 
                          className={`ml-auto ${typeStyles[exp.type as keyof typeof typeStyles].bg} ${typeStyles[exp.type as keyof typeof typeStyles].text}`}
                        >
                          {typeStyles[exp.type as keyof typeof typeStyles].label}
                        </Badge>
                      </div>
                      <h3 className="text-lg text-slate-800 mb-1">{exp.title}</h3>
                      <p className="text-slate-600 text-sm mb-2">{exp.company}</p>
                      <p className="text-slate-600 text-sm">{exp.description}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm text-slate-700 mb-2">주요 성과</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-stone-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-white border-4 border-sky-300 rounded-full"></div>
                </div>

                {/* Empty space for alternate layout */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-yellow-50 border border-stone-200">
          <h3 className="text-lg text-slate-800 mb-4">경험을 통한 성장</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <h4 className="text-slate-700 mb-1">협업 능력</h4>
              <p className="text-sm text-slate-600">팀워크와 커뮤니케이션</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-slate-700 mb-1">문제 해결</h4>
              <p className="text-sm text-slate-600">실무 경험을 통한 역량</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <h4 className="text-slate-700 mb-1">지속적 학습</h4>
              <p className="text-sm text-slate-600">새로운 기술 습득 의지</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}