import Section from "@/components/Section";
import { Shield } from "lucide-react";

export const metadata = {
  title: "개인정보처리방침 - 단감",
  description: "단감 개인정보처리방침",
};

export default function Privacy() {
  return (
    <>
      <Section background="white" className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              개인정보처리방침
            </h1>
            <p className="text-gray-600">최종 업데이트: 2025년 11월</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. 개인정보의 처리 목적
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                단감(이하 &quot;회사&quot;)는 다음의 목적을 위하여 개인정보를
                처리합니다:
              </p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>• 회원 가입 및 관리</li>
                <li>• 서비스 제공 (작업 정보 매칭, 연락처 교환)</li>
                <li>• 푸시 알림 서비스 제공</li>
                <li>• 부정 이용 방지 및 신고 처리</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. 처리하는 개인정보 항목
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">필수 항목:</p>
                  <ul className="ml-6 space-y-1">
                    <li>• 전화번호</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">선택 항목:</p>
                  <ul className="ml-6 space-y-1">
                    <li>• 닉네임</li>
                    <li>• 주요 활동 지역</li>
                    <li>• 전화 가능 시간</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. 개인정보의 보유 및 이용기간
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>• 회원 정보: 회원 탈퇴 시까지 (탈퇴 시 즉시 삭제)</p>
                <p>• 로그 데이터: 30일 보관 후 자동 삭제</p>
                <p>• 신고 관련 정보: 처리 완료 후 3개월</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. 개인정보의 제3자 제공
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">연락처 교환 시:</p>
                <ul className="ml-6 space-y-2">
                  <li>• 제공받는 자: 상대방 이용자 (농부 또는 작업자)</li>
                  <li>• 제공 항목: 전화번호, 통화 가능 시간</li>
                  <li>• 제공 목적: 직접 연락 및 작업 협의</li>
                  <li>
                    • 제공 근거: <strong>이용자의 명시적 동의</strong>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. 개인정보 보호를 위한 기술적/관리적 대책
              </h2>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li>• Firebase 암호화 저장</li>
                <li>• HTTPS 통신</li>
                <li>• Firestore Security Rules를 통한 접근 제어</li>
                <li>• 권한 기반 데이터 접근 통제</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. 이용자의 권리</h2>
              <div className="space-y-3 text-gray-700">
                <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다:</p>
                <ul className="ml-6 space-y-2">
                  <li>• 개인정보 열람 요구</li>
                  <li>• 개인정보 정정 요구</li>
                  <li>• 개인정보 삭제 요구 (회원 탈퇴)</li>
                  <li>• 처리 정지 요구</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. 동의 철회</h2>
              <p className="text-gray-700 leading-relaxed">
                이용자는 회원 가입 시 동의한 개인정보 수집 및 이용에 대해
                언제든지 철회(회원 탈퇴)할 수 있습니다. 회원 탈퇴 시 모든
                개인정보가 즉시 삭제됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                8. 개인정보 보호책임자
              </h2>
              <div className="bg-white rounded-lg p-6 text-gray-700">
                <p>
                  <strong>성명:</strong> (담당자명)
                </p>
                <p>
                  <strong>이메일:</strong> privacy@danngam.com
                </p>
                <p>
                  <strong>전화:</strong> (연락처)
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                9. 개인정보처리방침 변경
              </h2>
              <p className="text-gray-700 leading-relaxed">
                본 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라
                내용이 변경될 수 있습니다. 변경 시 웹사이트 공지사항을 통해
                공지합니다.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-center text-gray-600">
                본 개인정보처리방침은 2025년 11월 1일부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
