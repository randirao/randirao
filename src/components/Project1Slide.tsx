import React from 'react';
import { ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Project1Slide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-600 mb-4 rounded-full">
                🌟 메인 프로젝트
              </Badge>
              <h1 className="text-3xl text-slate-800 mb-4">
                실시간 채팅 플랫폼
              </h1>
              <p className="text-slate-600 text-lg">
                WebSocket을 활용한 실시간 메시징 서비스
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-lg text-slate-800 mb-3">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {['🌱 Spring Boot', '💬 WebSocket', '⚡ Redis', '🐘 PostgreSQL', '🐳 Docker'].map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-yellow-300 bg-yellow-50/30 rounded-full text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mb-8">
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Demo
              </Button>
            </div>
          </div>

          {/* Problem & Solution */}
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-stone-200 rounded-2xl shadow-md">
            <h3 className="text-lg text-slate-800 mb-4">🔍 문제 상황 & 해결 과정</h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-red-50 rounded-2xl border border-red-200">
                <h4 className="text-sm text-red-800 mb-2 flex items-center gap-2">
                  <span>😰</span> 문제
                </h4>
                <p className="text-red-700 text-sm">
                  동시 접속자 증가 시 메시지 전송 지연 발생 (평균 3-5초)
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-2xl border border-green-200">
                <h4 className="text-sm text-green-800 mb-2 flex items-center gap-2">
                  <span>✅</span> 해결
                </h4>
                <div className="text-green-700 text-sm space-y-1">
                  <div className="flex items-start gap-2">
                    <span>🔄</span> Redis Pub/Sub 메시지 브로커 구현
                  </div>
                  <div className="flex items-start gap-2">
                    <span>⚡</span> Connection Pool 최적화
                  </div>
                  <div className="flex items-start gap-2">
                    <span>🚀</span> 비동기 처리로 응답시간 단축
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 text-center rounded-2xl shadow-md">
            <span className="text-3xl block mb-2">📈</span>
            <h4 className="text-2xl text-slate-800 mb-1">95%</h4>
            <p className="text-slate-600 text-sm">응답 시간 개선</p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 text-center rounded-2xl shadow-md">
            <span className="text-3xl block mb-2">👥</span>
            <h4 className="text-2xl text-slate-800 mb-1">1,000+</h4>
            <p className="text-slate-600 text-sm">동시 접속 지원</p>
          </Card>

          <Card className="p-5 bg-white/70 backdrop-blur-sm border-stone-200 text-center rounded-2xl shadow-md">
            <span className="text-3xl block mb-2">⚡</span>
            <h4 className="text-2xl text-slate-800 mb-1">50ms</h4>
            <p className="text-slate-600 text-sm">평균 메시지 전송 시간</p>
          </Card>
        </div>
      </div>
    </div>
  );
}