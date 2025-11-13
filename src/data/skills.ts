import { Brain, Users, Target, BookOpen, LucideIcon } from 'lucide-react';

export interface TechItem {
  name: string;
  emoji: string;
}

export interface TechCategory {
  title: string;
  emoji: string;
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
  icon: LucideIcon;
  description: string;
  score: number;
}

export const techCategories: TechCategory[] = [
  {
    title: 'Backend',
    emoji: '☕',
    items: [
      { name: 'Java', emoji: '☕' },
      { name: 'Spring Boot', emoji: '🌱' }
    ]
  },
  {
    title: 'Database',
    emoji: '🗃️',
    items: [
      { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'MySQL', emoji: '🐬' },
      { name: 'Oracle', emoji: '🏛️' }
    ]
  },
  {
    title: 'Infra & Collaboration',
    emoji: '⚙️',
    items: [
      { name: 'Docker', emoji: '🐳' },
      { name: 'Git', emoji: '🌳' }
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

export const additionalSkills = [
  '기획',
  '요구사항 분석',
  'API 설계',
  '데이터 모델링',
  '문서화',
  '협업 회의록',
  '피드백 반영'
];