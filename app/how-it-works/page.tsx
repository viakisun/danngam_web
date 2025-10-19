import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";
import {
  Users,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  MessageCircle,
  Bell,
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
            농부와 작업자 모두에게 최적화된 간단하고 투명한 과정을 소개합니다
          </p>
        </div>
      </section>

      {/* For Farmers */}
      <Section
        background="white"
        title="농부 가이드: 인력 구하기"
        subtitle="3단계로 끝나는 간단한 프로세스"
        centered
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "1",
              icon: Phone,
              title: "작업 등록",
              description:
                "필요한 작물, 기간, 급여, 위치 등 간단한 정보만으로 3분 안에 작업을 등록합니다",
              details: [
                "작물 선택 (12가지 중 선택)",
                "작업 내용 및 기간 입력",
                "급여 정보 설정",
                "지도에서 위치 설정",
                "전화 가능 시간 입력",
              ],
              color: "primary",
            },
            {
              step: "2",
              icon: Bell,
              title: "연락 요청 확인",
              description:
                "관심 있는 작업자들이 보낸 연락 요청을 확인하고, 작업자 정보를 검토합니다",
              details: [
                "푸시 알림으로 즉시 통지",
                "작업자 전화번호 확인",
                "통화 가능 시간 확인",
                "작업자가 남긴 메시지 읽기",
              ],
              color: "primary",
            },
            {
              step: "3",
              icon: CheckCircle,
              title: "연락처 교환 및 소통",
              description:
                "마음에 드는 작업자를 선택하면 상호 동의 하에 연락처가 교환되고 직접 통화하여 세부 사항을 조율합니다",
              details: [
                "원하는 작업자 선택",
                "동의 체크 후 연락처 교환",
                "즉시 전화 가능",
                "작업 조건 협의",
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
          <h4 className="text-xl font-bold text-text mb-4">💡 유용한 팁</h4>
          <ul className="text-left space-y-2 text-text-light">
            <li>• 여러 작업자에게 동시에 연락 가능합니다</li>
            <li>• 작업 정보는 언제든지 수정 가능합니다</li>
            <li>• 작업이 마감되면 삭제하세요</li>
          </ul>
        </div>
      </Section>

      {/* For Workers */}
      <Section
        background="gray"
        title="작업자 가이드: 일자리 찾기"
        subtitle="지도에서 쉽게 찾고, 간편하게 연락하기"
        centered
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "1",
              icon: MapPin,
              title: "내 주변 작업 탐색",
              description:
                "현재 위치를 기반으로 가까운 농가의 작업 정보를 지도 또는 리스트로 실시간 확인합니다",
              details: [
                "지도 뷰: 시각적으로 위치 확인",
                "리스트 뷰: 거리순 정렬",
                "작물별 필터링",
                "급여 조건 검색",
              ],
              color: "secondary",
            },
            {
              step: "2",
              icon: MessageCircle,
              title: "연락 요청 보내기",
              description:
                "관심 있는 작업에 내 전화번호와 통화 가능 시간을 농부에게 전달합니다",
              details: [
                "작업 상세 정보 확인",
                "내 연락처 제공 동의",
                "통화 가능 시간 입력",
                "한마디 메시지 작성",
              ],
              color: "secondary",
            },
            {
              step: "3",
              icon: Clock,
              title: "농부 연락 기다리기",
              description:
                "농부가 요청을 수락하면 농부의 전화번호를 받고 직접 통화하여 일정을 조율합니다",
              details: [
                "푸시 알림으로 즉시 통지",
                "농부 전화번호 수신",
                "즉시 통화 가능",
                "일정 및 조건 협의",
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
          <h4 className="text-xl font-bold text-text mb-4">💡 유용한 팁</h4>
          <ul className="text-left space-y-2 text-text-light">
            <li>• 하루 최대 20개 작업에 관심 표시 가능합니다</li>
            <li>• 여러 작업에 동시에 요청 가능합니다</li>
            <li>• 요청은 7일 후 자동 만료됩니다</li>
          </ul>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="white" title="단감의 핵심 가치" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card card-hover text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-text mb-3">
              수수료 없는 투명한 거래
            </h3>
            <p className="text-text-light">
              단감은 중개 수수료를 받지 않아 농부와 작업자 모두에게 이익이
              됩니다
            </p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-text mb-3">개인정보 보호</h3>
            <p className="text-text-light">
              상호 동의 없이는 어떠한 개인정보도 공개되지 않아 안심하고 이용할
              수 있습니다
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 text-primary-50">
            간단한 가입으로 단감의 모든 기능을 무료로 이용하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-farmers">
              <Button size="lg" variant="secondary">
                농부로 시작하기
              </Button>
            </Link>
            <Link href="/for-workers">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                작업자로 시작하기
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
