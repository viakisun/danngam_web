import Section from "@/components/Section";
import Link from "next/link";
import Button from "@/components/Button";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "FAQ - 단감",
  description: "자주 묻는 질문과 답변",
};

export default function FAQ() {
  const faqs = [
    {
      category: "일반",
      questions: [
        {
          q: "Q1: 단감은 무엇인가요?",
          a: "단감은 농부와 작업자를 연결하는 무료 정보 중개 플랫폼입니다. 농부는 일손이 필요한 작업을 등록하고, 작업자는 근처 일자리를 찾아 관심을 표시합니다. 서로 동의하면 연락처가 교환되어 직접 통화할 수 있습니다.",
        },
        {
          q: "Q2: 정말 무료인가요?",
          a: "네, 100% 무료입니다. 가입비, 중개 수수료, 숨겨진 비용이 전혀 없습니다. 앞으로도 영원히 무료입니다. 단감은 광고 수익 모델을 검토 중이며, 사용자에게는 어떠한 비용도 청구하지 않습니다.",
        },
        {
          q: "Q3: 어떻게 수익을 내나요?",
          a: "단감은 초기 단계로, 현재는 수익 모델이 없습니다. 향후 광고 수익 또는 프리미엄 기능을 통해 수익을 창출할 계획이지만, 핵심 기능은 항상 무료로 유지됩니다.",
        },
        {
          q: "Q4: 가입하려면 무엇이 필요한가요?",
          a: "스마트폰과 전화번호만 있으면 됩니다. 본인인증, 주민등록번호, 신용카드 등은 필요 없습니다. 1분 내 가입 완료 가능합니다.",
        },
        {
          q: "Q5: iOS와 Android 모두 지원하나요?",
          a: "네, iOS 13.0 이상, Android 6.0 (API 23) 이상을 지원합니다. App Store와 Google Play에서 다운로드하세요.",
        },
      ],
    },
    {
      category: "농부",
      questions: [
        {
          q: "Q6: 작업 등록은 어떻게 하나요?",
          a: "앱을 열고 우측 하단의 [+ 새 작업 등록] 버튼을 누르세요. 5단계 (작물 선택 → 정보 입력 → 위치 설정 → 전화 가능 시간 → 미리보기)를 따라하면 3분 내 완료됩니다.",
        },
        {
          q: "Q7: 내 전화번호가 공개되나요?",
          a: "아니요. 내가 선택하고 수락한 작업자에게만 내 번호가 공개됩니다. 동의 없이는 절대 번호가 공개되지 않습니다.",
        },
        {
          q: "Q8: 여러 작업자에게 동시에 연락할 수 있나요?",
          a: "네, 가능합니다. 연락 요청 목록에서 여러 작업자를 선택하여 각각 수락할 수 있습니다.",
        },
        {
          q: "Q9: 작업을 수정하거나 삭제할 수 있나요?",
          a: "네, 언제든지 가능합니다. 작업 카드를 스와이프하면 [수정]과 [삭제] 버튼이 나타납니다.",
        },
        {
          q: "Q10: 작업자가 연락 요청을 보내면 어떻게 알 수 있나요?",
          a: "푸시 알림으로 즉시 알려드립니다. 앱을 열면 해당 작업에 신규 뱃지가 표시됩니다.",
        },
      ],
    },
    {
      category: "작업자",
      questions: [
        {
          q: "Q11: 일자리는 어떻게 찾나요?",
          a: "앱을 열면 자동으로 내 위치 근처의 작업들이 지도와 리스트로 표시됩니다. 거리순으로 정렬되어 가까운 작업부터 볼 수 있습니다.",
        },
        {
          q: "Q12: 관심 표시를 하면 내 번호가 공개되나요?",
          a: "네, 관심 표시를 하면 내 전화번호가 농부에게 즉시 공개됩니다. 따라서 관심 표시 시 동의 체크박스를 확인하고 진행하세요.",
        },
        {
          q: "Q13: 하루에 몇 개까지 관심 표시를 할 수 있나요?",
          a: "최대 20개까지 가능합니다. 이는 스팸 및 악의적 사용을 방지하기 위함입니다.",
        },
        {
          q: "Q14: 농부가 수락하지 않으면 어떻게 되나요?",
          a: '연락 요청은 7일 후 자동으로 만료됩니다. 내 연락 요청 현황에서 "만료됨" 탭에 표시됩니다. 거절되어도 별도 알림은 가지 않습니다 (부정적 경험 방지).',
        },
        {
          q: "Q15: 농부 번호를 분실했어요. 다시 확인할 수 있나요?",
          a: "네, 알림 센터에서 교환 완료 알림을 다시 확인하세요. 30일간 보관됩니다.",
        },
      ],
    },
    {
      category: "안전/개인정보",
      questions: [
        {
          q: "Q16: 개인정보는 안전한가요?",
          a: "네, 단감은 개인정보보호법을 철저히 준수합니다. Firebase 암호화 저장, HTTPS 통신, 권한 기반 접근 제어를 사용합니다. 동의 없이는 절대 정보가 공개되지 않습니다.",
        },
        {
          q: "Q17: 회원 탈퇴하면 정보가 삭제되나요?",
          a: "네, 회원 탈퇴 즉시 모든 개인정보가 완전히 삭제됩니다. 복구 불가능하며, 동일 번호로 재가입 가능합니다.",
        },
        {
          q: "Q18: 신고는 어떻게 하나요?",
          a: "작업 상세 화면 또는 연락 요청 화면에서 [신고] 버튼을 클릭하세요. 신고 사유를 선택하고 제출하면, 관리자가 24시간 이내 검토합니다.",
        },
        {
          q: "Q19: 신고가 누적되면 어떻게 되나요?",
          a: "동일 대상에 3건의 신고가 누적되면 자동으로 조치됩니다 (작업 숨김 또는 계정 정지). 관리자가 최종 검토합니다.",
        },
      ],
    },
    {
      category: "기술",
      questions: [
        {
          q: "Q20: 오프라인에서도 사용할 수 있나요?",
          a: "부분적으로 가능합니다. 이미 로드된 작업 목록은 캐시로 조회할 수 있지만, 새 작업 등록이나 연락 요청은 인터넷 연결이 필요합니다.",
        },
        {
          q: "Q21: 앱이 느리거나 오류가 발생해요.",
          a: "앱을 최신 버전으로 업데이트하세요. 문제가 지속되면 [문의하기] 페이지에서 상세 내용을 알려주세요.",
        },
        {
          q: "Q22: 푸시 알림이 오지 않아요.",
          a: "기기 설정 > 알림에서 단감 앱의 알림 권한이 허용되어 있는지 확인하세요. 허용되어 있는데도 문제가 있다면 앱을 재설치해보세요.",
        },
      ],
    },
    {
      category: "기타",
      questions: [
        {
          q: "Q23: 단감은 어떤 의미인가요?",
          a: '"단감"은 우리나라의 대표적인 가을 과수 작물입니다. 농업의 따뜻함과 수확의 결실을 상징하는 이름으로 선택했습니다.',
        },
        {
          q: "Q24: 피드백을 보내고 싶어요.",
          a: "언제든지 환영합니다! [문의하기] 페이지에서 이메일이나 문의 양식을 통해 의견을 보내주세요. 모든 피드백은 서비스 개선에 반영됩니다.",
        },
        {
          q: "Q25: 추가 기능 계획이 있나요?",
          a: "네, 사용자 피드백을 바탕으로 실시간 채팅, 리뷰 시스템, 결제 기능 등을 검토 중입니다. 단, 핵심 기능의 단순함과 무료 정책은 유지됩니다.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-20 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <HelpCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-gray-600">
            궁금한 점이 있으신가요? 여기서 답을 찾아보세요
          </p>
        </div>
      </Section>

      {/* FAQ Content */}
      {faqs.map((category, idx) => (
        <Section
          key={category.category}
          background={idx % 2 === 0 ? "gray" : "white"}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              {category.category === "일반" && "일반 질문"}
              {category.category === "농부" && "농부를 위한 FAQ"}
              {category.category === "작업자" && "작업자를 위한 FAQ"}
              {category.category === "안전/개인정보" && "안전 및 개인정보"}
              {category.category === "기술" && "기술 관련"}
              {category.category === "기타" && "기타 질문"}
            </h2>
            <div className="space-y-6">
              {category.questions.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-text">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-primary">A:</strong> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section background="gradient" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            더 궁금한 점이 있으시다면 언제든지 문의해주세요
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              문의하기 페이지로 이동
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
