import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { techCategories, technicalStrengths, softSkills, additionalSkills } from '../data/skills';
import TechStackCard from './skills/TechStackCard';
import TechnicalStrengthCard from './skills/TechnicalStrengthCard';
import SoftSkillCard from './skills/SoftSkillCard';

export default function SkillsSlide() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl text-slate-800 mb-4">역량</h1>
          <p className="text-slate-600">
            기술 스택과 강점, 그리고 함께 일하고 싶은 이유를 한눈에 담았습니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <TechStackCard key={category.title} category={category} />
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-yellow-200 rounded-2xl shadow-md border border-stone-200">
          <h4 className="text-lg text-slate-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            추가 역량
          </h4>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="border-yellow-300 text-slate-600 bg-yellow-50/50 rounded-full px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl text-slate-800 mb-6">기술적 강점</h2>
          <div className="space-y-8">
            {technicalStrengths.map((strength) => (
              <TechnicalStrengthCard key={strength.title} strength={strength} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl text-slate-800 mb-6">소프트 스킬</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((skill) => (
              <SoftSkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </div>

        <Card className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-amber-50 border border-stone-200">
          <h3 className="text-lg text-slate-800 mb-4">개발 철학</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-slate-700 mb-2">사용자 중심</h4>
              <p className="text-sm text-slate-600">
                최종 사용자의 경험을 항상 고려하여 성능과 안정성을 보장하는 시스템 구축
              </p>
            </div>
            <div>
              <h4 className="text-slate-700 mb-2">지속적 개선</h4>
              <p className="text-sm text-slate-600">
                코드 품질과 시스템 성능을 지속적으로 모니터링하고 개선
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}