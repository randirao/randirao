import React from 'react';
import { Calendar, Github, Clock, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: '블로그 플랫폼',
    period: '2024.01 - 2024.02',
    description: 'Spring Boot + React로 구현한 개인 블로그',
    tech: ['Spring Boot', 'React', 'MySQL'],
    highlights: ['JWT 인증', 'RESTful API', '반응형 디자인']
  },
  {
    title: '도서 관리 시스템',
    period: '2023.11 - 2023.12',
    description: 'JPA를 활용한 도서관 관리 시스템',
    tech: ['Spring Boot', 'JPA', 'Thymeleaf'],
    highlights: ['도서 대출/반납', '연체 관리', '통계 기능']
  },
  {
    title: '날씨 알림 서비스',
    period: '2023.09 - 2023.10',
    description: '외부 API 연동 날씨 정보 제공 서비스',
    tech: ['Spring Boot', 'Redis', 'External API'],
    highlights: ['스케줄러', '캐싱', '이메일 알림']
  }
];

export default function Project3Slide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">기타 프로젝트</h1>
          <p className="text-slate-600">
            학습과 역량 개발을 위해 진행한 프로젝트들입니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-500">{project.period}</span>
                </div>
                <h3 className="text-lg text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-stone-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm text-slate-700 mb-2">주요 기능</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link */}
              <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Card>
          ))}
        </div>

        {/* Learning Summary */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-yellow-50 border border-stone-200">
          <h3 className="text-lg text-slate-800 mb-4">학습 성과</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-slate-700 mb-2">기술적 성장</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Spring Framework 생태계 이해</li>
                <li>• 다양한 외부 API 연동 경험</li>
                <li>• 프론트엔드와의 협업 경험</li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-700 mb-2">개발 프로세스</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Git을 활용한 버전 관리</li>
                <li>• 테스트 코드 작성 습관</li>
                <li>• 문서화의 중요성 체감</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}