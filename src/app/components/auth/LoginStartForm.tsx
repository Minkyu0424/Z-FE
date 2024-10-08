'use client';

import React from 'react';
import Image from 'next/image';

const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID || "7635d167a2de62a2bd1929ca902ffbec";//이거 env로 넣으면 에러남
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || "http://localhost:3000/login";
const RESPONSE_TYPE = "code";

const LoginStartForm: React.FC = () => {
    const handleKakaoLogin = () => {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}`;
      window.location.href = kakaoAuthUrl;
    };

  return(
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
      <div className="flex flex-col justify-center items-center gap-10 p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center">
          <Image
            src="/logo_Z.jpg"
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
        </div>
        <div className="flex flex-col text-center justify-center items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Z에서 무슨일이?</h2>
          <h5 className="text-lg text-gray-600">지금 바로 시작해보세요!</h5>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleKakaoLogin}
            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <Image
              src="/kakao_login_large_narrow.png"
              alt="Kakao 로그인"
              width={160}
              height={45}
              className="rounded-md"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginStartForm;