import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  console.log(code);

  if (!code) {
    return NextResponse.json({ error: '인증 코드가 없습니다.' }, { status: 400 });
  }

  try {
    const response = await fetch(`http://localhost:8080/api/auth/kakao/redirect?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
    });

    console.log(response.headers);

    // 백엔드로부터 받은 Set-Cookie 헤더 추출
    const setCookieHeader = response.headers.get('set-cookie');
    console.log('setCookieHeader', setCookieHeader);

    // 클라이언트로의 응답 생성 및 Set-Cookie 헤더 설정
    const data = await response.json().then((data) => data.data);
    let redirectUrl = '/';

    if (data.requiredRegister) {
      redirectUrl = '/register';
    }

    const redirectResponse = NextResponse.redirect(`http://localhost:3000${redirectUrl}`);
    if (setCookieHeader) {
      redirectResponse.headers.set('Set-Cookie', setCookieHeader);
    }

    return redirectResponse;
  } catch (error) {
    console.error('카카오 인증 처리 중 오류:', error);
    return NextResponse.json({ error: '인증 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
