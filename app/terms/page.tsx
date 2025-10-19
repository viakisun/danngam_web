import Section from "@/components/Section";
import { FileText } from "lucide-react";

export const metadata = {
  title: "이용약관 - 단감",
  description: "단감 서비스 이용약관",
};

export default function Terms() {
  return (
    <>
      <Section background="white" className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              서비스 이용약관
            </h1>
            <p className="text-gray-600">최종 업데이트: 2025년 11월</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">제1조 (목적)</h2>
              <p className="text-gray-700 leading-relaxed">
                본 약관은 단감(이하 &quot;회사&quot;)가 제공하는 농업 일손 매칭
                플랫폼 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와
                이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제2조 (정의)</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  1. &quot;서비스&quot;란 단감이 제공하는 농부와 작업자 간 정보
                  중개 플랫폼을 의미합니다.
                </p>
                <p>
                  2. &quot;이용자&quot;란 본 약관에 따라 회사가 제공하는
                  서비스를 이용하는 자를 말합니다.
                </p>
                <p>
                  3. &quot;농부&quot;란 농작업 인력이 필요하여 작업 정보를
                  등록하는 이용자를 말합니다.
                </p>
                <p>
                  4. &quot;작업자&quot;란 농작업 일자리를 찾아 연락 요청을 하는
                  이용자를 말합니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제3조 (서비스의 제공)</h2>
              <div className="space-y-3 text-gray-700">
                <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
                <ul className="ml-6 space-y-2">
                  <li>• 작업 정보 등록 및 조회</li>
                  <li>• 연락처 교환 중개</li>
                  <li>• 푸시 알림 서비스</li>
                  <li>• 신고 및 제재 시스템</li>
                </ul>
                <p>
                  2. 회사는 정보 제공 플랫폼으로, 농부와 작업자 간의 실제
                  거래에는 개입하지 않습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제4조 (개인정보 보호)</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 이용자의 개인정보를 보호하기 위하여 개인정보보호법 등
                관련 법령을 준수하며, 별도의 개인정보처리방침을 수립하여
                운영합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제5조 (이용자의 의무)</h2>
              <div className="space-y-3 text-gray-700">
                <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
                <ul className="ml-6 space-y-2">
                  <li>• 허위 정보 등록</li>
                  <li>• 타인의 개인정보 무단 사용</li>
                  <li>• 스팸 또는 악의적 사용</li>
                  <li>• 서비스 운영 방해</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제6조 (면책사항)</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 정보 중개 플랫폼으로, 농부와 작업자 간의 실제 거래 내용,
                작업 조건, 급여 지급 등에 대한 책임을 부담하지 않습니다. 이용자
                간 발생한 분쟁은 당사자 간 해결하여야 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제7조 (서비스 이용료)</h2>
              <p className="text-gray-700 leading-relaxed">
                서비스는 무료로 제공됩니다. 단, 향후 유료 서비스가 추가될 경우
                사전에 공지합니다.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-center text-gray-600">
                본 약관은 2025년 11월 1일부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
