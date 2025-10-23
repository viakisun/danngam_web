import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";
import {
  Wrench,
  MapPin,
  FileText,
  CheckCircle,
  Search,
  Award,
  Bell,
  Shield,
  Database,
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            단감, <span className="gradient-text">이렇게 작동합니다</span>
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            농가와 농기계 전문가 모두에게 최적화된 투명하고 신뢰할 수 있는 매칭 과정을 소개합니다
          </p>
        </div>
      </section>

      {/* For Farmers */}
      <Section
        background="white"
        title="농가 가이드: 전문가 구하기"
        subtitle="필요한 농기계 작업을 투명하게 의뢰하는 3단계"
        centered
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "1",
              icon: FileText,
              title: "작업 공고 등록",
              description:
                "필요한 농기계 종류, 작업 내용, 기간, 위치 등의 정보를 입력하여 작업 공고를 등록합니다",
              details: [
                "필요한 농기계 종류 선택 (트랙터, 이양기, 무인방제기 등)",
                "작업 내용 및 기간 입력",
                "작업 규모 및 조건 명시",
                "지도에서 정확한 위치 설정",
                "예상 작업 비용 범위 입력",
              ],
              color: "primary",
            },
            {
              step: "2",
              icon: Search,
              title: "전문가 검토 및 선택",
              description:
                "관심을 보인 운용자들의 보유 장비, 작업 이력, 평점을 확인하고 적합한 전문가를 선택합니다",
              details: [
                "운용자의 보유 장비 정보 확인 (제조사, 모델, 연식)",
                "완료한 작업 건수 및 평균 평점 조회",
                "이전 작업 후기 및 평가 검토",
                "운용자가 남긴 제안서 확인",
              ],
              color: "primary",
            },
            {
              step: "3",
              icon: CheckCircle,
              title: "작업 확정 및 평가",
              description:
                "운용자와 작업 조건을 협의하고, 작업 완료 후 상호 평가를 통해 투명한 이력을 남깁니다",
              details: [
                "선택한 운용자와 직접 소통",
                "작업 일정 및 세부 조건 협의",
                "작업 완료 후 자동 이력 기록",
                "상호 평가로 신뢰 데이터 축적",
              ],
              color: "primary",
            },
          ].map((step, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 bg-gradient-${step.color} rounded-2xl flex items-center justify-center shadow-${step.color} mb-4 md:mb-0`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`badge badge-${step.color} text-lg font-bold`}
                    >
                      Step {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-text-light mb-4">
                    {step.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIdx) => (
                      <li
                        key={detailIdx}
                        className="flex items-start gap-2 text-text-light"
                      >
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-primary-50 rounded-2xl max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-primary-600" />
            <h4 className="text-xl font-bold text-text">핵심 포인트</h4>
          </div>
          <ul className="text-left space-y-2 text-text-light">
            <li>• 장비 정보가 투명하게 공개되어 작업 품질을 사전에 예측할 수 있습니다</li>
            <li>• 평판 시스템을 통해 신뢰할 수 있는 전문가를 선택할 수 있습니다</li>
            <li>• 모든 작업 이력은 자동으로 기록되어 데이터로 축적됩니다</li>
          </ul>
        </div>
      </Section>

      {/* For Workers */}
      <Section
        background="gray"
        title="운용자 가이드: 작업 기회 찾기"
        subtitle="전문 장비를 활용하여 신뢰를 쌓는 3단계"
        centered
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "1",
              icon: Wrench,
              title: "보유 장비 등록",
              description:
                "보유하고 있는 농기계의 상세 정보를 등록하여 전문성을 투명하게 공개합니다",
              details: [
                "농기계 제조사 및 모델명 입력 (예: 동양물산 TYM T2540)",
                "제조 연도 및 장비 상태 기록",
                "장비별 작업 가능 범위 명시",
                "장비 사진 등록 (선택)",
              ],
              color: "secondary",
            },
            {
              step: "2",
              icon: MapPin,
              title: "작업 공고 탐색 및 제안",
              description:
                "내 장비에 적합한 작업 공고를 찾아보고, 보유 장비와 경험을 바탕으로 제안서를 제출합니다",
              details: [
                "지역 및 장비 종류 기반 필터링",
                "작업 규모 및 조건 확인",
                "내 장비 정보 자동 첨부",
                "작업 경험 및 접근 방식 제안",
              ],
              color: "secondary",
            },
            {
              step: "3",
              icon: Award,
              title: "작업 수행 및 평판 축적",
              description:
                "선정된 작업을 성실히 수행하고, 농가의 평가를 통해 신뢰할 수 있는 평판을 쌓아갑니다",
              details: [
                "작업 조건 협의 및 일정 확정",
                "작업 완료 후 자동 이력 기록",
                "농가로부터 평가 및 후기 수령",
                "누적된 평판으로 작업 기회 확대",
              ],
              color: "secondary",
            },
          ].map((step, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 bg-gradient-${step.color} rounded-2xl flex items-center justify-center shadow-${step.color} mb-4 md:mb-0`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`badge badge-${step.color} text-lg font-bold`}
                    >
                      Step {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-text-light mb-4">
                    {step.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIdx) => (
                      <li
                        key={detailIdx}
                        className="flex items-start gap-2 text-text-light"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-secondary-50 rounded-2xl max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Database className="w-6 h-6 text-secondary-600" />
            <h4 className="text-xl font-bold text-text">핵심 포인트</h4>
          </div>
          <ul className="text-left space-y-2 text-text-light">
            <li>• 장비 정보를 투명하게 공개하여 차별화된 전문성을 어필할 수 있습니다</li>
            <li>• 모든 작업 이력이 자동으로 기록되어 검증 가능한 포트폴리오가 구축됩니다</li>
            <li>• 평판 시스템을 통해 더 많은 작업 기회를 확보할 수 있습니다</li>
          </ul>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="white" title="단감의 핵심 가치" centered>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card card-hover text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">
              투명한 장비 정보
            </h3>
            <p className="text-text-light">
              모든 농기계의 제조사, 모델, 연식이 명확하게 공개되어 작업 품질을 사전에 예측할 수 있습니다
            </p>
          </div>
          <div className="card card-hover text-center">
            <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">평판 기반 신뢰</h3>
            <p className="text-text-light">
              자동 기록된 작업 이력과 상호 평가를 통해 신뢰할 수 있는 전문가를 선택할 수 있습니다
            </p>
          </div>
          <div className="card card-hover text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-3">데이터 가치 창출</h3>
            <p className="text-text-light">
              축적된 농기계 작업 데이터는 제조사, 지원기관, 연구소 등 산업 전반에 활용됩니다
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 text-primary-50">
            투명한 장비 정보와 검증된 평판으로 신뢰할 수 있는 농기계 작업 매칭을 경험하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-farmers">
              <Button size="lg" variant="secondary">
                농가로 시작하기
              </Button>
            </Link>
            <Link href="/for-operators">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                운용자로 시작하기
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
