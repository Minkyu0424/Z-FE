import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const response = NextResponse.json({ message: '로그아웃 완료, 쿠키 삭제됨' });

  // 각각의 쿠키를 개별 Set-Cookie 헤더로 설정
  response.headers.append(
    'Set-Cookie',
    'refreshToken=; path=/; domain=localhost; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly',
  );

  response.headers.append(
    'Set-Cookie',
    'accessToken=; path=/; domain=localhost; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; HttpOnly',
  );

  return response;
}
