import React, { useState } from 'react';
import { X, Check, RefreshCw, User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { CVData } from '../types';

interface LiveEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CVData;
  onSave: (newData: CVData) => void;
  onReset: () => void;
}

export const LiveEditModal: React.FC<LiveEditModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<CVData>({ ...data });

  const handlePersonalChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const handleTitleChange = (value: string) => {
    const titles = value.split(',').map((t) => t.trim()).filter(Boolean);
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        titles: titles.length > 0 ? titles : prev.personalInfo.titles,
      },
    }));
  };

  const handleAboutMeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      aboutMe: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-poppins font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Chỉnh sửa thông tin CV
            </h3>
            <p className="text-xs text-slate-500">Cập nhật thông tin nhanh trước khi xuất PDF / A4.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
          
          {/* Avatar URL / Upload */}
          <div>
            <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
              Đường dẫn ảnh đại diện (Avatar URL hoặc Tải từ máy)
            </label>
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <input
                type="text"
                value={formData.personalInfo.avatarUrl}
                onChange={(e) => handlePersonalChange('avatarUrl', e.target.value)}
                className="flex-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                placeholder="https://... hoặc bấm nút bên để tải ảnh"
              />
              <label className="px-3 py-2 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 font-medium hover:bg-blue-100 transition flex items-center gap-1.5 cursor-pointer whitespace-nowrap border border-blue-200 dark:border-slate-700">
                <Camera className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>Tải ảnh từ máy</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        if (typeof reader.result === 'string') {
                          handlePersonalChange('avatarUrl', reader.result);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Họ và tên</label>
              <input
                type="text"
                value={formData.personalInfo.fullName}
                onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                Chức danh (phân cách bằng dấu phẩy)
              </label>
              <input
                type="text"
                value={formData.personalInfo.titles.join(', ')}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Số điện thoại</label>
              <input
                type="text"
                value={formData.personalInfo.phone}
                onChange={(e) => handlePersonalChange('phone', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Email</label>
              <input
                type="text"
                value={formData.personalInfo.email}
                onChange={(e) => handlePersonalChange('email', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Địa chỉ hiện tại</label>
              <input
                type="text"
                value={formData.personalInfo.address}
                onChange={(e) => handlePersonalChange('address', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Quê quán</label>
              <input
                type="text"
                value={formData.personalInfo.hometown}
                onChange={(e) => handlePersonalChange('hometown', e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
              Giới thiệu bản thân
            </label>
            <textarea
              rows={4}
              value={formData.aboutMe}
              onChange={(e) => handleAboutMeChange(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white leading-relaxed"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 text-xs font-semibold hover:bg-rose-100 transition flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Đặt lại mặc định
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 transition"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" /> Lưu thay đổi
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
