# Changelog

All notable changes to the Danngam Website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2025-10-23

### Major Changes

- **Complete Platform Content Rewrite**: All remaining pages fully refactored from labor matching to agricultural equipment expert platform
- **Terminology Consistency**: Complete elimination of "인력 구하기" (finding labor) → "전문가 구하기" (finding experts) throughout entire website
- **Professional Tone**: Removed all casual/labor-focused language, replaced with professional equipment-focused terminology

### Changed

#### About Page (`/about`)
- **Mission Statement**: Updated to focus on agricultural equipment transparency and trust issues
- **Problems We Solve**: 
  - "농부의 인력난" → "농가의 전문가 확보 어려움" (finding equipment operators with proper machinery)
  - "작업자의 일자리 불안정" → "운용자의 전문성 입증 어려움" (proving expertise with professional equipment)
- **Solutions**: 
  - Equipment information transparency (manufacturer, model, year fully disclosed)
  - Reputation system with verified work history
  - Data-based ecosystem for manufacturers, institutions, and research
- **Core Values**:
  - Transparency → Data Integrity → Recognition → Ecosystem Growth
- **Vision**: 
  - Phase 1: Data platform establishment
  - Phase 2: Ecosystem expansion (manufacturers, institutions)
  - Phase 3: Essential smart agriculture infrastructure

#### How It Works Page (`/how-it-works`)
- **Hero**: Updated to emphasize agricultural equipment experts and farm owners
- **Farm Owners Guide**: "인력 구하기" → "전문가 구하기"
  - Step 1: Post job with required equipment types (tractors, transplanters, drones)
  - Step 2: Review operators' equipment (manufacturer, model, year), work history, ratings
  - Step 3: Confirm work and mutual evaluation for data accumulation
- **Operators Guide**: "일자리 찾기" → "작업 기회 찾기"
  - Step 1: Register owned equipment (e.g., 동양물산 TYM T2540, 2020)
  - Step 2: Browse jobs and submit proposals with equipment details
  - Step 3: Build verified reputation through completed work
- **Core Values**: 
  - Transparent equipment information
  - Reputation-based trust
  - Data value creation for entire industry

#### FAQ Page (`/faq`)
- **Complete Content Overhaul**: All 26 questions rewritten for equipment-focused platform
- **Category Restructure**: 6 categories redesigned
  - General (5 questions): Platform identity, differentiation, equipment types, registration, pricing
  - For Farm Owners (5 questions): Job posting, equipment verification, operator selection, evaluation, pricing
  - For Operators (5 questions): Equipment registration, job search, proposals, reputation building, multiple equipment
  - Data & Trust (5 questions): Work history recording, data utilization, rating fairness, false info penalties, privacy
  - Supporting Institutions (3 questions): NH/local government usage, manufacturer data, research data
  - Other (3 questions): Brand meaning, feedback, future features
- **Hero**: Updated to "농기계 전문가 매칭 플랫폼 단감"
- **CTA**: Enhanced with equipment-focused messaging

#### README.md
- **Project Description**: Detailed explanation of data-based trust platform
- **Core Value**: Added 4-pillar problem statement (farm owners, operators, manufacturers, institutions)
- **Key Features**: Expanded with specific equipment examples (TYM, LS Mtron, DJI)
- **Platform Workflow**: Detailed 3-way process (farm owners, operators, institutions)
- **Equipment Examples**: Specific models throughout documentation

### Technical

- **Next.js Configuration**: Added webpack watchOptions to mitigate EMFILE errors on macOS
  - Ignored directories: node_modules, .git, .next
  - Reduced file watcher load
- **Error Handling**: Added `app/error.tsx` and `app/not-found.tsx` for graceful error boundaries

### Fixed

- **Development Server**: Resolved EMFILE (too many open files) error through process cleanup and cache clearing
- **TypeScript Errors**: Fixed all missing React imports in new component files
- **Icon Imports**: Corrected all Lucide React icon imports across refactored pages

### Documentation

- **README.md**: Comprehensive update with platform identity, workflow diagrams, and equipment examples
- **CHANGELOG.md**: This detailed changelog for v3.0.0

---

## [2.0.0] - 2025-10-22

### Major Changes

- **Platform Identity Shift**: Transitioned from simple labor matching to agricultural equipment-focused professional platform
- **Terminology Update**: Changed "workers" to "operators", "farmers" to "farm owners" throughout the platform
- **Complete Emoji Removal**: Replaced all emojis with professional Lucide React icons

### Added

#### New Pages

- **For Operators Page** (`/for-operators`): Comprehensive page for agricultural equipment operators
  - Target equipment section (tractors, transplanters, drones, combines)
  - Real equipment examples with actual Korean manufacturers (TYM, LS Mtron, DJI, Daedong)
  - Operator profile features and workflow
  - Equipment registration and management emphasis

- **For Institutions Page** (`/for-institutions`): Dedicated page for agricultural cooperatives and local governments
  - Administrative efficiency solutions
  - Transparent data management for subsidy programs
  - Real-time monitoring dashboards
  - Policy support features
  - Contact form for institutional inquiries

#### New Components

- **EquipmentCard** (`/components/EquipmentCard.tsx`): Display detailed equipment information
- **OperatorProfile** (`/components/OperatorProfile.tsx`): Show operator credentials and equipment
- **StatisticsCard** (`/components/StatisticsCard.tsx`): Display statistics for institutions page

#### New Data

- **Mock Equipment Data** (`/data/mockEquipmentData.ts`): Realistic Korean agricultural equipment data
  - Operators with actual equipment (TYM T2540, DJI Agras T30, etc.)
  - Job postings with equipment requirements
  - Equipment categories with real manufacturer examples

- **Terminology Constants** (`/constants/terminology.ts`): Centralized terminology for consistency

### Changed

#### Homepage Refactoring

- Hero section: Emphasizes agricultural equipment and expertise
- Problem statement: Focuses on equipment transparency and operator professionalism
- Statistics: "Registered Users" → "Registered Equipment" (247+), "Satisfaction" → "Average Rating" (4.8/5.0)
- Solutions: Equipment info transparency, reputation system, real-time availability, data-based trust
- How it works: 5-step process for both farm owners and operators with equipment focus
- Features: Equipment management, work history tracking, reputation system, data dashboard

#### For Farmers Page

- Complete content overhaul focusing on equipment-based services
- Pain points: Equipment acquisition costs, operator quality verification, transparent pricing
- Benefits: Equipment info transparency, verified operators, quality assurance
- Job types section: Plowing, transplanting, drone spraying, harvesting, transportation
- Use cases: Real scenarios with specific equipment models

#### Features Page

- All 11 features updated to equipment-centric focus
- Equipment registration and management as core feature
- Reputation system for operators
- Automated work history recording
- Data dashboard for equipment utilization
- Technical excellence icons updated (removed emojis)

#### Navigation & Footer

- Menu updated: "작업자" → "운용자", added "지원기관"
- Footer tagline: Emphasizes equipment expertise and data-driven trust
- Links updated to new page structure

### Removed

- All emojis from entire codebase (🗺️, 🤝, ⏰, 🔔, 📊, 🛡️, 💰, 🚗, etc.)
- Simple labor-focused content
- Generic "worker" terminology

### Technical

- Redirect implemented: `/for-workers` → `/for-operators` (301 permanent)
- All TypeScript types updated for new data structures
- Lucide React icon imports expanded

### Documentation

- Comprehensive refactoring plan created (`REFACTORING_PLAN.md`)
- Updated PROJECT_SUMMARY to reflect new platform identity

---

## [0.1.0] - 2025-01-19

### Added

#### Core Website Structure

- **11 Complete Pages**: Homepage, About, How It Works, For Farmers, For Workers, Features, Safety, FAQ, Contact, Terms, Privacy
- **Responsive Design**: Full mobile, tablet, and desktop support
- **Modern UI Framework**: Next.js 14 with TypeScript and Tailwind CSS

#### Design System

- **Advanced Color System**: Primary and Secondary colors with 9-level shades (50-900)
- **Typography Scale**: 5 display font sizes with optimized line-height and letter-spacing
- **Shadow System**: Soft, medium, large shadow variants for depth
- **Animation System**: Fade-in, slide-up, scale-in, and blob animations
- **Component Library**: Reusable Button, Card, Section, Navigation, and Footer components

#### Key Features

- **Fixed Navigation**: Glass-effect navigation with scroll detection
- **Gradient Backgrounds**: Modern gradient designs throughout
- **Interactive Components**: Hover effects, transitions, and animations
- **Accessibility**: WCAG 2.1 AA compliant design
- **SEO Optimized**: Proper meta tags and semantic HTML

#### Content

- **Comprehensive Information**: All platform features, benefits, and use cases explained
- **User-Focused Content**: Separate sections for farmers and workers
- **25 FAQ Items**: Covering all common questions across 6 categories
- **Safety Documentation**: Privacy policy, terms of service, and safety guidelines

#### Technical Excellence

- **TypeScript**: Full type safety across the codebase
- **Performance**: Optimized loading and rendering
- **Clean Code**: ESLint configured, zero linter errors
- **Version Control Ready**: Proper .gitignore and project structure

### Technical Details

**Dependencies**:

- Next.js 14.2.33
- React 18
- TypeScript 5
- Tailwind CSS 3.4.1
- Lucide React (icons)

**Build**:

- Production-ready build configuration
- Optimized for Vercel deployment
- Fast refresh for development

### Project Organization

- Documentation moved to `/reference` folder
- Clean root directory
- Proper README with setup instructions

---

## Future Releases

### [0.2.0] - Planned

- Blog section
- Multi-language support (English)
- Enhanced animations
- User testimonials section
- Newsletter subscription

### [1.0.0] - Planned

- Full content review and polish
- Professional photography
- Video content integration
- Performance optimization
- Analytics integration
