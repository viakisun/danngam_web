'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          앗, 문제가 발생했습니다!
        </h2>
        <p className="text-gray-600 mb-8">
          페이지를 로드하는 중에 오류가 발생했습니다.
        </p>
        <Button onClick={() => reset()}>다시 시도</Button>
      </div>
    </div>
  );
}


