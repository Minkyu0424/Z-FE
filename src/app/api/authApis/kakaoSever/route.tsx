import { NextRequest, NextResponse } from 'next/server';

const CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect('/login?error=no_code');
  }

  try {
    // 1. 카카오 서버로부터 액세스 토큰 받기
    const tokenResponse = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID!,
        redirect_uri: REDIRECT_URI!,
        code,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to fetch token from Kakao');
    }

    const tokenData = await tokenResponse.json();

    // 2. 백엔드 API에 카카오 액세스 토큰 전송
    const apiResponse = await fetch(`${API_URL}/api/auth/kakao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token: tokenData.access_token }),
    });

    if (!apiResponse.ok) {
      throw new Error('Failed to authenticate with the server');
    }

    const userData = await apiResponse.json();

    // 3. 서버 응답에 따라 리다이렉트
    if (userData.isNewUser) {
      // 새 사용자인 경우 회원가입 폼으로 리다이렉트
      return NextResponse.redirect('/auth/signupForm');
    } else {
      // 기존 사용자인 경우 성공 페이지로 리다이렉트
      // JWT 토큰이 응답에 포함되어 있다고 가정
      const { token } = userData;

      // JWT 토큰을 쿠키에 저장
      const response = NextResponse.redirect('/auth/oauth/kakao/success');
      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600, // 1시간
        path: '/',
      });

      return response;
    }
  } catch (error) {
    console.error('Error in Kakao login process:', error);
    return NextResponse.redirect('/login?error=login_failed');
  }
}
