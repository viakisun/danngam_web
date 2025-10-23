import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
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
  TrendingUp,
  Award,
  Globe,
  Wrench,
  Database,
  BarChart3,
  Bell,
  MessageCircle,
  AlertCircle,
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
                장비 정보 투명 공개 · 데이터 기반 신뢰
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
              농기계 전문가와 농가를 연결하는
              <br />
              <span className="gradient-animated">스마트 플랫폼</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-light mb-12 max-w-3xl mx-auto leading-relaxed">
              트랙터, 이양기, 무인항공방제기 - 전문 장비로 효율적인 농작업을
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="xl" className="group pulse-animation">
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
                <span>실제 장비 정보 공개</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>평판 시스템 운영</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>작업 이력 자동 기록</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <Section background="white" title="이런 어려움, 겪고 계신가요?" centered>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 농가의 고민 */}
          <div className="card card-hover group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-6">농가의 고민</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "전문 농기계 작업자를 찾기 어려워요" },
                { icon: Clock, text: "누가 어떤 장비를 가지고 있는지 알 수 없어요" },
                { icon: Shield, text: "장비 성능과 작업 품질이 불확실해요" },
                { icon: TrendingUp, text: "투명한 가격과 작업 이력이 없어요" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-text-light">
                    &quot;{item.text}&quot;
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 운용자의 고민 */}
          <div className="card card-hover group">
            <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-6">운용자의 고민</h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "보유한 농기계를 효율적으로 활용하고 싶어요" },
                { icon: Phone, text: "작업 수주 경로가 제한적이에요" },
                { icon: Award, text: "평판과 전문성을 입증하기 어려워요" },
                { icon: Clock, text: "장비 가동률이 낮아 수익이 불안정해요" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-text-light">
                    &quot;{item.text}&quot;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Statistics Section */}
      <Section background="gray" title="단감의 성과" subtitle="농기계 전문가와 농가가 함께 만들어가는 신뢰의 기록" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <AnimatedSection animation="scale-in" delay={0}>
            <div className="card card-3d text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">
                <Counter end={247} suffix="대+" />
              </h3>
              <p className="text-text-light">등록된 농기계</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={100}>
            <div className="card card-3d text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">
                <Counter end={3891} suffix="+" />
              </h3>
              <p className="text-text-light">완료된 작업</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={200}>
            <div className="card card-3d text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">
                4.8/5.0
              </h3>
              <p className="text-text-light">평균 평점</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300}>
            <div className="card card-3d text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">
                <Counter end={42} />
              </h3>
              <p className="text-text-light">전국 지역</p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Solution Section */}
      <Section
        background="gradient"
        title="단감이 해결해드립니다"
        subtitle="투명성과 신뢰를 기반으로 한 스마트 매칭"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            {
              icon: Shield,
              title: "장비 정보 투명 공개",
              description: "제조사, 모델, 사양까지 상세히",
              color: "primary",
            },
            {
              icon: Award,
              title: "평판 시스템",
              description: "작업 이력과 리뷰로 검증",
              color: "secondary",
            },
            {
              icon: Zap,
              title: "실시간 장비 가용성",
              description: "지금 작업 가능한 장비 확인",
              color: "primary",
            },
            {
              icon: TrendingUp,
              title: "데이터 기반 신뢰",
              description: "모든 작업 내역 자동 기록",
              color: "secondary",
            },
          ].map((item, idx) => (
            <AnimatedSection key={idx} animation="slide-up" delay={idx * 100}>
              <div className="card card-3d text-center">
                <div
                  className={`w-16 h-16 ${item.color === 'primary' ? 'bg-primary-500' : 'bg-secondary-500'} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
                <p className="text-text-light">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="white" title="이렇게 간단합니다" centered>
        <div className="grid md:grid-cols-2 gap-16">
          {/* 농가 */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-8">
              <Users className="w-5 h-5 text-primary-700" />
              <span className="text-sm font-semibold text-primary-700">
                농가
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "작업 공고 등록",
                  desc: "필요한 작업과 장비 정보 입력",
                },
                {
                  step: "2",
                  title: "운용자 제안 확인",
                  desc: "보유 장비와 평판 검토",
                },
                {
                  step: "3",
                  title: "장비 및 이력 확인",
                  desc: "사양, 작업 이력, 리뷰 확인",
                },
                { step: "4", title: "운용자 선택", desc: "직접 연락 후 작업 진행" },
                { step: "5", title: "작업 완료 후 평가", desc: "평점과 리뷰 남기기" },
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

          {/* 운용자 */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 rounded-full mb-8">
              <MapPin className="w-5 h-5 text-secondary-700" />
              <span className="text-sm font-semibold text-secondary-700">
                운용자
              </span>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "보유 장비 등록",
                  desc: "제조사, 모델, 사양, 사진 등록",
                },
                {
                  step: "2",
                  title: "작업 공고 탐색",
                  desc: "지역과 작업 종류로 필터",
                },
                {
                  step: "3",
                  title: "작업 제안",
                  desc: "가격과 일정 제시",
                },
                { step: "4", title: "농가 승인 대기", desc: "농가의 선택 기다리기" },
                { step: "5", title: "작업 및 평가", desc: "작업 완료 후 평판 축적" },
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
        subtitle="농가와 운용자 모두에게 최적화된 핵심 기능"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Wrench,
              title: "장비 등록 및 관리",
              desc: "제조사, 모델, 사양 상세 등록",
            },
            {
              icon: Database,
              title: "작업 이력 자동 기록",
              desc: "모든 작업 내역 투명하게 관리",
            },
            {
              icon: Award,
              title: "평판 시스템",
              desc: "리뷰와 평점으로 신뢰 구축",
            },
            {
              icon: BarChart3,
              title: "데이터 대시보드",
              desc: "장비 가동률과 수익 시각화",
            },
            {
              icon: MapPin,
              title: "위치 기반 매칭",
              desc: "근처 작업 공고 실시간 확인",
            },
            { icon: Shield, title: "안전 검증 시스템", desc: "장비 인증 및 보험 확인" },
          ].map((feature, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
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
            농기계 전문가와 농가를 위한 스마트 플랫폼, 단감이 함께합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-farmers">
              <Button size="lg" className="group">
                농가로 시작하기
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/for-operators">
              <Button size="lg" variant="secondary" className="group">
                운용자로 시작하기
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
