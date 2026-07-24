import { CVData } from '../types';

export const initialCVData: CVData = {
  personalInfo: {
    fullName: 'Nguyen Duc Ngan Ha',
    dob: '19/03/2005',
    gender: 'Nam',
    phone: '0862190305',
    email: 'nguyenducnganha@gmail.com',
    address: 'Hai Bà Trưng, Hà Nội',
    hometown: 'Hưng Yên',
    titles: ['Sinh viên CNTT (Kỹ Nghệ Phần Mềm)'],

  
    avatarUrl: '/anh.jpg',
  },
  aboutMe:
    'Tôi là sinh viên ngành Công nghệ Thông tin có nền tảng về Kế toán doanh nghiệp. Tôi yêu thích Business Analyst, thiết kế website, công nghệ và truyền thông số. Tôi có kiến thức cơ bản về xây dựng website, sử dụng Canva, CapCut, Microsoft Office và các công cụ AI phục vụ học tập và công việc. Tôi luôn chủ động học hỏi, có tinh thần trách nhiệm và mong muốn phát triển trong môi trường làm việc chuyên nghiệp.',
  careerGoals: [
    'Học hỏi kiến thức và cập nhật xu hướng công nghệ mới trong lĩnh vực Business Analyst.',
    'Phát triển kỹ năng thực hành, áp dụng hiệu quả vào công việc thực tế tại doanh nghiệp.',
    'Tích lũy kinh nghiệm làm việc thực chiến, hoàn thiện tư duy xử lý công việc.',
    'Gắn bó lâu dài, phát huy tối đa tinh thần trách nhiệm và đóng góp vào giá trị chung của tổ chức.',
  ],
  education: [
    {
      period: '2023 - Nay',
      institution: 'Đại học Kinh doanh và Công nghệ Hà Nội',
      major: 'Công nghệ thông tin (Kỹ nghệ phần mềm)',
      degree: 'Sinh viên Đại học',
    },
    {
      period: '2022 - 2023',
      institution: 'Cao đẳng Công nghiệp Hưng Yên',
      major: 'Kế toán doanh nghiệp',
      degree: 'Tốt nghiệp Cao đẳng',
    },
  ],
  companyExperience: {
    company: 'CÔNG TY TNHH NỘI THẤT TNA VIỆT NAM',
    role: 'Thực hiện dự án Website',
    details: [
      'Tham gia thiết kế và xây dựng website giới thiệu doanh nghiệp.',
      'Hỗ trợ chỉnh sửa giao diện website theo đúng yêu cầu nhận diện thương hiệu.',
      'Thực hiện các công việc cơ bản về HTML, CSS để tối ưu trải nghiệm giao diện.',
      'Phối hợp chặt chẽ cùng các thành viên trong nhóm hoàn thành dự án đúng tiến độ.',
    ],
  },
  marketingExperience: {
    role: 'Digital Marketing',
    details: [
      'Hỗ trợ quảng bá sản phẩm và dịch vụ trên các nền tảng mạng xã hội.',
      'Thiết kế hình ảnh truyền thông cơ bản bằng Canva (Banner, Poster, Post social).',
      'Chỉnh sửa video ngắn truyền thông bằng CapCut (thêm hiệu ứng, phụ đề, xuất video).',
      'Hỗ trợ xây dựng và biên tập nội dung truyền thông cho các chiến dịch.',
    ],
  },
  skillGroups: [
    {
      category: 'Thiết kế Website',
      iconName: 'Layout',
      items: [
        {
          name: 'HTML',
          level: 'Có kiến thức cơ bản',
          details: ['Nắm vững cấu trúc trang web', 'Thẻ chuẩn Semantic HTML'],
        },
        {
          name: 'CSS',
          level: 'Có kiến thức cơ bản',
          details: ['Định dạng giao diện', 'Flexbox & Responsive cơ bản'],
        },
        {
          name: 'Xây dựng Website đơn giản',
          level: 'Biết sử dụng',
          details: ['Tạo trang landing page', 'Bố cục nội dung rõ ràng'],
        },
        {
          name: 'Nguyên tắc UI cơ bản',
          level: 'Có kiến thức cơ bản',
          details: ['Sắp xếp khoảng trắng', 'Phối màu & Font chữ hài hòa'],
        },
      ],
    },
    {
      category: 'Thiết kế & Đồ họa (Canva)',
      iconName: 'Palette',
      items: [
        {
          name: 'Thiết kế Banner cơ bản',
          level: 'Biết sử dụng',
        },
        {
          name: 'Thiết kế Poster',
          level: 'Có khả năng thực hiện',
        },
        {
          name: 'Bài đăng Mạng xã hội',
          level: 'Đã từng sử dụng',
        },
      ],
    },
    {
      category: 'Dựng Video (CapCut)',
      iconName: 'Video',
      items: [
        {
          name: 'Chỉnh sửa Video cơ bản',
          level: 'Biết sử dụng',
        },
        {
          name: 'Thêm phụ đề & Hiệu ứng',
          level: 'Có khả năng thực hiện',
        },
        {
          name: 'Xuất video chất lượng cao',
          level: 'Biết sử dụng',
        },
      ],
    },
    {
      category: 'Tin học văn phòng (Microsoft Office)',
      iconName: 'FileSpreadsheet',
      items: [
        {
          name: 'Microsoft Word',
          level: 'Biết sử dụng',
          details: ['Trình bày văn bản chuẩn', 'Định dạng tài liệu'],
        },
        {
          name: 'Microsoft Excel',
          level: 'Biết sử dụng',
          details: ['Hàm cơ bản, bảng biểu', 'Nền tảng Kế toán doanh nghiệp'],
        },
        {
          name: 'Microsoft PowerPoint',
          level: 'Biết sử dụng',
          details: ['Thiết kế slide thuyết trình', 'Tạo hiệu ứng trình chiếu'],
        },
      ],
    },
    {
      category: 'Công nghệ & AI',
      iconName: 'Cpu',
      items: [
        {
          name: 'Công cụ AI hỗ trợ',
          level: 'Biết sử dụng',
          details: ['Ứng dụng AI học tập', 'Tối ưu hiệu suất công việc'],
        },
      ],
    },
  ],
  softSkills: [
    'Giao tiếp',
    'Làm việc nhóm',
    'Làm việc độc lập',
    'Thích học hỏi',
    'Tư duy logic',
    'Chủ động',
    'Trách nhiệm',
    'Thích nghi môi trường mới',
  ],
  achievements: [
    {
      title: 'Chứng chỉ tin học cơ bản',
      badge: 'Bằng cấp & Chứng chỉ',
      icon: 'Award',
    },
    {
      title: 'Tham dự Đại hội Sinh viên Việt Nam tỉnh Hưng Yên',
      badge: 'Hoạt động đoàn thể',
      icon: 'Users',
    },
    {
      title: 'Tham gia hiến máu tình nguyện',
      badge: 'Công tác xã hội',
      icon: 'Heart',
    },
    {
      title: 'Thành viên CLB Đảng viên trẻ HUBT',
      badge: 'Tổ chức sinh viên',
      icon: 'Star',
    },
    {
      title: 'Giải Ba cuộc thi truyền thông của CLB ĐVT',
      badge: 'Giải thưởng',
      icon: 'Trophy',
    },
    {
      title: 'Tham gia chương trình ủng hộ Xuân Biên Phòng - Ấm Lòng Dân Bản',
      badge: 'Hoạt động thiện nguyện',
      icon: 'Compass',
    },
    {
      title: 'Tham gia hoạt động Tổng điều tra kinh tế 2026 tại Phường Vĩnh Tuy',
      badge: 'Hoạt động xã hội',
      icon: 'Compass',
    },
  ],
};
