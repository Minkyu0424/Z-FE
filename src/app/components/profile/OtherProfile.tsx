'use client';

import React from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import MainPost from '../main/MainPost';

const OtherProfile = () => {
  const profile = {
    username: "포실핑",
    handle: "@posilping",
    bio: "좋은 개발자가 되도록 노력중인 사람이에요.",
    following: 800,
    followers: 1232
  };

  // MainPost 컴포넌트에 맞게 데이터 구조 수정
  const posts = [
    {
      id: 1,
      profile: "/mock/profile1.png", // 프로필 이미지 경로
      nickname: "포실핑",
      userId: "posilping",
      content: "이 블로그 포스트에서는 일상 생활에 길게 통합될 수 있는 5가지 핵심 습관을 소개합니다. 첫 번째는 목표 설정과 시간 관리입니다. 이는 게임적 성취와 전문적 성장을 위한 기초를 마련합니다.",
      createdAt: "10:26",
      totalLikes: 12,
      totalComment: 6,
      tag: "습관형성",
      files: [] // 이미지 파일이 있다면 여기에 추가
    }
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white">
      {/* Header */}
      <div className="border-b p-4 flex items-center space-x-4">
        <Link href="/" className="hover:bg-gray-200 rounded-full p-2">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="font-bold text-xl">{profile.username}</h2>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="w-24 h-24 rounded-full bg-blue-100 mb-4">
              {/* Profile image placeholder */}
            </div>
            <h1 className="font-bold text-xl">{profile.username}</h1>
            <p className="text-gray-600">{profile.handle}</p>
            <p className="mt-2">{profile.bio}</p>
          </div>
          <button className="px-4 py-2 rounded-full bg-black text-white font-bold hover:bg-gray-800">
            Follow
          </button>
        </div>
        
        <div className="flex space-x-4 mt-4">
          <Link href="#" className="text-gray-600 hover:underline">
            <span className="font-bold text-black">{profile.following}</span> Following
          </Link>
          <Link href="#" className="text-gray-600 hover:underline">
            <span className="font-bold text-black">{profile.followers}</span> Followers
          </Link>
        </div>
      </div>

      {/* Posts section using MainPost component */}
      <div className="flex flex-col">
        {posts.map((post) => (
          <MainPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default OtherProfile;