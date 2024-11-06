'use client';

import React, { useState } from 'react';
import { ArrowLeft, Camera, MoreHorizontal, X } from 'lucide-react';
import Link from 'next/link';
import MainPost from '../main/MainPost';

const MyProfile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    username: "하츄핑",
    handle: "@posilping",
    bio: "좋은 개발자가 되도록 노력중인 사람이에요.",
    following: 800,
    followers: 1232
  });

  const [editForm, setEditForm] = useState({ ...profile });

  // 트윗 데이터를 MainPost 컴포넌트에 맞게 수정
  const posts = [
    {
      id: 1,
      profile: "/mock/profile1.png",
      nickname: "하츄핑",
      userId: "posilping",
      content: "이 블로그 포스트에서는 일상 생활에 길게 통합될 수 있는 5가지 핵심 습관을 소개합니다. 첫 번째는 목표 설정과 시간 관리입니다. 이는 게임적 성취와 전문적 성장을 위한 기초를 마련합니다.",
      createdAt: "10:26",
      totalLikes: 12,
      totalComment: 6,
      tag: "습관형성",
      files: []
    }
  ];

  const handleProfileUpdate = () => {
    setProfile(editForm);
    setIsEditModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white">
      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <button onClick={() => setIsEditModalOpen(false)} className="hover:bg-gray-100 p-2 rounded-full">
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-bold">프로필 수정</h2>
              </div>
              <button
                onClick={handleProfileUpdate}
                className="px-4 py-1 bg-black text-white rounded-full font-bold hover:bg-gray-800"
              >
                저장
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  value={editForm.username}
                  onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  소개
                </label>
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:bg-gray-200 rounded-full p-2">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="font-bold text-xl">{profile.username}</h2>
            <p className="text-sm text-gray-500">내 트윗</p>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="relative">
        {/* Banner */}
        <div className="h-32 bg-blue-100 relative">
          <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
            <Camera className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-4">
          <div className="w-32 h-32 rounded-full bg-blue-100 border-4 border-white relative">
            <button className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="px-4 py-1.5 border border-gray-300 rounded-full font-semibold hover:bg-gray-50"
          >
            프로필 수정
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="mt-16 p-4 border-b">
        <h1 className="font-bold text-xl">{profile.username}</h1>
        <p className="text-gray-600">{profile.handle}</p>
        <p className="mt-2">{profile.bio}</p>
        
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

export default MyProfile;