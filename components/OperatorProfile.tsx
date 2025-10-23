import React from "react";
import { Star, Award, MapPin, Wrench } from "lucide-react";

interface Equipment {
  type: string;
  manufacturer: string;
  model: string;
  year: number;
  specs: string[];
}

interface OperatorProfileProps {
  name: string;
  location: string;
  equipmentList: Equipment[];
  rating: number;
  totalJobs: number;
  yearsOfExperience: number;
  specialties: string[];
  certifications?: string[];
}

export default function OperatorProfile({
  name,
  location,
  equipmentList,
  rating,
  totalJobs,
  yearsOfExperience,
  specialties,
  certifications = [],
}: OperatorProfileProps) {
  return (
    <div className="card card-hover">
      {/* 프로필 헤더 */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-text mb-2">{name}</h3>
          <div className="flex items-center gap-2 text-text-light mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-secondary-500 fill-secondary-500" />
              <span className="font-bold text-text">{rating.toFixed(1)}</span>
            </div>
            <div className="text-sm text-text-light">
              완료 작업 <span className="font-semibold text-text">{totalJobs}건</span>
            </div>
            <div className="text-sm text-text-light">
              경력 <span className="font-semibold text-text">{yearsOfExperience}년</span>
            </div>
          </div>
        </div>
      </div>

      {/* 보유 장비 */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Wrench className="w-5 h-5 text-primary-500" />
          <h4 className="font-bold text-text">보유 장비</h4>
        </div>
        <div className="space-y-3">
          {equipmentList.map((equipment, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-3 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-text">
                  {equipment.manufacturer} {equipment.model}
                </span>
                <span className="text-xs text-text-light">{equipment.year}년</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {equipment.specs.map((spec, specIdx) => (
                  <span
                    key={specIdx}
                    className="text-xs bg-white px-2 py-1 rounded-md text-text-light border border-gray-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 전문 분야 */}
      <div className="mb-6">
        <h4 className="font-bold text-text mb-3">전문 분야</h4>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, idx) => (
            <span
              key={idx}
              className="badge badge-secondary"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* 자격증 */}
      {certifications.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-primary-500" />
            <h4 className="font-bold text-text">자격증</h4>
          </div>
          <ul className="space-y-1">
            {certifications.map((cert, idx) => (
              <li key={idx} className="text-sm text-text-light flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

