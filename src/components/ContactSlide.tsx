import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { futureVision, contactInfo } from '../data/contact';

export default function ContactSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">향후 목표 & 연락처</h1>
          <p className="text-slate-600">
            지속적인 성장을 통해 가치 있는 시스템을 만들어가겠습니다
          </p>
        </div>

        <Card className="mb-12 p-6 bg-gradient-to-r from-sky-100 to-amber-100 border border-stone-200">
          <p className="text-lg text-slate-700 leading-relaxed">{futureVision}</p>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 bg-white/60 backdrop-blur-sm border-stone-200">
            <h2 className="text-xl text-slate-800 mb-6">연락처</h2>
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
              <p className="text-slate-700">경상남도 양산시 (근무지 협의 가능)</p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-sky-50 to-amber-50 border border-stone-200">
            <h2 className="text-xl text-slate-800 mb-6">함께 성장하고 싶습니다</h2>

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

            <div>
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

        <Card className="mt-12 p-6 bg-gradient-to-r from-sky-100 to-amber-100 border border-stone-200">
          <blockquote>
            <p className="text-lg text-slate-700 italic mb-2">
              "좋은 개발자는 코드만 잘 짜는 것이 아니라, 사용자와 동료를 생각하는 개발자라고 믿습니다"
            </p>
            <footer className="text-slate-600">- 이하은 -</footer>
          </blockquote>
        </Card>
      </div>
    </div>
  );
}