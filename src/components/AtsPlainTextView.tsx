import React from 'react';
import { Copy, Check, FileText, ArrowLeft } from 'lucide-react';
import { CVData } from '../types';

interface AtsPlainTextViewProps {
  data: CVData;
  onBackToVisual: () => void;
}

export const AtsPlainTextView: React.FC<AtsPlainTextViewProps> = ({ data, onBackToVisual }) => {
  const [copied, setCopied] = React.useState(false);

  const generateAtsText = () => {
    return `
==================================================
CV CHUẨN ATS - NGUYỄN ĐỨC NGÂN HÀ
==================================================

HỌ VÀ TÊN: ${data.personalInfo.fullName}
CHỨC DANH: ${data.personalInfo.titles.join(' | ')}
NGÀY SINH: ${data.personalInfo.dob} (${data.personalInfo.gender})
ĐIỆN THOẠI: ${data.personalInfo.phone}
EMAIL: ${data.personalInfo.email}
ĐỊA CHỈ: ${data.personalInfo.address}
QUÊ QUÁN: ${data.personalInfo.hometown}

--------------------------------------------------
GIỚI THIỆU BẢN THÂN
--------------------------------------------------
${data.aboutMe}

--------------------------------------------------
MỤC TIÊU NGHỀ NGHIỆP
--------------------------------------------------
${data.careerGoals.map((g) => `- ${g}`).join('\n')}

--------------------------------------------------
HỌC VẤN
--------------------------------------------------
${data.education
  .map(
    (e) => `• ${e.period}: ${e.institution}
  Chuyên ngành: ${e.major}
  Trình độ: ${e.degree || 'N/A'}`
  )
  .join('\n\n')}

--------------------------------------------------
KINH NGHIỆM LÀM VIỆC & DỰ ÁN
--------------------------------------------------
1. ${data.companyExperience.company}
   Vai trò: ${data.companyExperience.role}
${data.companyExperience.details.map((d) => `   - ${d}`).join('\n')}

2. ${data.marketingExperience.role}
${data.marketingExperience.details.map((d) => `   - ${d}`).join('\n')}

--------------------------------------------------
KỸ NĂNG CHUYÊN MÔN
--------------------------------------------------
${data.skillGroups
  .map(
    (g) => `[${g.category}]
${g.items.map((i) => ` - ${i.name}: ${i.level}`).join('\n')}`
  )
  .join('\n\n')}

--------------------------------------------------
KỸ NĂNG MỀM
--------------------------------------------------
${data.softSkills.join(', ')}

--------------------------------------------------
CHỨNG CHỈ & THÀNH TÍCH HOẠT ĐỘNG
--------------------------------------------------
${data.achievements.map((a) => `- ${a.title} (${a.badge || 'Chứng nhận'})`).join('\n')}
==================================================
`.trim();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateAtsText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <button
            onClick={onBackToVisual}
            className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Trở về giao diện thiết kế
          </button>
          <h2 className="text-xl font-poppins font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" /> Bản Văn Bản Thuần Chuẩn ATS
          </h2>
          <p className="text-xs text-slate-500">Thích hợp để sao chép trực tiếp vào các hệ thống lọc hồ sơ tự động (ATS).</p>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md transition flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Đã sao chép ATS!' : 'Sao chép toàn bộ text ATS'}</span>
        </button>
      </div>

      <div className="mt-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-emerald-500 selection:text-white">
        {generateAtsText()}
      </div>
    </div>
  );
};
