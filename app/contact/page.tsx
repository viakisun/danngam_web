"use client";

import Section from "@/components/Section";
import Button from "@/components/Button";
import { useState } from "react";
import { Mail, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to an API endpoint
    console.log("Form submitted:", formData);
    setTimeout(() => {
      alert("문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <MessageCircle className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            <span className="gradient-text">문의하기</span>
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            궁금한 점이 있으신가요? 언제든지 문의해주세요
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-6">메시지 보내기</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  required
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  required
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  문의 유형 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="general">일반 문의</option>
                  <option value="technical">기술 지원</option>
                  <option value="report">신고 관련</option>
                  <option value="partnership">제휴 문의</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text mb-2"
                >
                  내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  required
                  placeholder="문의 내용을 입력하세요 (최대 1000자)"
                  maxLength={1000}
                ></textarea>
                <div className="text-right text-sm text-text-lighter mt-2">
                  {formData.message.length} / 1000
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "전송 중..." : "문의 보내기"}
                {!isSubmitting && (
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-6">연락처 정보</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-1">
                      이메일
                    </h3>
                    <a
                      href="mailto:support@danngam.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      support@danngam.com
                    </a>
                    <p className="text-sm text-text-lighter mt-1">
                      24시간 이내 답변
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text mb-1">
                      운영 시간
                    </h3>
                    <p className="text-text-light">평일 09:00 - 18:00</p>
                    <p className="text-sm text-text-lighter mt-1">
                      주말 및 공휴일 제외
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="card bg-primary-50 border-2 border-primary-100">
                <h3 className="text-lg font-semibold text-text mb-3">
                  💡 자주 묻는 질문
                </h3>
                <p className="text-text-light mb-4">
                  FAQ 페이지에서 답을 먼저 찾아보세요
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  FAQ 페이지로 이동 →
                </a>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">빠른 응답 보장</h3>
                <p className="text-primary-50">
                  모든 문의는 영업일 기준 24시간 이내에 답변드립니다. 긴급한
                  사항은 이메일로 문의해주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Info */}
      <Section background="gray">
        <div className="card max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-text mb-4">기타 문의 사항</h3>
          <p className="text-text-light mb-6">
            서비스 이용 중 불편한 점이나 개선 사항이 있으시면 언제든지
            알려주세요. 여러분의 의견은 단감을 더 나은 서비스로 만드는 데 큰
            도움이 됩니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium">
              버그 리포트
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium">
              기능 제안
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium">
              파트너십
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium">
              피드백
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
