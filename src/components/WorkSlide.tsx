import React from 'react';
import { Github, ExternalLink, Calendar, FileText } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const featuredProjects = [
  {
    badge: '교내 전공동아리 운영 서비스',
    title: '물듬',
    logo: '/muldumLogo.svg',
    period: '2024 - 현재',
    description:
      '부산소프트웨어마이스터고 전공동아리 운영 과정에서의 불편함을 해결하기 위해 만든 통합 관리 플랫폼입니다.',
    role: 'Backend Developer',
    background: [
      '동시에 편집 가능한 구글 시트로 물품을 신청하면서 데이터가 덮어쓰이거나 링크가 달라지는 문제가 반복됨',
      '학생과 교사가 같은 화면에서 물품을 확인하고 승인할 수 있는 시스템이 필요했음',
      '전공동아리 프로젝트가 2학년이 끝나면 함께 빠르게 잊혀지는 문제를 해결하고자 기록을 남길 수 있는 공간을 기획'
    ],
    coreFeatures: [
      '전공동아리 물품 신청·승인·이력 관리',
      '학교 방송 공지와 주요 안내를 한번에 확인할 수 있는 공지 게시판',
      '역대 전공동아리 활동을 보관하는 아카이브 제공'
    ],
    impact: [
      '학생과 교사 모두 같은 흐름으로 물품 신청 현황을 파악하여 의사소통 비용 감소',
      '동아리 운영 경험과 노하우를 아카이브로 남겨 후배 기수의 길잡이 역할 수행'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'],
    links: [
      { label: '서비스', icon: ExternalLink, href: 'http://v2.muldum.com/' },
      { label: 'GitHub', icon: Github, href: 'https://github.com/arabssm' },
      { label: 'Notion', icon: FileText, href: 'https://www.notion.so/1c43e26381788020b411c0fd4e8cce4c' }
    ]
  },
  {
    badge: '교내 분실물 관리 서비스',
    title: '어디',
    period: '2024',
    logo: '/eodiLogo.svg',
    description:
      '생활부에서 분실물을 노션으로 관리하던 번거로운 흐름을 개선하기 위해 기획한 교내 분실물 관리 서비스입니다.',
    role: 'PM & Backend Developer',
    background: [
      '노션과 스프레드시트를 번갈아 확인하며 분실물 현황을 정리하는 데 시간이 많이 소요됨',
      '분실물 폐기 기한과 상점 지급 여부를 관리하는 절차가 명확하지 않아 누락이 발생',
      '학생이 본인의 물건을 찾는 과정이 복잡해 소통 비용이 크다는 문제를 확인'
    ],
    coreFeatures: [
      '분실물 등록·검색 및 소유권 주장/승인/거절 프로세스',
      '폐기 예정 물품 사유 등록과 연장 요청 흐름',
      '상점 지급 상태 확인 및 처리 내역 기록'
    ],
    impact: [
      '분실물 발생부터 회수·폐기까지의 흐름을 한 화면에서 추적',
      '생활부 업무를 정형화된 프로세스로 정리해 처리 누락을 줄임'
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'Git'],
    links: [
      { label: '서비스', icon: ExternalLink, href: '' },
      { label: 'GitHub', icon: Github, href: 'https://github.com/BSSMEOD' },
      { label: 'Notion', icon: FileText, href: 'https://crawling-knot-d3e.notion.site/EODI-2a15e6368274805cae7bdf5f256a605a' }
    ]
  }
];

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
                      <span className="mt-1">✅</span>
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
                      <span className="mt-1">✨</span>
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
          ))}
        </section>
      </div>
    </div>
  );
}
