import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import {
  Phone,
  Clock,
  MapPin,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-background to-secondary-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-soft">
              <Sparkles className="w-4 h-4 text-secondary-500" />
              <span className="text-sm font-medium text-text">
                100% 무료 · 중개 수수료 없음
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
              농업 일손,
              <br />
              <span className="gradient-text">이제 간단하게</span> 연결하세요
            </h1>

            <p className="text-xl md:text-2xl text-text-light mb-12 max-w-3xl mx-auto leading-relaxed">
              농부와 작업자를 직접 이어주는 가장 간단하고 안전한 무료 매칭
              플랫폼
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="xl" className="group">
                App Store에서 다운로드
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline">
                Google Play에서 다운로드
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>안전한 개인정보 보호</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>3분 내 작업 등록</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>위치 기반 실시간 매칭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <Section background="white" title="이런 어려움, 겪고 계신가요?" centered>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 농부의 고민 */}
          <div className="card card-hover group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-6">농부의 고민</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "일손 구하기가 너무 어려워요" },
                { icon: Clock, text: "수확 시즌인데 인력을 못 구하면 어쩌죠?" },
                { icon: "💰", text: "중개 수수료가 부담스러워요" },
                { icon: Shield, text: "개인정보 유출이 걱정돼요" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {typeof item.icon === "string" ? (
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  ) : (
                    <item.icon className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  )}
                  <span className="text-lg text-text-light">
                    &quot;{item.text}&quot;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 작업자의 고민 */}
          <div className="card card-hover group">
            <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-6">작업자의 고민</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "가까운 일자리 정보를 찾기 어려워요" },
                { icon: Phone, text: "농부님 연락처를 어떻게 알 수 있을까요?" },
                { icon: Clock, text: "불안정한 수입 때문에 고민이에요" },
                { icon: "🚗", text: "먼 거리 이동은 힘들어요" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {typeof item.icon === "string" ? (
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  ) : (
                    <item.icon className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  )}
                  <span className="text-lg text-text-light">
                    &quot;{item.text}&quot;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section
        background="gradient"
        title="단감이 해결해드립니다"
        subtitle="간단하고 안전한 농업 인력 매칭"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              icon: Zap,
              title: "3분 만에 작업 등록",
              description: "복잡한 절차 없이 빠르게 인력 구인",
              color: "primary",
            },
            {
              icon: MapPin,
              title: "위치 기반 실시간 매칭",
              description: "지도에서 근처 작업을 바로 확인",
              color: "secondary",
            },
            {
              icon: Shield,
              title: "안전한 연락처 교환",
              description: "상호 동의 후에만 번호 공개",
              color: "primary",
            },
            {
              icon: Sparkles,
              title: "100% 무료",
              description: "중개 수수료 없음",
              color: "secondary",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div
                className={`w-16 h-16 bg-gradient-${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <p className="text-text-light">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="white" title="이렇게 간단합니다" centered>
        <div className="grid md:grid-cols-2 gap-16">
          {/* 농부 */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-8">
              <Users className="w-5 h-5 text-primary-700" />
              <span className="text-sm font-semibold text-primary-700">
                농부
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "작업 등록",
                  desc: "필요한 인력 정보 입력 (3분)",
                },
                {
                  step: "2",
                  title: "작업자 요청 확인",
                  desc: "관심있는 작업자 목록 확인",
                },
                {
                  step: "3",
                  title: "작업자 선택",
                  desc: "마음에 드는 작업자 선택",
                },
                { step: "4", title: "직접 통화", desc: "전화로 세부사항 협의" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-primary">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 작업자 */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 rounded-full mb-8">
              <MapPin className="w-5 h-5 text-secondary-700" />
              <span className="text-sm font-semibold text-secondary-700">
                작업자
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "근처 작업 탐색",
                  desc: "지도에서 가까운 일자리 확인",
                },
                {
                  step: "2",
                  title: "관심 표시",
                  desc: "원하는 작업에 연락 요청",
                },
                {
                  step: "3",
                  title: "농부 수락 대기",
                  desc: "농부의 연락 기다리기",
                },
                { step: "4", title: "직접 통화", desc: "농부와 일정 조율" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-secondary">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Features Showcase */}
      <Section
        background="gray"
        title="주요 기능"
        subtitle="농부와 작업자 모두에게 최적화된 핵심 기능"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              emoji: "🗺️",
              title: "지도 기반 탐색",
              desc: "작업 위치를 한눈에",
            },
            {
              emoji: "🤝",
              title: "동의 기반 연락처 교환",
              desc: "안전하게 정보 공유",
            },
            {
              emoji: "⏰",
              title: "전화 가능 시간 공유",
              desc: "불필요한 연락 방지",
            },
            {
              emoji: "🔔",
              title: "푸시 알림",
              desc: "중요한 순간 놓치지 않기",
            },
            {
              emoji: "📊",
              title: "연락 요청 현황",
              desc: "진행 상태 한눈에 확인",
            },
            { emoji: "🛡️", title: "신고 시스템", desc: "안전한 플랫폼 환경" },
          ].map((feature, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-text-light">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/features">
            <Button size="lg" variant="outline" className="group">
              더 많은 기능 알아보기
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Free Service Highlight */}
      <Section background="white">
        <div className="card bg-primary-500 text-white text-center max-w-4xl mx-auto">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">영원히 무료입니다</h2>
          <p className="text-xl mb-8 text-white opacity-80">
            단감은 농업 공동체를 위한 플랫폼입니다
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "가입비 없음",
              "중개 수수료 없음",
              "숨겨진 비용 없음",
              "모든 기능 무료",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            지금 바로 단감을 경험해보세요
          </h2>
          <p className="text-xl text-text-light mb-10">
            농업 인력난 해소와 안정적인 일자리 확보, 단감이 함께합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-farmers">
              <Button size="lg" className="group">
                농부로 시작하기
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/for-workers">
              <Button size="lg" variant="secondary" className="group">
                작업자로 시작하기
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
