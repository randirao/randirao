import React from 'react';
import { Github, ExternalLink, Calendar, Users, Award, BookOpen } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const featuredProjects = [
  {
    badge: '🌟 메인 프로젝트',
    title: '실시간 채팅 플랫폼',
    description: 'WebSocket 기반 실시간 메시징 서비스로, 급격한 트래픽에도 안정적인 통신을 보장합니다.',
    tech: ['Spring Boot', 'WebSocket', 'Redis', 'PostgreSQL', 'Docker'],
    problem: '동시 접속자 증가 시 메시지 전송 지연 (평균 3~5초)',
    solutions: [
      'Redis Pub/Sub로 메시지 브로커 구성',
      'Connection Pool 및 세션 관리 최적화',
      '비동기 처리 도입으로 평균 50ms 응답 확보'
    ],
    metrics: [
      { icon: '📈', label: '응답 시간 개선', value: '95%' },
      { icon: '👥', label: '동시 접속 지원', value: '1,000+' },
      { icon: '⚡', label: '평균 전송 시간', value: '50ms' }
    ]
  },
  {
    badge: '🛍️ 개인 프로젝트',
    title: '전자상거래 API 서버',
    description: '대용량 주문을 처리할 수 있는 쇼핑몰 백엔드 시스템을 설계하고 구현했습니다.',
    tech: ['Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'Redis', 'AWS'],
    problem: '주문 폭주 시 재고 부족 및 데이터베이스 병목 현상',
    solutions: [
      '비관적 락 기반 재고 관리로 오버셀링 차단',
      'Redis 캐싱과 인덱스 최적화로 조회 성능 80% 향상',
      '트랜잭션 분리로 동시성 이슈 제거'
    ],
    metrics: [
      { icon: '🛡️', label: '오버셀링', value: '0건' },
      { icon: '📊', label: 'TPS 처리', value: '5,000' },
      { icon: '⚙️', label: '캐시 활용도', value: '+60%' }
    ]
  }
];

const supportingProjects = [
  {
    title: '블로그 플랫폼',
    period: '2024.01 - 2024.02',
    description: 'Spring Boot + React로 구현한 개인 기술 블로그',
    tech: ['Spring Boot', 'React', 'MySQL'],
    highlights: ['JWT 인증', 'RESTful API', '반응형 UI']
  },
  {
    title: '도서 관리 시스템',
    period: '2023.11 - 2023.12',
    description: '대출·반납 흐름을 관리하는 내부용 시스템',
    tech: ['Spring Boot', 'JPA', 'Thymeleaf'],
    highlights: ['대출/반납 자동화', '연체 관리', '통계 대시보드']
  },
  {
    title: '날씨 알림 서비스',
    period: '2023.09 - 2023.10',
    description: '외부 API 연동 기반의 맞춤형 날씨 알림',
    tech: ['Spring Boot', 'Redis', 'External API'],
    highlights: ['스케줄러', '캐싱', '이메일 알림']
  }
];

const experiences = [
  {
    period: '2024.03 - 2024.08',
    title: '테크 스타트업 백엔드 인턴',
    company: '(주)이노베이션테크',
    type: 'internship',
    description: 'MSA 기반 전자상거래 플랫폼 개발에 참여하여 주문·결제 플로우를 담당했습니다.',
    achievements: [
      '주문 처리 API 설계 및 구현',
      '결제 시스템 연동 및 장애 대응',
      '코드 리뷰 참여로 품질 관리',
      '테스트 커버리지 80% 달성'
    ],
    tech: ['Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'Jenkins']
  },
  {
    period: '2023.09 - 2023.12',
    title: '캡스톤 프로젝트 팀장',
    company: '대학교 소프트웨어학과',
    type: 'project',
    description: '실시간 화상 강의가 가능한 학습 관리 시스템을 4인 팀으로 구현했습니다.',
    achievements: [
      '팀 리딩과 일정 관리',
      '백엔드 아키텍처 설계',
      'WebRTC 기반 실시간 기능 구현',
      '최우수 프로젝트 선정'
    ],
    tech: ['Spring Boot', 'WebRTC', 'MySQL', 'Redis', 'AWS EC2']
  },
  {
    period: '2023.06 - 2023.08',
    title: '오픈소스 기여',
    company: 'Spring Framework Community',
    type: 'opensource',
    description: 'Spring Boot 문서 번역과 버그 수정 PR로 커뮤니티에 기여했습니다.',
    achievements: [
      'Spring Boot 공식 문서 한국어 번역',
      '3개의 Pull Request 머지',
      '커뮤니티 멘토링 참여',
      'Spring 컨퍼런스 발표'
    ],
    tech: ['Spring Boot', 'Documentation', 'Git', 'Community']
  }
];

const typeStyles: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  internship: { bg: 'bg-sky-50', text: 'text-sky-600', label: '인턴십' },
  project: { bg: 'bg-yellow-50', text: 'text-yellow-600', label: '팀 프로젝트' },
  opensource: { bg: 'bg-green-100', text: 'text-green-800', label: '오픈소스' }
};

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

        {/* Featured projects */}
        <section className="space-y-10">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-white/70 backdrop-blur-sm border-stone-200 rounded-3xl shadow-md space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-600 rounded-full">
                  {project.badge}
                </Badge>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-slate-800">{project.title}</h2>
                <p className="text-slate-600 text-base md:text-lg">{project.description}</p>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wide">
                    문제
                  </h3>
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl p-4">
                    {project.problem}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    해결
                  </h3>
                  <div className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-2xl p-4 space-y-2">
                    {project.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-start gap-2">
                        <span>✅</span>
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {project.metrics.map((metric, metricIndex) => (
                  <Card
                    key={metricIndex}
                    className="p-4 bg-white/70 backdrop-blur-sm border-stone-200 text-center rounded-2xl"
                  >
                    <span className="text-2xl block mb-1">{metric.icon}</span>
                    <h4 className="text-xl text-slate-800">{metric.value}</h4>
                    <p className="text-xs text-slate-600">{metric.label}</p>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </section>

        {/* Supporting projects */}
        <section className="mt-16">
          <h2 className="text-xl text-slate-800 mb-6 text-center">추가 프로젝트</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {supportingProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-500">{project.period}</span>
                </div>
                <h3 className="text-lg text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
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

                <div className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span>•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience timeline */}
        <section className="mt-16">
          <h2 className="text-xl text-slate-800 mb-10 text-center">경험 타임라인</h2>
          <div className="relative pl-6">
            <span className="absolute left-2 top-2 bottom-2 w-1 bg-gradient-to-b from-sky-200 to-yellow-200 rounded-full"></span>
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="relative pl-8 pr-6 py-6 bg-white/60 backdrop-blur-sm border-stone-200 rounded-2xl"
                >
                  <span className="absolute left-1 top-6 w-4 h-4 bg-white border-4 border-sky-300 rounded-full"></span>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {exp.period}
                    </span>
                    <Badge
                      variant="secondary"
                      className={`${typeStyles[exp.type].bg} ${typeStyles[exp.type].text}`}
                    >
                      {typeStyles[exp.type].label}
                    </Badge>
                  </div>
                  <h3 className="text-lg text-slate-800">{exp.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{exp.company}</p>
                  <p className="text-slate-600 text-sm mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm text-slate-700 mb-2">주요 성과</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {exp.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-stone-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <Card className="mt-16 p-6 bg-gradient-to-r from-sky-50 to-amber-50 border border-stone-200">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Users className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <h4 className="text-slate-700 mb-1">협업 능력</h4>
              <p className="text-sm text-slate-600">서로를 성장시키는 협업과 커뮤니케이션</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-slate-700 mb-1">문제 해결</h4>
              <p className="text-sm text-slate-600">데이터로 증명된 성과와 책임감</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <h4 className="text-slate-700 mb-1">지속적 학습</h4>
              <p className="text-sm text-slate-600">새로운 기술을 빠르게 흡수하고 적용</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
