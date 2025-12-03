import React from 'react';
import { FileCode2, Database, Handshake, Mail, Phone, Github, Linkedin } from 'lucide-react';
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
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-28 h-28 mb-6">
            <ImageWithFallback
              src="/profile.jpg"
              alt="프로필 사진"
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white/50"
              style={{
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          
          <h1 className="text-4xl text-slate-800 mb-4">이하은</h1>
          <p className="text-xl text-slate-600 mb-8">
              "도화지에 나만의 색을 채우듯, 백엔드 개발자로서 꾸준히 성장하고 있습니다”
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-2xl text-slate-800 mb-6">연락처</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:randirao4245@gmail.com"
              className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-sm border border-stone-200 rounded-xl hover:shadow-md transition-all"
            >
              <Mail className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">randirao4245@gmail.com</span>
            </a>
            <a
              href="tel:010-5606-8381"
              className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-sm border border-stone-200 rounded-xl hover:shadow-md transition-all"
            >
              <Phone className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">010-5606-8381</span>
            </a>
            <a
              href="https://github.com/randirao"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-sm border border-stone-200 rounded-xl hover:shadow-md transition-all"
            >
              <Github className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/haeun218"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-white/70 backdrop-blur-sm border border-stone-200 rounded-xl hover:shadow-md transition-all"
            >
              <Linkedin className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl">
            <FileCode2 className="w-8 h-8 mb-3 text-slate-700" />
            <h3 className="text-lg text-slate-800 mb-2">의도가 보이는 코드</h3>
            <p className="text-slate-600 text-sm">
              쉽게 읽히는 코드를 목표로, 명확한 구조와 일관성을 연습합니다.
            </p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl">
            <Database className="w-8 h-8 mb-3 text-slate-700" />
            <h3 className="text-lg text-slate-800 mb-2">견고한 데이터 구조</h3>
            <p className="text-slate-600 text-sm">
              데이터 흐름을 이해하며, 확장성과 정합성을 함께 고려합니다.
            </p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 hover:shadow-lg transition-all rounded-2xl">
            <Handshake className="w-8 h-8 mb-3 text-slate-700" />
            <h3 className="text-lg text-slate-800 mb-2">신뢰를 쌓는 약속</h3>
            <p className="text-slate-600 text-sm">
              말한 것은 지키고, 지키기 어려우면 먼저 알립니다.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
