// components/FollowerListModal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Follower } from "@/app/_types/main";

interface FollowerListModalProps {
  isOpen: boolean;
  onClose: () => void;
  followerCount: number;
  tag: string;
}

const mockFollowers: Follower[] = [
  {
    id: '1',
    name: '주식초보',
    username: '@stock_beginner',
    bio: '주식 공부 시작한지 1년째 | 장기 투자 선호',
    profile: '/images/avatar1.jpg',
    isFollowing: true
  },
  {
    id: '2',
    name: '존버마스터',
    username: '@hold_master',
    bio: '10년 장기 투자 | 가치투자 실천중',
    profile: '/images/avatar2.jpg',
    isFollowing: false
  },
  // 필요한 만큼 더 추가
];

const FollowerListModal: React.FC<FollowerListModalProps> = ({ 
  isOpen, 
  onClose, 
  followerCount,
  tag 
}) => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 팔로워 목록 가져오기 (실제 API 연동 전까지는 목업 데이터 사용)
  const fetchFollowerList = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // 실제 API 연동 시에는 이 부분을 API 호출로 대체
      // const response = await fetch(`/api/follows/followers?tag=${tag}`);
      // const data = await response.json();
      
      // 임시로 목업 데이터 사용
      await new Promise(resolve => setTimeout(resolve, 500)); // 로딩 시뮬레이션
      setFollowers(mockFollowers);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : '팔로워 목록을 불러오는데 실패했습니다');
    } finally {
      setIsLoading(false);
    }
  };

  // 팔로우/언팔로우 토글 (임시 구현)
  const toggleFollow = async (userId: string) => {
    setFollowers(prev => 
      prev.map(follower => 
        follower.id === userId 
          ? { ...follower, isFollowing: !follower.isFollowing }
          : follower
      )
    );
  };

  // 모달이 열릴 때 데이터 가져오기
  useEffect(() => {
    if (isOpen && tag) {
      fetchFollowerList();
    }
  }, [isOpen, tag]);

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

        {/* 로딩 상태 */}
        {isLoading && (
          <div className="p-4 text-center text-gray-500">
            로딩 중...
          </div>
        )}

        {/* 에러 상태 */}
        {error && (
          <div className="p-4 text-center text-red-500">
            {error}
          </div>
        )}

        {/* 팔로워 리스트 */}
        <div className="overflow-y-auto max-h-[60vh]">
          {followers.map((follower) => (
            <div 
              key={follower.id}
              className="p-3 hover:bg-gray-50 border-b border-gray-200 last:border-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                    {follower.profile && (
                      <img 
                        src={follower.profile} 
                        alt={follower.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold truncate">{follower.name}</h3>
                    <p className="text-gray-600 text-sm truncate">{follower.username}</p>
                    <p className="text-sm text-gray-700 mt-0.5 line-clamp-1">
                      {follower.bio}
                    </p>
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