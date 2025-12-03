import React, { useState } from 'react';
import { Sparkles, Award as AwardIcon, FileCheck, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {techCategories, technicalStrengths, softSkills, additionalSkills, awards, certifications, TechCategory} from '../data/skills';
import TechStackCard from './skills/TechStackCard';
import TechnicalStrengthCard from './skills/TechnicalStrengthCard';
import SoftSkillCard from './skills/SoftSkillCard';

export default function SkillsSlide() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const openFile = (filePath: string) => {
    window.open(filePath, '_blank');
  };

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
            {techCategories.map((category: TechCategory) => (
                <TechStackCard key={category.title} category={category} />
            ))}
        </div>

        {/* Awards Section */}
        <div className="mt-12">
          <h2 className="text-xl text-slate-800 mb-6 flex items-center gap-2">
            <AwardIcon className="w-5 h-5" />
            수상 내역
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 hover:shadow-lg transition-all rounded-2xl ${award.awardFile ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
                onClick={() => award.awardFile && openFile(award.awardFile)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <AwardIcon className="w-5 h-5 text-yellow-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg text-slate-800 mb-1">{award.title}</h3>
                      {award.awardFile && (
                        <ExternalLink className="w-4 h-4 text-yellow-700" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{award.organization}</p>
                    <p className="text-xs text-slate-500">{award.date}</p>
                    {award.description && (
                      <p className="text-sm text-slate-600 mt-3">{award.description}</p>
                    )}
                    {award.awardFile && (
                      <p className="text-xs text-yellow-700 mt-3 flex items-center gap-1">
                        {/*<ExternalLink className="w-3 h-3" />*/}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        <div className="mt-12">
          <h2 className="text-xl text-slate-800 mb-6 flex items-center gap-2">
            <FileCheck className="w-5 h-5" />
            자격증
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200 hover:shadow-lg transition-all rounded-2xl ${cert.certificateFile ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
                onClick={() => cert.certificateFile && openFile(cert.certificateFile)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg text-slate-800 mb-1">{cert.name}</h3>
                      {cert.certificateFile && (
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-slate-500">{cert.date}</p>
                    {cert.id && (
                      <p className="text-xs text-slate-400 mt-2">자격번호: {cert.id}</p>
                    )}
                    {cert.certificateFile && (
                      <p className="text-xs text-blue-600 mt-3 flex items-center gap-1">
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}