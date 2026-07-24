import React from 'react';
import { Mail, Phone, MapPin, Calendar, User, Home, Code, Megaphone, GraduationCap } from 'lucide-react';
import { PersonalInfo } from '../types';

interface CVHeaderProps {
  personalInfo: PersonalInfo;
}

export const CVHeader: React.FC<CVHeaderProps> = ({ personalInfo }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fall back to default avatar SVG if link fails
    e.currentTarget.src = '/avatar.svg';
  };

  return (
    <div className="relative mb-8 pt-2">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        
        {/* Left Section: Square Avatar + Name & Title */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 text-center sm:text-left">
          
          {/* Avatar Container with Gradient Glow Border */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 blur-sm opacity-80"></div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              {personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.fullName}
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <User className="w-16 h-16 text-slate-400" />
              )}
            </div>
          </div>

          {/* Name & Titles */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-center sm:self-start mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Lý lịch ứng tuyển • Professional CV
              </span>
            </div>

            <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent print:text-slate-900 tracking-tight">
              {personalInfo.fullName}
            </h1>

            {/* Chức danh badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mt-2">
              {personalInfo.titles.map((title, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-1 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/30 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 font-space font-semibold text-sm flex items-center gap-1.5 shadow-sm"
                >
                  {title.toLowerCase().includes('sinh viên') || title.toLowerCase().includes('học') ? (
                    <GraduationCap className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  ) : title.toLowerCase().includes('web') || title.toLowerCase().includes('dev') || title.toLowerCase().includes('code') ? (
                    <Code className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  ) : (
                    <Megaphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  )}
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Section: Contact Cards */}
        <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-2 text-xs text-slate-700 dark:text-slate-300">
          
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Điện thoại</p>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{personalInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Email</p>
              <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">{personalInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Địa chỉ</p>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{personalInfo.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Ngày sinh & Giới tính</p>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                {personalInfo.dob} ({personalInfo.gender})
              </p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-2 md:col-span-1 flex items-center gap-2.5 p-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
            <div className="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
              <Home className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Quê quán</p>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{personalInfo.hometown}</p>
            </div>
          </div>

        </div>

      </div>

      {/* Modern Gradient Accent Line Bar */}
      <div className="w-full h-1.5 mt-6 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 shadow-sm shadow-blue-500/20"></div>
    </div>
  );
};
