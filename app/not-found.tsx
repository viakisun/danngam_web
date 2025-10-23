import Link from 'next/link';
import Button from '@/components/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link href="/">
          <Button size="lg" className="inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}


