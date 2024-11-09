'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface User {
  id: string;
  name: string;
  username: string;
  bio: string;
  isFollowing?: boolean;
}

interface FollowListModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'followers' | 'following';
  count: number;
}

const FollowListModal: React.FC<FollowListModalProps> = ({ isOpen, onClose, type, count }) => {
  // 샘플 데이터
  const mockUsers: User[] = [
    { 
      id: '1', 
      name: '주식왕', 
      username: '@stock_master', 
      bio: '주식 투자 전문가 | 10년차 펀드매니저',
      isFollowing: true 
    },
    { 
      id: '2', 
      name: '테크투자러', 
      username: '@tech_investor', 
      bio: '테크 섹터 전문 | AI/로봇/자율주행',
      isFollowing: false 
    },
    { 
      id: '3', 
      name: '가치투자', 
      username: '@value_finder', 
      bio: '가치투자 | 장기투자 선호',
      isFollowing: true 
    },
    { 
      id: '4', 
      name: '단타왕', 
      username: '@day_trader', 
      bio: '단기 매매 전문 | 차트 분석가',
      isFollowing: false 
    },
    { 
      id: '5', 
      name: '배당주의달인', 
      username: '@dividend_expert', 
      bio: '배당주 전문 | 월 100만원 배당금',
      isFollowing: true 
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200">
          <div className="flex items-center p-3">
            <button 
              onClick={onClose}
              className="p-1.5 -ml-1.5 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="ml-3">
              <h2 className="font-bold text-xl">
                {type === 'followers' ? '팔로워' : '팔로잉'}
              </h2>
              <p className="text-sm text-gray-500">{count}명</p>
            </div>
          </div>
        </div>

        {/* 리스트 */}
        <div className="overflow-y-auto max-h-[60vh]">
          {mockUsers.map((user) => (
            <div 
              key={user.id}
              className="p-3 hover:bg-gray-50 border-b border-gray-200 last:border-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold truncate">{user.name}</h3>
                    <p className="text-gray-600 text-sm truncate">{user.username}</p>
                    <p className="text-sm text-gray-700 mt-0.5 line-clamp-1">{user.bio}</p>
                  </div>
                </div>
                <button 
                  className={`ml-3 px-3 py-1.5 text-sm font-bold rounded-full flex-shrink-0 ${
                    user.isFollowing 
                      ? 'border border-gray-300 hover:border-red-300 hover:text-red-600 hover:bg-red-50' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {user.isFollowing ? '팔로잉' : '팔로우'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowListModal;