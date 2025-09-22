import React from 'react';
import { ExternalLink, Github, BarChart3, Shield, Database } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function Project2Slide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <div>
            <div className="mb-6">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-600 mb-4 rounded-full">
                🛍️ 개인 프로젝트
              </Badge>
              <h1 className="text-3xl text-slate-800 mb-4">
                전자상거래 API 서버
              </h1>
              <p className="text-slate-600 text-lg">
                대용량 트래픽 처리가 가능한 쇼핑몰 백엔드 시스템
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-lg text-slate-800 mb-3">사용 기술</h3>
              <div className="flex flex-wrap gap-2">
                {['🌱 Spring Boot', '🛡️ Spring Security', '🔗 JPA', '🐘 PostgreSQL', '⚡ Redis', '☁️ AWS'].map((tech, index) => (
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
                API 문서
              </Button>
            </div>
          </div>

          {/* Problem & Solution */}
          <Card className="p-6 bg-white/70 backdrop-blur-sm border-stone-200 rounded-2xl shadow-md">
            <h3 className="text-lg text-slate-800 mb-4">🔍 문제 상황 & 해결 과정</h3>
            
            <div className="space-y-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="text-sm text-red-800 mb-2">문제</h4>
                <p className="text-red-700 text-sm">
                  주문 처리 시 재고 부족으로 인한 오버셀링 발생 및<br />
                  대량 주문 시 데이터베이스 성능 저하
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-sm text-green-800 mb-2">해결</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• 비관적 락(Pessimistic Lock)을 이용한 재고 관리</li>
                  <li>• Redis를 활용한 재고 캐싱으로 조회 성능 향상</li>
                  <li>• 인덱스 최적화로 주문 조회 쿼리 성능 개선</li>
                  <li>• 트랜잭션 분리로 동시성 문제 해결</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Results */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 text-center">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <BarChart3 className="w-6 h-6 text-yellow-400" />
            </div>
            <h4 className="text-2xl text-slate-800 mb-1">80%</h4>
            <p className="text-slate-600 text-sm">쿼리 성능 향상</p>
          </Card>

          <Card className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 text-center">
            <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Shield className="w-6 h-6 text-sky-400" />
            </div>
            <h4 className="text-2xl text-slate-800 mb-1">100%</h4>
            <p className="text-slate-600 text-sm">오버셀링 방지</p>
          </Card>

          <Card className="p-6 bg-white/60 backdrop-blur-sm border-stone-200 text-center">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Database className="w-6 h-6 text-yellow-400" />
            </div>
            <h4 className="text-2xl text-slate-800 mb-1">5,000</h4>
            <p className="text-slate-600 text-sm">TPS 처리 능력</p>
          </Card>
        </div>
      </div>
    </div>
  );
}