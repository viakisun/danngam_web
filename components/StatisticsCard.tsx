import React from "react";
import { LucideIcon } from "lucide-react";

interface StatisticsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export default function StatisticsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatisticsCardProps) {
  return (
    <div className="card card-hover text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-3xl font-bold text-text mb-2">
        {value}
      </h3>
      
      <p className="text-text-light mb-2">{title}</p>
      
      {description && (
        <p className="text-sm text-text-light">{description}</p>
      )}
      
      {trend && (
        <div className={`mt-3 text-sm font-semibold ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.isPositive ? '↑' : '↓'} {trend.value}
        </div>
      )}
    </div>
  );
}

