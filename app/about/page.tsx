import Section from "@/components/Section";
import {
  Target,
  Wrench,
  Shield,
  Database,
  Award,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-soft">
            <Wrench className="w-4 h-4 text-secondary-500" />
            <span className="text-sm font-medium text-text">
              농기계 산업을 위한 플랫폼
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            단감은 <span className="gradient-text">어떤 플랫폼</span>인가요?
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            농기계 전문가와 농가를 투명하게 연결하고, 데이터 기반 신뢰를 구축하는 스마트 농업 플랫폼입니다
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section background="white" title="우리의 미션" centered>
        <div className="card max-w-4xl mx-auto">
          <Target className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <p className="text-xl text-text-light leading-relaxed text-center">
            단감은{" "}
            <span className="font-semibold text-text">
              농기계 작업의 투명성과 신뢰 문제
            </span>
            를 해결하고, 전문 장비를 보유한 운용자들이{" "}
            <span className="font-semibold text-text">안정적으로 작업을 수주</span>하고
            전문성을 입증할 수 있도록 돕는 데이터 플랫폼입니다. 우리는{" "}
            <span className="font-semibold text-text">
              장비 정보의 완전한 공개
            </span>
            와{" "}
            <span className="font-semibold text-text">
              작업 이력의 자동 기록
            </span>
            을 통해, 농가·운용자·제조사·지원기관 모두에게 신뢰할 수 있는 데이터를 제공하여
            농기계 산업의 디지털 전환을 선도합니다.
          </p>
        </div>
      </Section>

      {/* Problems We Solve */}
      <Section background="gray" title="우리가 해결하는 문제" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card">
            <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">농가의 전문가 확보 어려움</h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <span className="text-primary-500 font-bold mt-1">•</span>
                <span>
                  전문 농기계 작업이 필요한 시기에, 적절한 장비를 보유한 숙련된 운용자를 찾기가 쉽지 않음
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 font-bold mt-1">•</span>
                <span>운용자가 보유한 장비의 종류, 상태, 스펙을 사전에 확인할 방법이 없어 작업 품질을 예측하기 어려움</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 font-bold mt-1">•</span>
                <span>운용자의 실제 작업 경험과 평판을 객관적으로 검증할 수 있는 체계 부재</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="w-14 h-14 bg-secondary-500 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              운용자의 전문성 입증 어려움
            </h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <span className="text-secondary-500 font-bold mt-1">•</span>
                <span>
                  고가의 전문 장비를 보유하고 숙련된 기술이 있어도, 이를 잠재 고객에게 효과적으로 알릴 채널이 없음
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-500 font-bold mt-1">•</span>
                <span>오랜 기간 쌓아온 작업 경험과 평판을 체계적으로 기록하고 증명할 수단 부족</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-500 font-bold mt-1">•</span>
                <span>인근 지역을 넘어 더 넓은 범위에서 작업 기회를 발굴하기 어려움</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section
        background="white"
        title="단감의 솔루션"
        subtitle="투명한 장비 정보와 데이터 기반 신뢰로 농기계 산업의 문제를 해결합니다"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Wrench,
              title: "장비 정보 완전 공개",
              description:
                "운용자는 보유한 농기계의 제조사, 모델, 연식을 등록하고, 농가는 필요한 전문 장비를 정확히 찾을 수 있습니다",
            },
            {
              icon: Award,
              title: "평판 시스템 운영",
              description:
                "모든 작업은 자동으로 이력에 기록되며, 상호 평가를 통해 신뢰할 수 있는 평판이 누적됩니다",
            },
            {
              icon: Database,
              title: "데이터 기반 생태계",
              description:
                "제조사·지원기관·연구소까지 활용 가능한 신뢰성 높은 농기계 작업 데이터를 구축합니다",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <p className="text-text-light">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Values */}
      <Section background="gradient" title="우리의 핵심 가치" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Shield,
              title: "투명성",
              subtitle: "Transparency",
              description:
                "모든 장비 정보와 작업 이력은 투명하게 공개되며, 누구나 검증 가능한 데이터를 확인할 수 있습니다",
              color: "primary",
            },
            {
              icon: Database,
              title: "데이터 신뢰성",
              subtitle: "Data Integrity",
              description:
                "자동 기록된 작업 데이터는 조작이 불가능하며, 산업 전체가 신뢰할 수 있는 정보를 제공합니다",
              color: "secondary",
            },
            {
              icon: Award,
              title: "전문성 인정",
              subtitle: "Recognition",
              description:
                "고가 장비 보유와 숙련된 경험을 체계적으로 관리하고, 정당한 평가를 받을 수 있도록 지원합니다",
              color: "primary",
            },
            {
              icon: BarChart3,
              title: "생태계 발전",
              subtitle: "Ecosystem Growth",
              description:
                "농가·운용자·제조사·지원기관이 함께 성장하는 선순환 구조를 구축합니다",
              color: "secondary",
            },
          ].map((value, idx) => (
            <div key={idx} className="card card-hover">
              <div
                className={`w-14 h-14 ${value.color === "primary" ? "bg-primary-500" : "bg-secondary-500"} rounded-2xl flex items-center justify-center mb-4`}
              >
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-1">
                {value.title}
              </h3>
              <p className="text-sm text-text-lighter mb-3">{value.subtitle}</p>
              <p className="text-text-light">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vision */}
      <Section background="white">
        <div className="card bg-primary-500 text-white text-center max-w-4xl mx-auto">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">우리의 비전</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                phase: "Phase 1",
                title: "데이터 플랫폼 구축",
                description: "농기계 작업의 투명한 정보 공개와 평판 시스템 확립",
              },
              {
                phase: "Phase 2",
                title: "생태계 확장",
                description: "제조사·지원기관과의 데이터 연계로 산업 전반의 효율성 향상",
              },
              {
                phase: "Phase 3",
                title: "스마트농업 인프라",
                description: "농기계 산업의 디지털 전환을 선도하는 필수 인프라로 성장",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-sm text-white opacity-60 mb-2">
                  {item.phase}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
