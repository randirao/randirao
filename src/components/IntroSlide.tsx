import React from 'react';
import { User, Code, Database, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function IntroSlide() {
  return (
    <div className="p-8">
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
              도화지에 나만의 색을 채우듯, 꾸준히 성장하는 백엔드 개발자입니다.”
          </p>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl text-center">
            <span className="text-3xl block mb-3">✨</span>
            <h3 className="text-lg text-slate-800 mb-2">클린 코드</h3>
            <p className="text-slate-600 text-sm">
              가독성 높고 유지보수 쉬운<br />
              코드 작성 집중
            </p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl text-center">
            <span className="text-3xl block mb-3">🗄️</span>
            <h3 className="text-lg text-slate-800 mb-2">데이터베이스 설계</h3>
            <p className="text-slate-600 text-sm">
              효율적인 스키마 설계와<br />
              쿼리 최적화 경험
            </p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl text-center">
            <span className="text-3xl block mb-3">⚡</span>
            <h3 className="text-lg text-slate-800 mb-2">성능 최적화</h3>
            <p className="text-slate-600 text-sm">
              시스템 병목 지점 파악과<br />
              성능 개선 역량
            </p>
          </Card>
        </div>

        {/* Quote */}
        <div className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-yellow-200 rounded-2xl shadow-md border border-stone-200">
          <p className="text-slate-700 italic">
            "끊임없이 색을 섞고 덧칠하며, 사람들의 일상에 스며드는 그림을 남기는 것이 제 목표입니다."
          </p>
        </div>
      </div>
    </div>
  );
}