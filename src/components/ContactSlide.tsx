import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Target, Trophy, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const futureGoals = [
  {
    title: '단기 목표 (6개월)',
    icon: Target,
    color: 'sky',
    goals: [
      'Spring Framework 심화 학습',
      'AWS 클라우드 자격증 취득',
      '대용량 트래픽 처리 경험 쌓기'
    ]
  },
  {
    title: '중기 목표 (1-2년)',
    icon: Trophy,
    color: 'amber',
    goals: [
      'MSA 아키텍처 설계 역량 강화',
      '팀 리드 경험 및 멘토링',
      '기술 컨퍼런스 발표'
    ]
  },
  {
    title: '장기 목표 (3-5년)',
    icon: Rocket,
    color: 'sky',
    goals: [
      '시니어 백엔드 개발자',
      '오픈소스 프로젝트 기여',
      '기술 아키텍트 역할 수행'
    ]
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: '이메일',
    value: 'haeun.lee.dev@email.com',
    href: 'mailto:haeun.lee.dev@email.com'
  },
  {
    icon: Phone,
    label: '전화번호',
    value: '010-1234-5678',
    href: 'tel:010-1234-5678'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/haeun-lee',
    href: 'https://github.com/haeun-lee'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/haeun-lee-dev',
    href: 'https://linkedin.com/in/haeun-lee-dev'
  }
];

export default function ContactSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">향후 목표 & 연락처</h1>
          <p className="text-slate-600">
            지속적인 성장을 통해 가치 있는 시스템을 만들어가겠습니다
          </p>
        </div>

        {/* Future Goals */}
        <div className="mb-12">
          <h2 className="text-xl text-slate-800 mb-6 text-center">성장 로드맵</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {futureGoals.map((goalCategory, index) => (
              <Card key={index} className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 bg-${goalCategory.color}-100 rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                    <goalCategory.icon className={`w-6 h-6 text-${goalCategory.color}-600`} />
                  </div>
                  <h3 className="text-lg text-slate-800">{goalCategory.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {goalCategory.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      {goal}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="p-8 bg-white/60 backdrop-blur-sm border-stone-200">
            <h2 className="text-xl text-slate-800 mb-6 text-center">연락처</h2>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-stone-50 transition-colors">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-500">{contact.label}</p>
                    <a 
                      href={contact.href}
                      className="text-slate-700 hover:text-sky-600 transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-500">위치</span>
              </div>
              <p className="text-slate-700">서울특별시 (근무지 협의 가능)</p>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-br from-sky-50 to-amber-50 border border-stone-200">
            <h2 className="text-xl text-slate-800 mb-6 text-center">함께 성장하고 싶습니다</h2>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/80 rounded-lg">
                <h4 className="text-slate-700 mb-2">관심 분야</h4>
                <p className="text-sm text-slate-600">
                  대용량 트래픽 처리, MSA, 클라우드 인프라,<br />
                  성능 최적화, 모니터링
                </p>
              </div>
              
              <div className="p-4 bg-white/80 rounded-lg">
                <h4 className="text-slate-700 mb-2">협업 스타일</h4>
                <p className="text-sm text-slate-600">
                  적극적인 소통, 지식 공유,<br />
                  상호 피드백을 통한 함께 성장
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3">
                <Mail className="w-4 h-4 mr-2" />
                연락하기
              </Button>
              <p className="text-xs text-slate-500 mt-3">
                포트폴리오를 봐주셔서 감사합니다
              </p>
            </div>
          </Card>
        </div>

        {/* Final Quote */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-sky-100 to-amber-100 border border-stone-200">
          <blockquote className="text-center">
            <p className="text-lg text-slate-700 italic mb-2">
              "좋은 개발자는 코드만 잘 짜는 것이 아니라,<br />
              사용자와 동료를 생각하는 개발자라고 믿습니다"
            </p>
            <footer className="text-slate-600">- 이하은</footer>
          </blockquote>
        </Card>
      </div>
    </div>
  );
}