import React from "react";
import { Star, Wrench } from "lucide-react";

interface EquipmentCardProps {
  manufacturer: string;
  model: string;
  year: number;
  type: string;
  specs: string[];
  operatorName: string;
  rating: number;
  completedJobs: number;
  image?: string;
}

export default function EquipmentCard({
  manufacturer,
  model,
  year,
  type,
  specs,
  operatorName,
  rating,
  completedJobs,
  image,
}: EquipmentCardProps) {
  return (
    <div className="card card-hover group">
      {/* 장비 이미지 영역 (옵션) */}
      {image && (
        <div className="mb-4 h-48 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={`${manufacturer} ${model}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 장비 타입 뱃지 */}
      <div className="mb-3">
        <span className="badge badge-primary text-sm">{type}</span>
      </div>

      {/* 장비 정보 */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <Wrench className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text mb-1">
            {manufacturer} {model}
          </h3>
          <p className="text-sm text-text-light">제조년도: {year}년</p>
        </div>
      </div>

      {/* 주요 사양 */}
      <div className="mb-4 space-y-2">
        <p className="text-sm font-semibold text-text">주요 사양</p>
        <ul className="space-y-1">
          {specs.map((spec, idx) => (
            <li key={idx} className="text-sm text-text-light flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
              {spec}
            </li>
          ))}
        </ul>
      </div>

      {/* 운용자 정보 */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-text">{operatorName}</p>
            <p className="text-xs text-text-light">운용자</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
              <span className="text-sm font-bold text-text">{rating.toFixed(1)}</span>
            </div>
            <p className="text-xs text-text-light">{completedJobs}건 완료</p>
          </div>
        </div>
      </div>
    </div>
  );
}

