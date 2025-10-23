import Section from "@/components/Section";
import {
  Phone,
  MapPin,
  Shield,
  Clock,
  Bell,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  Users,
  Wrench,
  Database,
  Award,
  BarChart3,
  FileCheck,
  Zap,
  Smartphone,
  Lock,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Wrench,
      title: "장비 등록 및 관리",
      description:
        "보유 농기계 상세 정보 등록 (제조사, 모델, 연식, 사양, 사진, 인증서). 여러 대의 장비를 한 번에 관리할 수 있습니다.",
      color: "primary",
      badge: "핵심",
    },
    {
      icon: Award,
      title: "평판 시스템",
      description:
        "5점 만점 평가, 작업 이력 기반 신뢰도 점수. 리뷰와 평점으로 운용자의 전문성을 입증하고, 농가는 검증된 운용자를 선택할 수 있습니다.",
      color: "secondary",
      badge: "신뢰",
    },
    {
      icon: Database,
      title: "작업 이력 자동 기록",
      description:
        "GPS 위치, 작업 시간, 면적, 사진 등 모든 작업 내역이 자동으로 저장됩니다. 투명한 이력 관리로 신뢰를 구축합니다.",
      color: "primary",
      badge: "투명성",
    },
    {
      icon: BarChart3,
      title: "데이터 대시보드",
      description:
        "장비 가동률, 수익, 작업 통계를 시각화하여 제공합니다. 운용자는 경영 현황을 한눈에 파악하고, 농가는 작업 내역을 확인할 수 있습니다.",
      color: "secondary",
      badge: "분석",
    },
    {
      icon: Shield,
      title: "장비 인증 시스템",
      description:
        "농기계 등록증, 보험 가입 증명서를 확인하여 안전한 작업 환경을 보장합니다. 검증된 장비만 플랫폼에 등록됩니다.",
      color: "primary",
      badge: "안전",
    },
    {
      icon: MapPin,
      title: "위치 기반 실시간 매칭",
      description:
        "농가는 근처의 농기계 운용자를 찾고, 운용자는 가까운 작업 공고를 확인할 수 있습니다. 지역별 필터링으로 효율적인 매칭이 가능합니다.",
      color: "secondary",
      badge: "편의",
    },
    {
      icon: CheckCircle,
      title: "농가: 선택적 제안 수락",
      description:
        "여러 운용자의 제안을 비교하고, 장비 정보와 평판을 확인한 후 마음에 드는 운용자를 선택할 수 있습니다. 선택권은 농가에게 있습니다.",
      color: "primary",
      badge: "제어",
    },
    {
      icon: MessageCircle,
      title: "운용자: 작업 제안 메시지",
      description:
        "작업 공고에 제안할 때 보유 장비와 강점을 어필할 수 있는 메시지를 함께 보낼 수 있습니다. 자격증, 경험 등을 효과적으로 전달하세요.",
      color: "secondary",
      badge: "소통",
    },
    {
      icon: FileCheck,
      title: "작업 전후 사진 및 보고서",
      description:
        "작업 시작 전과 완료 후 사진을 촬영하여 품질을 증명합니다. 농가는 작업 결과를 명확히 확인하고, 운용자는 실력을 입증할 수 있습니다.",
      color: "primary",
      badge: "품질",
    },
    {
      icon: TrendingUp,
      title: "내 제안 현황 추적",
      description:
        "운용자는 보낸 제안의 상태(검토중, 수락됨, 거절됨)를 실시간으로 확인하고 관리할 수 있습니다. 효율적인 작업 수주 관리가 가능합니다.",
      color: "secondary",
      badge: "관리",
    },
    {
      icon: Bell,
      title: "실시간 푸시 알림",
      description:
        "새로운 작업 공고, 제안 수락, 평가 등록 등 중요한 알림을 실시간으로 받아볼 수 있습니다. 놓치지 않고 빠르게 대응하세요.",
      color: "primary",
      badge: "필수",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            <span className="gradient-text">단감의 핵심 기능</span>
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            농가와 농기계 운용자 모두에게 최적화된 11가지 주요 기능을 소개합니다
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="card card-hover group">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`badge badge-${feature.color}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Excellence */}
      <Section
        background="gray"
        title="기술적 우수성"
        subtitle="빠르고 안정적인 서비스를 위한 기술적 특징"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">빠른 성능</h3>
            <ul className="text-text-light space-y-2">
              <li>앱 초기 로딩 &lt; 3초</li>
              <li>쿼리 응답 &lt; 1초</li>
              <li>지도 렌더링 60 FPS</li>
            </ul>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">오프라인 지원</h3>
            <ul className="text-text-light space-y-2">
              <li>캐시된 데이터 조회 가능</li>
              <li>네트워크 복구 시 자동 동기화</li>
              <li>안정적인 사용 경험</li>
            </ul>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">보안</h3>
            <ul className="text-text-light space-y-2">
              <li>Firebase 인증</li>
              <li>Firestore Security Rules</li>
              <li>Rate Limiting (하루 20건)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Feature Categories */}
      <Section background="white" title="기능별 분류" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              농가를 위한 기능
            </h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>작업 공고 등록 및 관리</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>운용자 제안 비교 및 선택</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>장비 정보 및 평판 확인</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>작업 완료 내역 및 평가</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              운용자를 위한 기능
            </h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>보유 장비 등록 및 관리</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>작업 공고 탐색 및 제안</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>작업 이력 및 평판 관리</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>수익 대시보드 및 통계</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            모든 기능을 무료로 이용하세요
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            단감은 영원히 무료입니다. 중개 수수료 없이 모든 기능을 이용하세요.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              "가입비 없음",
              "수수료 없음",
              "숨겨진 비용 없음",
              "모든 기능 무료",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
