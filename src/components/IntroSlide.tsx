import React from 'react';
import { User, Code, Database, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function IntroSlide() {
  return (
    <div
         style={{
             display: 'flex',
             height: '80vh',
             padding: '3rem',
         }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-28 h-28 mx-auto mb-6">
            <ImageWithFallback
              src="/profile.jpg"
              alt="프로필 사진"
              className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white/50"
              style={{
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          
          <h1 className="text-4xl text-slate-800 mb-4">이하은</h1>
          <p className="text-xl text-slate-600 mb-8">
              "도화지에 나만의 색을 채우듯, 꾸준히 성장하는 백엔드 개발자입니다.”
          </p>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl text-center">
            <span className="text-3xl block mb-3">✨</span>
            <h3 className="text-lg text-slate-800 mb-2">의도가 보이는 코드</h3>
            <p className="text-slate-600 text-sm">
              쉽게 읽히는 코드를 목표로,<br />
              명확한 구조와 일관성을 연습합니다.
            </p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl text-center">
            <span className="text-3xl block mb-3">🗄️</span>
            <h3 className="text-lg text-slate-800 mb-2">견고한 데이터 구조</h3>
            <p className="text-slate-600 text-sm">
              데이터 흐름을 이해하며,<br />
              확장성과 정합성을 함께 고려합니다.
            </p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl text-center">
            <span className="text-3xl block mb-3">🤝</span>
            <h3 className="text-lg text-slate-800 mb-2">신뢰를 쌓는 약속</h3>
            <p className="text-slate-600 text-sm">
              말한 것은 지키고,<br />
              지키기 어려우면 먼저 알립니다.
            </p>
          </Card>
        </div>

        {/* Quote */}
        <div className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-yellow-200 rounded-2xl shadow-md border border-stone-200">
          <p className="text-slate-700 italic">
            "다양한 관점을 조합해 더 나은 경험을 만드는 개발자로 계속 성장하고자 합니다."
          </p>
        </div>
      </div>
    </div>
  );
}