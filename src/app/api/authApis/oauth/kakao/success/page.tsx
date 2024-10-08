'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function KakaoSuccess() {
  const [message, setMessage] = useState('카카오 로그인 성공!');
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setMessage(`카카오 로그인 성공! 인증 코드: ${code}`);
    }
  }, [searchParams]);

  return (
    <div>
      <h1>카카오 로그인 성공</h1>
      <p>{message}</p>
      <a href="/">홈으로 돌아가기</a>//메인페이지로 라우팅 필요
    </div>
  );
}
