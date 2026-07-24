export interface PersonalInfo {
  fullName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  hometown: string;
  titles: string[];
  avatarUrl: string;
}

export type ProficiencyLevel =
  | 'Có kiến thức cơ bản'
  | 'Biết sử dụng'
  | 'Có khả năng thực hiện'
  | 'Đã từng sử dụng';

export interface SkillGroup {
  category: string;
  iconName: string;
  items: {
    name: string;
    level: ProficiencyLevel;
    details?: string[];
  }[];
}

export interface EducationItem {
  period: string;
  institution: string;
  major: string;
  degree?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  projectNote?: string;
  details: string[];
}

export interface MarketingExperience {
  role: string;
  details: string[];
}

export interface AchievementItem {
  title: string;
  badge?: string;
  icon?: string;
}

export interface CVData {
  personalInfo: PersonalInfo;
  aboutMe: string;
  careerGoals: string[];
  education: EducationItem[];
  companyExperience: ExperienceItem;
  marketingExperience: MarketingExperience;
  skillGroups: SkillGroup[];
  softSkills: string[];
  achievements: AchievementItem[];
}

export type StylePreset = 'glassmorphism' | 'minimal-luxury' | 'dashboard-ui' | 'behance-creative';
