// 실제 국내 농기계 데이터 및 목업 데이터

export interface Equipment {
  type: string;
  manufacturer: string;
  model: string;
  year: number;
  specs: string[];
  image?: string;
}

export interface OperatorProfile {
  id: number;
  name: string;
  location: string;
  yearsOfExperience: number;
  rating: number;
  completedJobs: number;
  equipment: Equipment[];
  specialties: string[];
  serviceArea: string[];
  certifications: string[];
  reviews: Review[];
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  farmName: string;
}

export interface JobPosting {
  id: number;
  farmName: string;
  location: string;
  jobType: string;
  requiredEquipment: string;
  area: string;
  preferredModel?: string;
  schedule: string;
  budget: string;
  description: string;
  proposals: number;
  status: string;
}

// 실제 국내 농기계 운용자 목업 데이터
export const mockOperators: OperatorProfile[] = [
  {
    id: 1,
    name: "김철수",
    location: "경기 이천시",
    yearsOfExperience: 12,
    rating: 4.9,
    completedJobs: 284,
    equipment: [
      {
        type: "트랙터",
        manufacturer: "동양물산 TYM",
        model: "T2540",
        year: 2021,
        specs: ["55마력", "4기통 디젤", "4WD", "캐빈 장착"]
      },
      {
        type: "무인방제기",
        manufacturer: "DJI",
        model: "Agras T30",
        year: 2023,
        specs: ["30L 탱크", "8L/min 살포량", "RTK GPS", "AI 장애물 회피", "야간 작업 가능"]
      }
    ],
    specialties: ["경운/정지 작업", "무인 방제"],
    serviceArea: ["경기 이천", "여주", "광주"],
    certifications: ["농기계정비기능사", "농기계운전기능사", "드론 조종 자격증"],
    reviews: [
      {
        rating: 5,
        comment: "T30 최신 모델로 정밀하게 방제해 주셨습니다. 야간 작업도 가능해서 편리했어요.",
        date: "2024-09-15",
        farmName: "이천 사과농장"
      },
      {
        rating: 5,
        comment: "트랙터 작업 실력이 뛰어나세요. 깔끔하게 정지 작업 완료했습니다.",
        date: "2024-08-22",
        farmName: "여주 벼농사"
      }
    ]
  },
  {
    id: 2,
    name: "박영희",
    location: "전남 나주시",
    yearsOfExperience: 8,
    rating: 4.8,
    completedJobs: 156,
    equipment: [
      {
        type: "이양기",
        manufacturer: "동양물산",
        model: "PF80",
        year: 2022,
        specs: ["8조 이양", "자동 직진", "모판 자동 공급"]
      },
      {
        type: "트랙터",
        manufacturer: "LS Mtron",
        model: "XR50",
        year: 2020,
        specs: ["50마력", "4기통", "4WD"]
      }
    ],
    specialties: ["이앙 작업", "논 정지"],
    serviceArea: ["전남 나주", "영암", "무안"],
    certifications: ["농기계운전기능사"],
    reviews: [
      {
        rating: 5,
        comment: "8조 이양기로 빠르고 정확하게 작업해주셨습니다. 내년에도 꼭 부탁드리겠습니다.",
        date: "2024-05-18",
        farmName: "나주 황토쌀"
      }
    ]
  },
  {
    id: 3,
    name: "이동욱",
    location: "경북 상주시",
    yearsOfExperience: 15,
    rating: 4.9,
    completedJobs: 412,
    equipment: [
      {
        type: "콤바인",
        manufacturer: "동양물산",
        model: "TCH-480",
        year: 2021,
        specs: ["4조 수확", "140마력", "2.4톤 탱크"]
      },
      {
        type: "무인방제기",
        manufacturer: "DJI",
        model: "Agras T40",
        year: 2024,
        specs: ["40L 탱크", "16L/min 살포량", "최신형"]
      }
    ],
    specialties: ["벼 수확", "무인 방제"],
    serviceArea: ["경북 상주", "문경", "예천"],
    certifications: ["농기계정비기능사", "농기계운전기능사", "드론 조종 자격증"],
    reviews: []
  },
  {
    id: 4,
    name: "최민지",
    location: "충남 논산시",
    yearsOfExperience: 6,
    rating: 4.7,
    completedJobs: 98,
    equipment: [
      {
        type: "트랙터",
        manufacturer: "대동",
        model: "CK30",
        year: 2023,
        specs: ["30마력", "소형 농가용", "연료 효율적"]
      }
    ],
    specialties: ["소규모 경운 작업", "밭 정리"],
    serviceArea: ["충남 논산", "부여", "계룡"],
    certifications: ["농기계운전기능사"],
    reviews: []
  }
];

// 작업 공고 목업 데이터
export const mockJobPostings: JobPosting[] = [
  {
    id: 1,
    farmName: "이천 황금농장",
    location: "경기 이천시 신둔면",
    jobType: "무인 방제 작업",
    requiredEquipment: "무인항공방제기 (드론)",
    area: "3.5ha (10,500평)",
    preferredModel: "DJI Agras T30 이상",
    schedule: "2024년 11월 5일 - 11월 7일",
    budget: "80만원",
    description: "사과 농장 가을철 병충해 방제 작업입니다. T30 이상 모델로 정밀 방제 가능하신 분 선호합니다. 야간 작업 가능 시 우대합니다.",
    proposals: 7,
    status: "모집중"
  },
  {
    id: 2,
    farmName: "나주 황토쌀 영농조합",
    location: "전남 나주시 산포면",
    jobType: "이앙 작업",
    requiredEquipment: "이양기 (6조 이상)",
    area: "5ha (15,000평)",
    schedule: "2025년 5월 20일 - 5월 25일",
    budget: "120만원",
    description: "벼 이앙 작업입니다. 8조 이양기 보유하신 분 우대합니다. 경험 많으신 분 선호합니다.",
    proposals: 12,
    status: "예정"
  },
  {
    id: 3,
    farmName: "상주 감곶농장",
    location: "경북 상주시 모서면",
    jobType: "벼 수확 작업",
    requiredEquipment: "콤바인 (4조)",
    area: "8ha (24,000평)",
    schedule: "2024년 10월 15일 - 10월 20일",
    budget: "200만원",
    description: "벼 수확 작업입니다. 4조 콤바인으로 빠르게 작업 가능하신 분 구합니다. 날씨에 따라 일정 조율 가능합니다.",
    proposals: 5,
    status: "모집중"
  },
  {
    id: 4,
    farmName: "논산 딸기농장",
    location: "충남 논산시 연무읍",
    jobType: "경운/정지 작업",
    requiredEquipment: "트랙터 (30마력 이상)",
    area: "2ha (6,000평)",
    schedule: "2024년 11월 1일",
    budget: "40만원",
    description: "딸기 하우스 주변 밭 경운 및 정지 작업입니다. 소형 트랙터로 작업 가능합니다.",
    proposals: 8,
    status: "모집중"
  },
  {
    id: 5,
    farmName: "여주 참살이농장",
    location: "경기 여주시 능서면",
    jobType: "무인 방제 작업",
    requiredEquipment: "무인항공방제기",
    area: "4ha (12,000평)",
    schedule: "2024년 11월 10일 - 11월 12일",
    budget: "95만원",
    description: "콩밭 방제 작업입니다. 드론 방제 경험 많으신 분 우대합니다.",
    proposals: 4,
    status: "모집중"
  }
];

// 실제 국내 농기계 카테고리
export const equipmentCategories = [
  {
    name: "트랙터",
    icon: "Tractor",
    description: "경운, 정지, 운반 등 다목적 작업",
    examples: [
      { manufacturer: "동양물산 TYM", model: "T2540", power: "55마력" },
      { manufacturer: "LS Mtron", model: "XR50", power: "50마력" },
      { manufacturer: "대동", model: "CK30", power: "30마력" }
    ]
  },
  {
    name: "무인방제기",
    icon: "Drone",
    description: "농약, 비료 살포 작업",
    examples: [
      { manufacturer: "DJI", model: "Agras T40", capacity: "40L 탱크" },
      { manufacturer: "DJI", model: "Agras T30", capacity: "30L 탱크" },
      { manufacturer: "한국야마하", model: "YMR-08", capacity: "8L 탱크" }
    ]
  },
  {
    name: "이양기",
    icon: "Sprout",
    description: "벼 모내기 작업",
    examples: [
      { manufacturer: "동양물산", model: "PF80", rows: "8조" },
      { manufacturer: "대동", model: "SUPER-80", rows: "8조" },
      { manufacturer: "동양물산", model: "PF60", rows: "6조" }
    ]
  },
  {
    name: "콤바인",
    icon: "Wheat",
    description: "벼, 보리 등 수확 작업",
    examples: [
      { manufacturer: "동양물산", model: "TCH-480", rows: "4조" },
      { manufacturer: "대동", model: "DSC-380", rows: "3조" },
      { manufacturer: "동양물산", model: "TCH-280", rows: "2조" }
    ]
  }
];


