# 단감 웹사이트 (Danngam Website)

> 농기계 전문가와 농가를 연결하는 데이터 기반 신뢰 플랫폼

[![Version](https://img.shields.io/badge/version-3.0.0-brightgreen.svg)](https://github.com/your-repo/danngam_web)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 📖 프로젝트 소개

단감(Danngam)은 농기계 전문가와 농가를 투명하게 연결하는 스마트 농업 플랫폼입니다. 단순한 인력 매칭이 아닌, **전문 농기계 장비 정보의 완전한 공개**와 **자동 기록되는 작업 이력**을 통해 신뢰할 수 있는 매칭을 제공합니다.

### 🎯 핵심 가치

**단감은 4가지 핵심 문제를 해결합니다:**

1. **농가**: 적절한 농기계를 보유한 숙련된 운용자를 찾기 어려움
2. **운용자**: 고가 전문 장비와 경험을 효과적으로 알릴 채널 부족
3. **제조사**: 농기계 사용 패턴과 수요에 대한 신뢰할 수 있는 데이터 부재
4. **지원기관**: 농기계 지원금 집행의 투명성 확보 어려움

### ✨ 주요 특징

- **🚜 장비 정보 투명 공개**: 제조사, 모델명, 연식까지 완전 공개
  - 예: 동양물산 TYM T2540, LS Mtron XP50, DJI Agras T30
- **⭐ 평판 시스템**: 작업 완료 후 상호 평가로 신뢰 구축
- **📊 자동 이력 기록**: 모든 작업은 조작 불가능하게 자동 기록
- **🔐 데이터 기반 신뢰**: 제조사·지원기관·연구소 활용 가능한 데이터 생성
- **🌾 전문성 강조**: 농기계 운용 전문가와 농가 중심 플랫폼
- **📱 완전 반응형**: 모바일, 태블릿, 데스크톱 완벽 지원
- **🎨 전문 디자인**: 이모지 제거, Lucide React 아이콘, 신뢰감 있는 UI
- **⚡ 타입 안전성**: TypeScript 100% 적용

### 🔄 플랫폼 작동 방식

#### 농가 (Farm Owners)
1. 필요한 농기계 종류 명시하여 작업 공고 등록
2. 제안을 보낸 운용자의 장비·이력·평점 검토
3. 적합한 운용자 선택 후 작업 협의
4. 작업 완료 후 상호 평가로 데이터 축적

#### 운용자 (Equipment Operators)
1. 보유 농기계 정보 투명하게 등록
2. 적합한 작업 공고 탐색 및 제안서 제출
3. 선정 시 작업 수행
4. 평판 누적으로 전문성 입증 및 작업 기회 확대

#### 지원기관 (Supporting Organizations)
- 농기계 지원금 신청~정산의 행정 소요 감소
- 투명한 데이터 기반 정책 집행
- 실시간 작업 현황 모니터링

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/your-repo/danngam_web.git

# 디렉토리 이동
cd danngam_web

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📄 페이지 구조 (12개 페이지)

| 경로                 | 설명                               |
| -------------------- | ---------------------------------- |
| `/`                  | 홈페이지 (농기계 전문 플랫폼 강조) |
| `/about`             | 플랫폼 소개                        |
| `/how-it-works`      | 작동 방식                          |
| `/for-farmers`       | 농가를 위한 단감                   |
| `/for-operators`     | 농기계 운용자를 위한 단감 (신규)   |
| `/for-institutions`  | 지원기관을 위한 단감 (신규)        |
| `/features`          | 기능 소개 (장비 관리, 평판 시스템) |
| `/safety`            | 안전 및 개인정보보호               |
| `/faq`               | 자주 묻는 질문                     |
| `/contact`           | 문의하기                           |
| `/terms`             | 이용약관                           |
| `/privacy`           | 개인정보처리방침                   |
| `/for-workers`       | → `/for-operators` 리다이렉트      |

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary (Green)**: #95A543 - 농업, 자연, 성장
- **Secondary (Orange)**: #EC6737 - 단감 색상, 액센트
- **Background**: #FFF8E9 - 따뜻한 크림색
- **Text**: #1a1a1a / #4a5568 / #718096 - 계층적 텍스트

### 타이포그래피

- **Display Sizes**: 2xl, xl, lg, md, sm
- **최적화된 Line Height & Letter Spacing**
- **반응형 폰트 크기**

### 컴포넌트

- **Button**: 4가지 variant (primary, secondary, outline, ghost)
- **Card**: 호버 효과와 그림자
- **Section**: 4가지 배경 옵션
- **Navigation**: Fixed, Glass effect
- **Footer**: 다크 그라데이션

## 🛠 기술 스택

### Frontend

- **Framework**: Next.js 14.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

### Development

- **Linting**: ESLint
- **Type Checking**: TypeScript Compiler
- **Package Manager**: npm

### Deployment

- **Platform**: Vercel (권장)
- **Build**: Static Export 지원
- **CDN**: Edge Network

## 📁 프로젝트 구조

```
danngam_web/
├── app/                    # Next.js App Router
│   ├── about/             # About 페이지
│   ├── contact/           # Contact 페이지
│   ├── faq/               # FAQ 페이지
│   ├── features/          # Features 페이지
│   ├── for-farmers/       # For Farmers 페이지
│   ├── for-workers/       # For Workers 페이지
│   ├── how-it-works/      # How It Works 페이지
│   ├── privacy/           # Privacy 페이지
│   ├── safety/            # Safety 페이지
│   ├── terms/             # Terms 페이지
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 컴포넌트
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Section.tsx
├── public/                # 정적 파일
├── reference/             # 프로젝트 문서
├── .gitignore
├── CHANGELOG.md
├── README.md
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린팅
npm run lint

# 타입 체크
npx tsc --noEmit
```

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

- 이메일: support@danngam.com
- 웹사이트: https://danngam.com (예정)

## 🎯 로드맵

### v3.0.0 (현재) ✅

- ✅ 12개 페이지 완성 (운용자, 지원기관 페이지 추가)
- ✅ 완전한 농기계 전문가 플랫폼 전환
- ✅ 모든 콘텐츠 리팩토링 완료
- ✅ 전문적 디자인 시스템 (이모지 제거, Lucide 아이콘)
- ✅ 투명한 장비 정보 공개 강조
- ✅ 데이터 기반 신뢰 시스템 구축

### v3.1.0 (계획)

- [ ] 실제 농기계 장비 사진 추가
- [ ] 운용자 인터뷰 콘텐츠
- [ ] 작업 사례 연구 섹션
- [ ] 제조사 파트너 로고

### v4.0.0 (계획)

- [ ] 블로그 섹션 (농기계 운용 팁, 작업 사례)
- [ ] 다국어 지원 (영어)
- [ ] 장비 카탈로그 데이터베이스
- [ ] 실시간 작업 현황 대시보드 프로토타입

### v5.0.0 (장기)

- [ ] 비디오 콘텐츠 (농기계 작업 현장)
- [ ] AI 기반 장비 추천 시스템
- [ ] 제조사·지원기관 API 연동
- [ ] 분석 도구 및 성능 최적화

---

Made with ❤️ by the Danngam Team
