import React from 'react';
import {
  Code,
  Palette,
  Video,
  FileSpreadsheet,
  Cpu,
  Award,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Layers,
  Wrench,
  Globe,
} from 'lucide-react';
import { CVData, ProficiencyLevel } from '../types';

interface CVLeftColumnProps {
  data: CVData;
}

export const CVLeftColumn: React.FC<CVLeftColumnProps> = ({ data }) => {
  // Helper to color-code the strict proficiency levels
  const getLevelBadgeClass = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Có kiến thức cơ bản':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Biết sử dụng':
        return 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800';
      case 'Có khả năng thực hiện':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Đã từng sử dụng':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const getLevelMeterWidth = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Có kiến thức cơ bản':
        return 'w-[50%]';
      case 'Biết sử dụng':
        return 'w-[50%]';
      case 'Có khả năng thực hiện':
        return 'w-[55%]';
      case 'Đã từng sử dụng':
        return 'w-[45%]';
      default:
        return 'w-[50%]';
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
      case 'Video':
        return <Video className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <aside className="space-y-6">
      
      {/* 1. KỸ NĂNG CHUYÊN MÔN (Technical Skills) */}
      <section className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-xs">
            <Layers className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Kỹ năng chuyên môn
          </h2>
        </div>

        <div className="space-y-5">
          {data.skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-2.5">
              <div className="flex items-center gap-2 font-space font-semibold text-xs text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                {getCategoryIcon(group.iconName)}
                <span>{group.category}</span>
              </div>

              <div className="space-y-2.5 pl-1">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-xs text-slate-900 dark:text-slate-200">
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${getLevelBadgeClass(
                          item.level
                        )}`}
                      >
                        {item.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 ${getLevelMeterWidth(
                          item.level
                        )} transition-all duration-500`}
                      ></div>
                    </div>

                    {/* Additional Sub-details if present */}
                    {item.details && item.details.length > 0 && (
                      <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-0.5 pt-0.5 pl-2 border-l border-blue-500/20">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. CÔNG CỤ SỬ DỤNG (Tools & Software) */}
      <section className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 text-white shadow-xs">
            <Wrench className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Công cụ làm việc
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">HTML & CSS</p>
              <p className="text-[10px] text-slate-500">Web Dev</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">Canva</p>
              <p className="text-[10px] text-slate-500">Banner & Poster</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">CapCut</p>
              <p className="text-[10px] text-slate-500">Video Editor</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">MS Office</p>
              <p className="text-[10px] text-slate-500">Word, Excel, PPT</p>
            </div>
          </div>

          <div className="col-span-2 p-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-500/30 flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <div>
              <p className="font-semibold text-xs text-slate-800 dark:text-slate-200">AI Assistant Tools</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Ứng dụng AI hỗ trợ học tập & làm việc</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KỸ NĂNG MỀM (Soft Skills) */}
      <section className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-emerald-600 to-cyan-500 text-white shadow-xs">
            <HeartHandshake className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Kỹ năng mềm
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.softSkills.map((skill, idx) => (
            <div
              key={idx}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-medium flex items-center gap-1.5 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CHỨNG CHỈ & THÀNH TÍCH (Achievements & Badges) */}
      <section className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 shadow-sm avoid-break">
        <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-slate-200/60 dark:border-slate-800">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-xs">
            <Award className="w-4 h-4" />
          </div>
          <h2 className="font-space font-bold text-base bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 uppercase tracking-wider">
            Chứng chỉ & Hoạt động
          </h2>
        </div>

        <div className="space-y-2.5">
          {data.achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2.5"
            >
              <div className="mt-0.5 p-1 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-xs text-slate-900 dark:text-slate-100">{item.title}</p>
                {item.badge && (
                  <span className="inline-block mt-0.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </aside>
  );
};
