import { Github, ExternalLink, FileText, LucideIcon } from 'lucide-react';

export interface ProjectLink {
  label: string;
  icon: LucideIcon;
  href: string;
}

export interface Project {
  badge: string;
  title: string;
  logo?: string;
  period: string;
  description: string;
  role: string;
  background: string[];
  coreFeatures: string[];
  impact: string[];
  tech: string[];
  links: ProjectLink[];
}

export const featuredProjects: Project[] = [
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
      { label: '서비스', icon: ExternalLink, href: 'https://v2.muldum.com/' },
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
