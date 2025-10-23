// 용어 사전 - 일관된 용어 사용을 위한 상수 정의

export const TERMINOLOGY = {
  // 사용자 유형
  OPERATOR: "운용자",
  OPERATORS: "운용자",
  FARM_OWNER: "농가",
  FARM_OWNERS: "농가",
  INSTITUTION: "지원기관",
  INSTITUTIONS: "지원기관",
  
  // 이전 용어 (사용 금지)
  WORKER_OLD: "작업자", // 사용하지 말 것
  FARMER_OLD: "농부", // 사용하지 말 것
  
  // 장비 관련
  EQUIPMENT: "농기계",
  EQUIPMENT_PLURAL: "농기계",
  TRACTOR: "트랙터",
  DRONE: "무인방제기",
  TRANSPLANTER: "이양기",
  COMBINE: "콤바인",
  
  // 작업 관련
  JOB: "작업",
  JOB_POSTING: "작업 공고",
  JOB_PROPOSAL: "작업 제안",
  SERVICE_REQUEST: "서비스 요청",
  
  // 플랫폼 기능
  REPUTATION: "평판",
  RATING: "평점",
  WORK_HISTORY: "작업 이력",
  EQUIPMENT_INFO: "장비 정보",
  CERTIFICATION: "자격증",
  
  // 액션
  REGISTER_EQUIPMENT: "장비 등록",
  POST_JOB: "작업 공고 등록",
  SUBMIT_PROPOSAL: "작업 제안",
  ACCEPT_PROPOSAL: "제안 승인",
  COMPLETE_JOB: "작업 완료",
  LEAVE_REVIEW: "평가 남기기"
} as const;

// 사용 예시:
// import { TERMINOLOGY } from '@/constants/terminology';
// <h1>{TERMINOLOGY.OPERATOR}를 위한 단감</h1>


