import { NextRequest, NextResponse } from 'next/server';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;
const LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_SERVER;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  if (!code) {
    return NextResponse.redirect('/login?error=no_code');
  }

  try {
    const response = await fetch(`${SERVER_URL}/api/auth/kakao/redirect?code=${code}`, {
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
    });
    const setCookieHeader = response.headers.get('Set-Cookie');

    const data = await response.json();
    let redirectUrl = '/';

    if (data.data.requiredRegister) {
      redirectUrl = `/signupForm`;
    }
    const redirectResponse = NextResponse.redirect(LOCAL_URL + redirectUrl);

    if (setCookieHeader) {
      redirectResponse.headers.set('Set-Cookie', setCookieHeader);
    }
    return redirectResponse;
  } catch (error) {
    return NextResponse.json({ error: '인증 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
