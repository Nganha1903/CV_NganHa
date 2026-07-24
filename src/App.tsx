import React, { useState, useEffect } from 'react';
import { CVHeader } from './components/CVHeader';
import { CVLeftColumn } from './components/CVLeftColumn';
import { CVRightColumn } from './components/CVRightColumn';
import { AtsPlainTextView } from './components/AtsPlainTextView';
import { LiveEditModal } from './components/LiveEditModal';
import { initialCVData } from './data/cvData';
import { CVData, StylePreset } from './types';

export default function App() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [preset, setPreset] = useState<StylePreset>('glassmorphism');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isAtsMode, setIsAtsMode] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // Sync dark class on html root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const getContainerPresetClass = () => {
    switch (preset) {
      case 'dashboard-ui':
        return 'bg-slate-50/90 dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-2xl';
      case 'minimal-luxury':
        return 'bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 shadow-xl';
      case 'glassmorphism':
      default:
        return 'glass-card dark:glass-card-dark shadow-2xl backdrop-blur-xl border border-white/60 dark:border-slate-700/60';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-inter ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-[#F8FAFC] text-[#0F172A]'}`}>
      
      {/* Main Container */}
      <div className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
        
        {isAtsMode ? (
          <AtsPlainTextView
            data={cvData}
            onBackToVisual={() => setIsAtsMode(false)}
          />
        ) : (
          <div className="max-w-[1100px] mx-auto relative">
            
            {/* Ambient Background Gradient Lights (Screen View Only) */}
            <div className="no-print absolute -top-12 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="no-print absolute top-1/2 -right-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Print Page Frame / CV Wrapper */}
            <div
              className={`print-page rounded-3xl p-6 sm:p-10 transition-all duration-300 relative z-10 ${getContainerPresetClass()}`}
            >
              {/* Header Section */}
              <CVHeader personalInfo={cvData.personalInfo} />

              {/* 2-Column Split Layout: Main Column (65%) & Sidebar Column (35%) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
                
                {/* Main Column (~65% -> Giới thiệu bản thân, Mục tiêu, Học vấn, Kinh nghiệm) */}
                <div className="lg:col-span-7 xl:col-span-8">
                  <CVRightColumn data={cvData} />
                </div>

                {/* Sidebar Column (~35% -> Kỹ năng chuyên môn, Công cụ, Kỹ năng mềm, Chứng chỉ) */}
                <div className="lg:col-span-5 xl:col-span-4">
                  <CVLeftColumn data={cvData} />
                </div>

              </div>

              {/* Footer Stamp / Copyright */}
              <footer className="mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-center text-[11px] text-slate-400 dark:text-slate-500 font-space">
                <p>
                  © 2026 Nguyen Duc Ngan Ha
                </p>
              </footer>

            </div>

          </div>
        )}

      </div>

      {/* Live Editor Modal */}
      <LiveEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={cvData}
        onSave={(newData) => setCvData(newData)}
        onReset={() => setCvData(initialCVData)}
      />

    </div>
  );
}
