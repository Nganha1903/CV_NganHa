import React from 'react';
import { User, Target, GraduationCap, Briefcase, CheckCircle, ArrowRight, Building2, Sparkles } from 'lucide-react';
import { CVData } from '../types';

interface CVRightColumnProps {
  data: CVData;
}

export const CVRightColumn: React.FC<CVRightColumnProps> = ({ data }) => {
  return (
    <main className="space-y-6">
      
      {/* 1. GIỚI THIỆU BẢN THÂN (Professional Summary) */}
      <section className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm relative overflow-hidden avoid-break">
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-xs">
            <User className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Giới thiệu bản thân
          </h2>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-inter font-normal">
          {data.aboutMe}
        </p>
      </section>

      {/* 2. MỤC TIÊU NGHỀ NGHIỆP (Career Goals) */}
      <section className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 text-white shadow-xs">
            <Target className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Mục tiêu nghề nghiệp
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.careerGoals.map((goal, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3 hover:border-blue-400 transition"
            >
              <div className="mt-0.5 p-1 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-xs leading-snug font-medium">
                {goal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HỌC VẤN (Education Timeline) */}
      <section className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 text-white shadow-xs">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Học vấn
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-cyan-500 before:to-slate-300 dark:before:to-slate-700">
          {data.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-cyan-400 group-hover:scale-125 transition"></div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 transition hover:bg-white dark:hover:bg-slate-800 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-space font-bold text-sm text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {edu.period}
                  </span>
                </div>

                <p className="font-medium text-xs text-blue-600 dark:text-cyan-400 mb-1">
                  {edu.major}
                </p>

                {edu.degree && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Trình độ: {edu.degree}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KINH NGHIỆM LÀM VIỆC & DỰ ÁN (Experience & Projects) */}
      <section className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center justify-between gap-2 mb-5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xs">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
              Kinh nghiệm làm việc
            </h2>
          </div>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
            Thực hành & Dự án
          </span>
        </div>

        <div className="space-y-6">
          
          {/* Company Project 1: CÔNG TY TNHH NỘI THẤT TNA VIỆT NAM */}
          <div className="p-5 rounded-xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:border-blue-300 transition">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[11px] font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider block mb-0.5">
                  {data.companyExperience.role}
                </span>
                <h3 className="font-space font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  {data.companyExperience.company}
                </h3>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Dự án Website Doanh nghiệp
              </span>
            </div>

            <ul className="space-y-2 mt-3 text-xs text-slate-700 dark:text-slate-300">
              {data.companyExperience.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing Experience 2: Digital Marketing */}
          <div className="p-5 rounded-xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:border-cyan-300 transition">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-0.5">
                  Hỗ trợ truyền thông & Đồ họa
                </span>
                <h3 className="font-space font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-500" />
                  {data.marketingExperience.role}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                Canva, CapCut & Social
              </span>
            </div>

            <ul className="space-y-2 mt-3 text-xs text-slate-700 dark:text-slate-300">
              {data.marketingExperience.details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
};
