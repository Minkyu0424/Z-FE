'use client';

import React, { useState } from 'react';
import Image from 'next/image';



// const client_id = process.env.KAKAO_CLIENT_ID ;
// const redirect_uri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || '';
// const response_type = process.env.KAKAO_RESPONSE_TYPE || 'code';

//위 코드로 실행해봤는데 실행이 안돔 env에 오류 나는 것 같은데 못잡음
const client_id = "7635d167a2de62a2bd1929ca902ffbec"
const redirect_uri ="http://localhost:3000/login"
const response_type ="code"

const LoginStartForm: React.FC = () => {
    const handleKakaoLogin = () => {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=${response_type}`;
      window.location.href = kakaoAuthUrl;
    };

  return(
    <div className='flex flex-col justify-center items-center  min-h-screen'>
          <div className="flex flex-col justify-center items-center bg-gray-100 gap-10">
       <div className="flex justify-center items-center">
          <Image
            src="/logo_Z.jpg"
           alt="Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
    </div>
    <div className="flex flex-col text-centers justify-center items-center gap-7">
      <h2>Z에서 무슨일이???</h2>
      <h5>지금 바로 시작해보세요!</h5>
    </div>
    <div className="flex justify-cener items-center">
    <button
        onClick={handleKakaoLogin}
        className="py-200 px- rounded-md w-64 flex items-center justify-center"
      >
        <Image
          src="/kakao_login_large_narrow.png"
          alt="Kakao Logo"
          width={160}
          height={200}
         
        />
      </button>

    </div>
    </div>

    </div>
  
  );
};

export default LoginStartForm;