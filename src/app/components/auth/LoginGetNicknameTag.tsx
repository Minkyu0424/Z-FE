'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginGetNicknameTag: React.FC = () => {
  const [formData, setFormData] = useState({
    year: '',
    month: '',
    day: '',
    nickname: '',
    tag: ''
  });

  const router = useRouter();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출된 데이터:", formData);
    // TODO: 서버로 데이터 전송 로직 구현
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center items-center mb-6">
          <Image
            src="/logo_Z.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <h2 className="text-xl font-semibold">회원가입</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">생년월일</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="year"
                placeholder="YYYY"
                value={formData.year}
                onChange={handleChange}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="text"
                name="month"
                placeholder="MM"
                value={formData.month}
                onChange={handleChange}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="text"
                name="day"
                placeholder="DD"
                value={formData.day}
                onChange={handleChange}
                className="flex-1 p-2 border rounded"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">연, 월, 일을 모두 기입해주세요</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">닉네임</label>
            <input
              type="text"
              name="nickname"
              placeholder="제트핑"
              value={formData.nickname}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <p className="text-xs text-gray-500 mt-1">한글, 영문, 숫자로 구성된 8자 이하 닉네임을 작성해주세요</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">태그</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">@</span>
              <input
                type="text"////타입 수정해야함
                name="tag"
                placeholder="abc1234"
                value={formData.tag}
                onChange={handleChange}
                className="w-full p-2 pl-6 border rounded"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button type="button" className="text-green-500 text-sm">중복확인</button>
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">영문, 숫자, '_'로 구성된 4-12자의 태그를 작성해주세요</p>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 transition duration-300"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginGetNicknameTag;