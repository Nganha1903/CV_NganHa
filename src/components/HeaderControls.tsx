import React from 'react';
import { Download, Eye, FileText, Moon, Sun, Sparkles, Check, Share2, Edit3 } from 'lucide-react';
import { StylePreset } from '../types';

interface HeaderControlsProps {
  currentPreset: StylePreset;
  onPresetChange: (preset: StylePreset) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenEditModal: () => void;
  isAtsMode: boolean;
  onToggleAtsMode: () => void;
}

export const HeaderControls: React.FC<HeaderControlsProps> = ({
  currentPreset,
  onPresetChange,
  isDarkMode,
  onToggleDarkMode,
  onOpenEditModal,
  isAtsMode,
  onToggleAtsMode,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handlePrintPdf = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="no-print sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="font-poppins font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                CV Premium <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800">Canva & Behance Style</span>
              </h1>
              <p className="text-xs text-slate-5-00 dark:text-slate-400 font-inter">
                Dành cho Nguyễn Đức Ngân Hà • Chuẩn ATS & Xuất A4 PDF
              </p>
            </div>
          </div>

          {/* Preset Theme Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium">
            <button
              onClick={() => {
                onPresetChange('glassmorphism');
                if (isAtsMode) onToggleAtsMode();
              }}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                currentPreset === 'glassmorphism' && !isAtsMode
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Glass Canva
            </button>

            <button
              onClick={() => {
                onPresetChange('dashboard-ui');
                if (isAtsMode) onToggleAtsMode();
              }}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                currentPreset === 'dashboard-ui' && !isAtsMode
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              Dashboard UI
            </button>

            <button
              onClick={() => {
                onPresetChange('minimal-luxury');
                if (isAtsMode) onToggleAtsMode();
              }}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                currentPreset === 'minimal-luxury' && !isAtsMode
                  ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Minimal Luxury
            </button>

            <button
              onClick={onToggleAtsMode}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                isAtsMode
                  ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Chuẩn ATS
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Live Edit Button */}
            <button
              onClick={onOpenEditModal}
              className="px-3 py-2 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 hover:bg-blue-100 dark:hover:bg-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Chỉnh sửa thông tin CV"
            >
              <Edit3 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span className="hidden sm:inline">Chỉnh sửa</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDarkMode ? 'Bật chế độ Sáng' : 'Bật chế độ Tối'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Share Link */}
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-medium flex items-center gap-1"
              title="Chia sẻ CV"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Export PDF */}
            <button
              onClick={handlePrintPdf}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium text-xs shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Xuất File A4 / PDF</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
