import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";
import {
  Wrench,
  TrendingUp,
  Award,
  Database,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "농기계 운용자를 위한 단감",
  description: "보유하신 농기계, 단감에서 최대한 활용하세요. 작업 수주부터 평판 관리까지",
};

export default function ForOperatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <Wrench className="w-16 h-16 text-secondary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            보유하신 농기계,
            <br />
            <span className="gradient-text">최대한 활용</span>하고 계신가요?
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            단감에서 전문 운용자로 성장하고, 장비 가동률을 높이세요
          </p>
          <Button size="xl" className="group">
            지금 시작하기
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* 타겟 장비 섹션 */}
      <Section background="white" title="등록 가능한 농기계" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "트랙터",
              description: "경운, 정지, 운반 등",
              examples: ["TYM T2540", "LS Mtron XR50", "대동 CK30"],
            },
            {
              name: "무인방제기",
              description: "드론 방제 작업",
              examples: ["DJI Agras T40", "DJI Agras T30", "한국야마하 YMR-08"],
            },
            {
              name: "이양기",
              description: "벼 모내기 작업",
              examples: ["동양물산 PF80", "대동 SUPER-80"],
            },
            {
              name: "콤바인",
              description: "수확 작업",
              examples: ["동양물산 TCH-480", "대동 DSC-380"],
            },
          ].map((equipment, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">{equipment.name}</h3>
              <p className="text-sm text-text-light mb-3">{equipment.description}</p>
              <div className="space-y-1">
                {equipment.examples.map((example, exIdx) => (
                  <p key={exIdx} className="text-xs text-text-light">
                    {example}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 실제 장비 사례 */}
      <Section
        background="gray"
        title="실제 등록 장비 사례"
        subtitle="국내 주요 농기계 제조사의 실제 모델"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              manufacturer: "동양물산 TYM",
              model: "T2540 트랙터",
              specs: ["55마력", "4기통 디젤", "4WD", "캐빈 장착"],
              year: 2021,
              operatorName: "김철수",
              location: "경기 이천시",
              jobs: 284,
              rating: 4.9,
            },
            {
              manufacturer: "DJI",
              model: "Agras T30 드론",
              specs: ["30L 탱크", "8L/min 살포량", "RTK GPS", "야간 작업"],
              year: 2023,
              operatorName: "김철수",
              location: "경기 이천시",
              jobs: 284,
              rating: 4.9,
            },
            {
              manufacturer: "동양물산",
              model: "PF80 이양기",
              specs: ["8조 이양", "자동 직진", "모판 자동 공급"],
              year: 2022,
              operatorName: "박영희",
              location: "전남 나주시",
              jobs: 156,
              rating: 4.8,
            },
          ].map((equipment, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text mb-1">
                    {equipment.manufacturer}
                  </h3>
                  <p className="text-sm text-text-light">{equipment.model}</p>
                  <p className="text-xs text-text-light">{equipment.year}년</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-text mb-2">주요 사양</p>
                <div className="flex flex-wrap gap-1">
                  {equipment.specs.map((spec, specIdx) => (
                    <span
                      key={specIdx}
                      className="text-xs bg-gray-100 px-2 py-1 rounded text-text-light"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-light">{equipment.operatorName}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                      <span className="font-bold">{equipment.rating}</span>
                    </div>
                    <span className="text-text-light">{equipment.jobs}건</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 플랫폼 가치 제안 */}
      <Section
        background="white"
        title="단감을 선택하는 이유"
        subtitle="운용자의 성장과 수익 증대를 위한 플랫폼"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: TrendingUp,
              title: "작업 수주 기회 증대",
              items: [
                "근처 작업 공고 실시간 확인",
                "여러 농가에 동시 제안 가능",
                "지역별 작업 수요 파악",
              ],
            },
            {
              icon: BarChart3,
              title: "장비 가동률 향상",
              items: [
                "유휴 시간 최소화",
                "작업 일정 최적화",
                "수익 대시보드로 한눈에",
              ],
            },
            {
              icon: Award,
              title: "평판 관리 시스템",
              items: [
                "작업 이력 자동 축적",
                "리뷰와 평점으로 신뢰 구축",
                "전문성 입증",
              ],
            },
            {
              icon: Database,
              title: "데이터 축적 및 활용",
              items: [
                "작업 데이터 자동 기록",
                "제조사와 데이터 공유 가능",
                "지원 사업 신청 자료 활용",
              ],
            },
          ].map((benefit, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">{benefit.title}</h3>
              <ul className="space-y-2 text-sm text-text-light text-left">
                {benefit.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 운용자 프로필 강조 */}
      <Section background="gray" title="전문 운용자 프로필" centered>
        <div className="max-w-4xl mx-auto card">
          <h3 className="text-2xl font-bold text-text mb-6">
            프로필에 포함되는 정보
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-text mb-3 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary-500" />
                보유 장비 정보
              </h4>
              <ul className="space-y-2 text-text-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>제조사 및 모델명</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>제조 연식</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>주요 사양 (마력, 용량 등)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>장비 사진 및 등록증</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-500" />
                운용자 정보
              </h4>
              <ul className="space-y-2 text-text-light">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>작업 가능 지역</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>전문 작업 분야</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>경력 및 완료 작업 수</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>평판 점수 및 리뷰</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>자격증 및 교육 이력</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 사용 흐름 */}
      <Section background="white" title="운용자 사용 흐름" centered>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              step: "1",
              title: "보유 장비 등록",
              desc: "제조사, 모델, 연식, 사양 등 상세 정보 입력. 장비 사진과 등록증을 첨부하면 신뢰도가 높아집니다.",
              icon: Wrench,
            },
            {
              step: "2",
              title: "작업 공고 탐색",
              desc: "지역, 작업 종류, 일정으로 필터링하여 적합한 작업 확인. 실시간 알림으로 새 공고를 놓치지 않습니다.",
              icon: MapPin,
            },
            {
              step: "3",
              title: "작업 제안",
              desc: "원하는 작업에 가격과 일정을 제시. 간단한 메시지로 자신의 강점을 어필할 수 있습니다.",
              icon: ArrowRight,
            },
            {
              step: "4",
              title: "농가 승인 대기",
              desc: "농가가 제안을 검토하고 선택하면 푸시 알림으로 즉시 확인. 연락처가 교환됩니다.",
              icon: CheckCircle,
            },
            {
              step: "5",
              title: "작업 수행",
              desc: "농가와 직접 소통하여 작업 진행. 작업 내역은 자동으로 기록됩니다.",
              icon: Zap,
            },
            {
              step: "6",
              title: "평가 받기",
              desc: "작업 완료 후 농가의 평가를 받아 평판 점수가 올라갑니다. 좋은 평판은 더 많은 기회로 이어집니다.",
              icon: Award,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start card card-hover">
              <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">{item.step}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-text">{item.title}</h4>
                  <item.icon className="w-5 h-5 text-secondary-500" />
                </div>
                <p className="text-text-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 추가 혜택 */}
      <Section background="gray" title="운용자를 위한 추가 혜택" centered>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Shield,
              title: "보험 및 안전",
              desc: "작업 보험 가입 확인, 안전 교육 자료 제공",
            },
            {
              icon: Database,
              title: "제조사 연계",
              desc: "장비 사용 데이터를 제조사와 공유하여 혜택 받기",
            },
            {
              icon: TrendingUp,
              title: "지원 사업 연계",
              desc: "농협, 지자체 지원 사업 정보 및 신청 도움",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <p className="text-text-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="card bg-gradient-to-br from-secondary-500 to-secondary-700 text-white text-center max-w-3xl mx-auto">
          <Wrench className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            전문 운용자로 성장하세요
          </h2>
          <p className="text-xl mb-8 text-secondary-50">
            보유 장비를 효율적으로 활용하고, 안정적인 수익을 창출하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button
                size="lg"
                className="bg-white text-secondary-600 hover:bg-gray-100"
              >
                사용 방법 자세히 보기
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              앱 다운로드
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}


