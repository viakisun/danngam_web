import Section from "@/components/Section";
import Button from "@/components/Button";
import StatisticsCard from "@/components/StatisticsCard";
import {
  Building2,
  TrendingUp,
  Shield,
  Database,
  CheckCircle,
  BarChart3,
  FileCheck,
  Users,
  MapPin,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "지원기관을 위한 단감",
  description: "농협, 지자체를 위한 스마트 농업 지원 플랫폼. 투명한 데이터 관리와 효율적인 행정 처리",
};

export default function ForInstitutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-secondary-50 pt-16 pb-12">
        <div className="container-custom text-center">
          <Building2 className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            농협, 지자체를 위한
            <br />
            <span className="gradient-text">스마트 농업 지원 플랫폼</span>
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            지원금 신청부터 정산까지, 투명하고 효율적으로 관리하세요
          </p>
          <Button size="xl" className="group">
            기관 전용 문의하기
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* 지원기관의 문제 */}
      <Section
        background="white"
        title="지원기관이 겪는 어려움"
        subtitle="단감이 이해하고 해결합니다"
        centered
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: FileCheck,
              title: "농기계 지원 사업 집행의 어려움",
              problem: "누가 실제로 장비를 활용하는지, 지원금이 제대로 쓰이는지 확인 어려움",
              solution: "모든 장비 사용 내역 자동 기록, 실시간 모니터링 가능",
            },
            {
              icon: Users,
              title: "수혜자 확인 및 검증 부담",
              problem: "서류 확인, 현장 방문 등 행정 업무 과다",
              solution: "자동 검증 시스템, GPS 및 사진 증빙 자동 수집",
            },
            {
              icon: BarChart3,
              title: "사업 성과 측정 한계",
              problem: "지원 사업의 실제 효과를 정량적으로 측정하기 어려움",
              solution: "대시보드를 통한 실시간 통계, 만족도 자동 수집",
            },
            {
              icon: Shield,
              title: "중복·부정 수급 방지 어려움",
              problem: "여러 기관의 지원을 중복으로 받는 경우 파악 곤란",
              solution: "플랫폼 내 통합 데이터로 중복 지원 자동 감지",
            },
            {
              icon: Clock,
              title: "서류 작업 과다",
              problem: "신청, 심사, 정산 과정에서 수작업 서류 처리",
              solution: "온라인 신청 및 자동 정산 시스템",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text">{item.title}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary-500 font-bold mt-1">문제:</span>
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

      {/* 플랫폼 솔루션 */}
      <Section
        background="gray"
        title="단감 플랫폼의 솔루션"
        subtitle="데이터 기반 투명한 지원 사업 관리"
        centered
      >
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* 투명한 데이터 관리 */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text">투명한 데이터 관리</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FileCheck, text: "실제 작업 내역 자동 기록" },
                { icon: MapPin, text: "GPS 기반 작업 위치 확인" },
                { icon: Sparkles, text: "작업 전후 사진 증빙" },
                { icon: BarChart3, text: "장비 가동 이력 추적" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 효율적인 행정 처리 */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text">효율적인 행정 처리</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FileCheck, text: "지원금 온라인 신청" },
                { icon: Shield, text: "자동 검증 시스템" },
                { icon: BarChart3, text: "실시간 진행 상황 모니터링" },
                { icon: Database, text: "정산 자료 자동 생성" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                  <span className="text-sm text-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 사업 성과 가시화 */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text">사업 성과 가시화</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "지역별 장비 활용률",
                  desc: "어느 지역에 어떤 장비가 얼마나 활용되는지 실시간 확인",
                },
                {
                  title: "작업 완료 통계",
                  desc: "지원 사업별 실제 작업 완료 건수 및 면적",
                },
                {
                  title: "농가 만족도",
                  desc: "서비스 이용 농가의 만족도 자동 수집 및 분석",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-text mb-2">{item.title}</h4>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 정책 수립 지원 */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text">정책 수립 지원</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "지역별 농기계 수요 분석",
                  desc: "어떤 장비가 부족한지 데이터 기반 파악",
                },
                {
                  title: "계절별 작업 패턴 분석",
                  desc: "시기별 필요 장비 및 인력 예측",
                },
                {
                  title: "지원 사업 효과성 평가",
                  desc: "투입 대비 실제 성과 측정 및 개선점 도출",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-text mb-2">{item.title}</h4>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 적용 사례 */}
      <Section background="white" title="적용 가능한 사업" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Building2,
              title: "농협 농기계 임대 사업 연계",
              items: [
                "농협 보유 농기계 운용 현황 실시간 파악",
                "임대 사업 수혜자의 실제 작업 내역 확인",
                "장비별 가동률 및 유지보수 시기 관리",
              ],
            },
            {
              icon: Users,
              title: "지자체 청년농업인 장비 지원",
              items: [
                "청년농업인 장비 구입 지원금 집행 관리",
                "실제 장비 활용도 모니터링",
                "지원 효과 측정 및 보고서 자동 생성",
              ],
            },
            {
              icon: Sparkles,
              title: "스마트팜 보조금 사업 관리",
              items: [
                "스마트 농기계 도입 지원 사업 운영",
                "장비 활용 데이터 수집 및 분석",
                "사업 성과 정량적 평가",
              ],
            },
            {
              icon: TrendingUp,
              title: "농작업 대행 서비스 운영",
              items: [
                "공공 농기계 대행 서비스 플랫폼 활용",
                "투명한 요금 체계 및 서비스 품질 관리",
                "이용자 만족도 실시간 수집",
              ],
            },
          ].map((useCase, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text">{useCase.title}</h3>
              </div>
              <ul className="space-y-2">
                {useCase.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-text-light">
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 데이터 제공 범위 */}
      <Section
        background="gray"
        title="데이터 제공 범위"
        subtitle="각 이해관계자별 맞춤 데이터 제공"
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              stakeholder: "농협/지자체",
              icon: Building2,
              data: ["관할 지역 전체 통계", "지원 사업 집행 현황", "예산 대비 성과 분석"],
            },
            {
              stakeholder: "제조사",
              icon: TrendingUp,
              data: ["장비 사용 패턴", "성능 피드백", "A/S 필요 시기 예측"],
            },
            {
              stakeholder: "서비스 제공자",
              icon: Users,
              data: ["개인 작업 이력", "평판 점수", "수익 통계"],
            },
            {
              stakeholder: "서비스 이용자",
              icon: CheckCircle,
              data: ["작업 완료 내역", "지불 내역", "평가 기록"],
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3">{item.stakeholder}</h3>
              <ul className="space-y-2 text-left">
                {item.data.map((dataItem, dataIdx) => (
                  <li key={dataIdx} className="flex items-start gap-2 text-sm text-text-light">
                    <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" />
                    <span>{dataItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 기대 효과 */}
      <Section background="white" title="기대 효과" centered>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatisticsCard
            title="행정 업무 시간"
            value="70%"
            description="감소"
            icon={Clock}
          />
          <StatisticsCard
            title="지원금 집행 투명성"
            value="100%"
            description="데이터 기반 검증"
            icon={Shield}
          />
          <StatisticsCard
            title="사업 성과 가시화"
            value="실시간"
            description="대시보드 제공"
            icon={BarChart3}
          />
        </div>
      </Section>

      {/* 문의 섹션 */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-text mb-6">
            기관 맞춤형 솔루션 도입 문의
          </h2>
          <p className="text-xl text-text-light mb-8">
            귀 기관의 상황에 맞는 맞춤형 솔루션을 제안해드립니다
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: FileCheck,
                title: "온라인 데모 시연",
                desc: "실제 기능을 화상으로 확인",
              },
              {
                icon: Database,
                title: "맞춤형 제안서",
                desc: "기관 상황에 맞는 구체적 제안",
              },
              {
                icon: Users,
                title: "파일럿 프로그램",
                desc: "소규모 시범 운영 지원",
              },
            ].map((item, idx) => (
              <div key={idx} className="card text-center">
                <item.icon className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="card bg-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-6">문의하기</h3>
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  기관명
                </label>
                <input
                  type="text"
                  placeholder="예: ○○시청, ○○농협"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  담당자명
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">
                  문의 내용
                </label>
                <textarea
                  rows={4}
                  placeholder="관심 있는 사업이나 궁금한 점을 자유롭게 작성해주세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                ></textarea>
              </div>
              <Button size="lg" className="w-full">
                문의 제출하기
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


