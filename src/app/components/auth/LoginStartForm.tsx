'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const client_id = "7635d167a2de62a2bd1929ca902ffbec"
const redirect_uri ="https://localhost3000"
const response_type ="code"




const LoginStartForm: React.FC = () => {
    const handleKakaoLogin = () => {
      const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=${response_type}`;
      window.location.href = kakaoAuthUrl;
    };

  return(
    
    <div className="flex justify-center items-center bg-black">
       <div className="text-center">
          <Image
            src="/logo_Z.jpg"
           alt="Logo"
          width={200}
          height={200}
          className="mx-auto"
        />
    </div>
    <div className="flex text-centers">
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
          width={200}
          height={200}
          className="mr-2"
        />
      </button>

    </div>
    </div>
  
  );
};

export default LoginStartForm;