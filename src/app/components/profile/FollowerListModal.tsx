'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Follower {
  id: string;
  name: string;
  username: string;
  bio: string;
  isFollowing: boolean;
}

interface FollowerListModalProps {
  isOpen: boolean;
  onClose: () => void;
  followerCount: number;
}

const FollowerListModal: React.FC<FollowerListModalProps> = ({ 
  isOpen, 
  onClose, 
  followerCount 
}) => {
  // 팔로워 목록 상태 관리
  const [followers, setFollowers] = useState<Follower[]>([
    { 
      id: '1', 
      name: '주식초보', 
      username: '@stock_beginner', 
      bio: '주식 공부 시작한지 1년째 | 장기 투자 선호',
      isFollowing: true
    },
    { 
      id: '2', 
      name: '존버마스터', 
      username: '@hold_master', 
      bio: '10년 장기 투자 | 가치투자 실천중',
      isFollowing: false
    },
    { 
      id: '3', 
      name: '슈퍼개미', 
      username: '@super_investor', 
      bio: '국내주식 전문 | 차트분석가',
      isFollowing: true
    },
    { 
      id: '4', 
      name: '배당투자', 
      username: '@dividend_king', 
      bio: '배당주 전문 | 월 50만원 배당금 수익',
      isFollowing: false
    },
    { 
      id: '5', 
      name: '경제뉴스', 
      username: '@economy_news', 
      bio: '경제 뉴스 업데이트 | 시장 분석',
      isFollowing: true
    },
  ]);

  const toggleFollow = (userId: string) => {
    setFollowers(prevFollowers => 
      prevFollowers.map(follower => 
        follower.id === userId 
          ? { ...follower, isFollowing: !follower.isFollowing }
          : follower
      )
    );
  };

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
              <h2 className="font-bold text-xl">팔로워</h2>
              <p className="text-sm text-gray-500">{followerCount}명</p>
            </div>
          </div>
        </div>

        {/* 팔로워 리스트 */}
        <div className="overflow-y-auto max-h-[60vh]">
          {followers.map((follower) => (
            <div 
              key={follower.id}
              className="p-3 hover:bg-gray-50 border-b border-gray-200 last:border-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold truncate">{follower.name}</h3>
                    <p className="text-gray-600 text-sm truncate">{follower.username}</p>
                    <p className="text-sm text-gray-700 mt-0.5 line-clamp-1">{follower.bio}</p>
                  </div>
                </div>
                <button 
                  onClick={() => toggleFollow(follower.id)}
                  className={`ml-3 px-3 py-1.5 text-sm font-bold rounded-full flex-shrink-0 
                    ${follower.isFollowing 
                      ? 'border border-gray-300 hover:border-red-300 hover:text-red-600 hover:bg-red-50' 
                      : 'bg-black text-white hover:bg-gray-800'
                    } transition-colors`}
                >
                  {follower.isFollowing ? '팔로잉' : '팔로우'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowerListModal;