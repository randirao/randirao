import { Brain, Users, Target, BookOpen, LucideIcon } from 'lucide-react';
import React from 'react';
import {
    SiOpenjdk as SiJava,
    SiSpring as SiSpringboot,
    SiPostgresql,
    SiMysql,
    SiOracle,
    SiDocker,
    SiGit, SiPython, SiGithub, SiOpenjdk
} from 'react-icons/si';

export interface TechItem {
  name: string;
  color: string;
  icon: React.ComponentType<{className?: string}>;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export interface TechnicalStrength {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  examples: string[];
  score: number;
}

export interface SoftSkill {
  title: string;
  description: string;
  score: number;
}

export const techCategories: TechCategory[] = [
  {
    title: 'Backend',
    items: [
      {name: 'Python', icon: SiPython, color: 'text-sky-600'},
      { name: 'Java', icon: SiJava, color: 'text-red-600' },
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-700' }
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
      { name: 'MySQL', icon: SiMysql, color: 'text-sky-600' },
      { name: 'Oracle', icon: SiOracle, color: 'text-red-700' }
    ]
  },
  {
    title: 'Infra & Collaboration',
    items: [
      { name: 'Docker', icon: SiDocker, color: 'text-sky-600' },
      { name: 'Git', icon: SiGit, color: 'text-red-700' },
      { name: 'GitHub', icon: SiGithub, color: 'text-slate-800' }
    ]
  }
];

export const technicalStrengths: TechnicalStrength[] = [
  {
    title: '문제 해결 능력',
    icon: Brain,
    color: 'sky',
    description: '복잡한 비즈니스 로직을 분석하고 효율적인 해결책을 제시합니다',
    examples: [
      '요구사항을 기반으로 핵심 기능을 빠르게 설계하고 구현',
      '데이터 흐름을 정리해 안정적인 API 계약 확립',
      '문제 재현과 원인 분석을 통해 개선 방안을 도출'
    ],
    score: 90
  },
  {
    title: '서비스 안정성',
    icon: Target,
    color: 'amber',
    description: '실제 사용자의 불편을 해결하는 기능을 안정적으로 제공하는 데 집중합니다',
    examples: [
      '실사용 환경을 반영한 예외 케이스를 정의하고 테스트',
      '오류 상황을 빠르게 파악할 수 있도록 로깅 포인트 설계',
      '릴리즈 후에도 사용 피드백을 반영해 기능을 지속 개선'
    ],
    score: 88
  }
];

export const softSkills: SoftSkill[] = [
  {
    title: '커뮤니케이션',
    description: '기술적 내용을 비개발자도 이해할 수 있게 설명',
    score: 85
  },
  {
    title: '목표 지향성',
    description: '명확한 목표 설정과 체계적인 업무 추진',
    score: 90
  },
  {
    title: '학습 능력',
    description: '새로운 기술 습득과 빠른 적응력',
    score: 92
  }
];

export const additionalSkills = [
  '기획',
  '요구사항 분석',
  'API 설계',
  '데이터 모델링',
  '문서화',
  '협업 회의록',
  '피드백 반영'
];

export interface Award {
  title: string;
  organization: string;
  date: string;
  description?: string;
  awardFile?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  id?: string;
  certificateFile?: string;
}

export const awards: Award[] = [
  {
    title: '부산디지털혁신아카데미해커톤',
    organization: '부산정보산업진흥원',
    date: '2024.11.20.',
    description: '부산 시민을 위한 AI 추천 맞춤형 식단 서비스',
    awardFile: './2024년_부산디지털혁신아카데미해커톤_상장_밥늦즈(노유현_박선영_이하은)-1.png',
  },
  {
    title: 'SW·AI 해카톤&윤리캠프',
    organization: '부산교육연구정보원',
    date: '2025.08.13. ~ 2025.08.14',
    description: '수상 내역 설명'
  },
  {
    title: '수상명 3',
    organization: '주최 기관',
    date: '2024.03',
    description: '수상 내역 설명'
  }
];

export const certifications: Certification[] = [
  {
    name: '정보처리산업기사',
    issuer: '한국산업인력공단',
    date: '2025.09.17.',
    id: '25251030400E',
    certificateFile: '/certificate.pdf'
  }
];