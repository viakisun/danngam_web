import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";
import {
  Users,
  Shield,
  CheckCircle,
  Phone,
  Sparkles,
  ArrowRight,
  Award,
  MapPin,
  TrendingUp,
  BarChart3,
  MessageCircle,
  FileCheck,
  Bell,
} from "lucide-react";

export default function ForFarmersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <Users className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            필요한 <span className="gradient-text">농기계 작업</span>,
            <br />
            전문가에게 맡기세요
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            장비 정보와 평판을 확인하고, 신뢰할 수 있는 운용자를 선택하세요
          </p>
          <Button size="xl" className="group">
            지금 시작하기
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <Section
        background="white"
        title="농가가 겪는 어려움"
        subtitle="단감이 이해하고 해결합니다"
        centered
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "전문 농기계 작업자 찾기 어려움",
              problem: "이양, 방제, 수확 등 전문 장비가 필요한데 어디서 찾아야 할지 모름",
              solution: "지역별 등록된 농기계 운용자와 보유 장비를 한눈에 확인",
            },
            {
              title: "장비 정보 불투명",
              problem: "누가 어떤 장비를 가지고 있는지, 장비 상태는 어떤지 알 수 없음",
              solution: "제조사, 모델, 연식, 사양까지 상세 정보 공개",
            },
            {
              title: "작업 품질 불확실",
              problem: "처음 의뢰하는 운용자의 실력과 경험을 알 수 없음",
              solution: "평판 점수, 완료 작업 수, 실제 리뷰로 검증된 운용자 선택",
            },
            {
              title: "장비 구입 비용 부담",
              problem: "트랙터 1대 5,000만원 이상, 모든 장비를 구입하기 어려움",
              solution: "필요한 작업만 전문가에게 의뢰하여 비용 절감",
            },
            {
              title: "작업 후 품질 평가 어려움",
              problem: "작업이 제대로 되었는지, 장비가 문제없었는지 확인 어려움",
              solution: "작업 전후 사진, GPS 기록, 상호 평가 시스템",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover">
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary-500 font-bold mt-1">
                    문제:
                  </span>
                  <p className="text-text-light">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-500 font-bold mt-1">해결:</span>
                  <p className="text-text">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section background="gray" title="단감을 선택하는 이유" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Shield,
              title: "장비 정보 투명 공개",
              items: [
                "제조사, 모델명 확인",
                "장비 연식 및 주요 사양",
                "장비 사진 및 등록증",
              ],
            },
            {
              icon: Award,
              title: "검증된 운용자",
              items: [
                "평판 점수 및 리뷰 확인",
                "완료 작업 이력 투명 공개",
                "자격증 및 교육 이력",
              ],
            },
            {
              icon: Sparkles,
              title: "선택권은 농가에게",
              items: [
                "여러 운용자 제안 비교",
                "장비와 가격 꼼꼼히 검토",
                "마음에 드는 운용자 선택",
              ],
            },
            {
              icon: CheckCircle,
              title: "작업 품질 보장",
              items: ["작업 전후 사진 기록", "GPS 위치 확인", "상호 평가 시스템"],
            },
          ].map((benefit, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">
                {benefit.title}
              </h3>
              <ul className="space-y-2 text-sm text-text-light text-left">
                {benefit.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 작업 유형 섹션 */}
      <Section
        background="white"
        title="의뢰 가능한 작업 유형"
        subtitle="전문 농기계가 필요한 모든 작업"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "경운/정지 작업",
              equipment: "트랙터",
              desc: "밭갈이, 땅 고르기 등 기본 작업",
              example: "동양물산 TYM T2540 (55마력)",
            },
            {
              title: "이양 작업",
              equipment: "이양기",
              desc: "벼 모내기 작업",
              example: "동양물산 PF80 (8조 이양)",
            },
            {
              title: "무인 방제 작업",
              equipment: "드론",
              desc: "농약, 비료 살포",
              example: "DJI Agras T30 (30L 탱크)",
            },
            {
              title: "수확 작업",
              equipment: "콤바인",
              desc: "벼, 보리 등 곡물 수확",
              example: "동양물산 TCH-480 (4조)",
            },
            {
              title: "운반 작업",
              equipment: "트랙터",
              desc: "수확물 운반, 자재 이동",
              example: "LS Mtron XR50 (50마력)",
            },
            {
              title: "기타 작업",
              equipment: "다양한 농기계",
              desc: "파종, 배토, 멀칭 등",
              example: "작업에 맞는 전문 장비",
            },
          ].map((job, idx) => (
            <div key={idx} className="card card-hover">
              <h3 className="text-xl font-bold text-text mb-2">{job.title}</h3>
              <p className="text-sm text-secondary-600 font-semibold mb-3">
                필요 장비: {job.equipment}
              </p>
              <p className="text-text-light mb-3">{job.desc}</p>
              <p className="text-xs text-text-light bg-gray-50 p-2 rounded">
                예시: {job.example}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section
        background="gray"
        title="단감 활용 시나리오"
        subtitle="실제 농가의 사용 사례"
        centered
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              title: "이천 벼농사 - 이양 작업",
              equipment: "동양물산 PF80 이양기 (8조)",
              description:
                "5ha 규모의 논에 이양 작업이 필요했습니다. 단감에서 8조 이양기를 보유한 운용자를 찾았고, 4.8점의 높은 평판과 156건의 완료 이력을 확인한 후 선택했습니다. 작업은 3일 만에 완료되었고, 정확한 간격과 깊이로 만족스러운 결과를 얻었습니다.",
            },
            {
              title: "나주 과수원 - 드론 방제",
              equipment: "DJI Agras T30 무인방제기",
              description:
                "3.5ha 과수원 방제 작업에 드론을 활용하고 싶었습니다. DJI T30을 보유한 운용자를 발견했고, 드론 조종 자격증과 야간 작업 가능 여부를 확인했습니다. 정밀한 GPS 방제로 농약 사용량을 30% 절감할 수 있었습니다.",
            },
            {
              title: "논산 밭 - 트랙터 경운",
              equipment: "대동 CK30 트랙터 (30마력)",
              description:
                "2ha 규모의 밭을 경운해야 했습니다. 소형 트랙터로 충분한 작업이었고, 근처에 계신 운용자를 찾아 합리적인 가격에 의뢰했습니다. 작업 전후 사진으로 품질을 확인할 수 있어 안심되었습니다.",
            },
          ].map((useCase, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-text mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-secondary-600 font-semibold">
                    사용 장비: {useCase.equipment}
                  </p>
                </div>
              </div>
              <p className="text-lg text-text-light leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features for Farmers */}
      <Section background="white" title="농가를 위한 주요 기능" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Phone,
              title: "간단한 작업 등록",
              desc: "5단계 스텝으로 쉽게",
            },
            {
              icon: Users,
              title: "연락 요청 관리",
              desc: "한눈에 작업자 정보 확인",
            },
            {
              icon: CheckCircle,
              title: "선택적 수락",
              desc: "원하는 작업자만 선택",
            },
            { icon: Shield, title: "푸시 알림", desc: "새 요청 즉시 확인" },
            {
              icon: Sparkles,
              title: "작업 수정/삭제",
              desc: "언제든지 관리 가능",
            },
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
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 text-primary-50">
            전문 농기계 작업, 단감으로 간편하고 투명하게
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button size="lg" variant="secondary">
                사용 방법 알아보기
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              앱 다운로드
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
