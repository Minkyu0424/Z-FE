'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Following, fetchFollowings, unfollowUser } from '@/app/api/followApis/following/route';

interface FollowingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  followingCount: number;
  tag: string;
}

const FollowingListModal: React.FC<FollowingListModalProps> = ({ 
  isOpen, 
  onClose, 
  followingCount,
  tag 
}) => {
  const [followingUsers, setFollowingUsers] = useState<Following[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 팔로잉 목록 가져오기
  const fetchFollowingList = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const followingList = await fetchFollowings(tag);
      setFollowingUsers(followingList);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : '팔로잉 목록을 불러오는데 실패했습니다');
    } finally {
      setIsLoading(false);
    }
  }, [tag]);

  // 언팔로우 처리
  const handleUnfollow = async (userId: string) => {
    try {
      await unfollowUser(userId);
      // 성공시 목록에서 제거
      setFollowingUsers(prev => prev.filter(user => user.id !== userId));
    } catch (err) {
      console.error('언팔로우 실패:', err);
      // 에러 처리 (예: 토스트 메시지 표시)
    }
  };

  // 모달이 열릴 때 데이터 가져오기
  useEffect(() => {
    if (isOpen && tag) {
      fetchFollowingList();
    } else {
      // 모달이 닫힐 때 상태 초기화
      setFollowingUsers([]);
      setError(null);
    }
  }, [isOpen, tag, fetchFollowingList]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog">
      <div 
        className="bg-white w-full max-w-sm rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center p-3">
            <button 
              onClick={onClose}
              className="p-1.5 -ml-1.5 hover:bg-gray-100 rounded-full"
              aria-label="닫기"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="ml-3">
              <h2 className="font-bold text-xl">팔로잉</h2>
              <p className="text-sm text-gray-500">{followingCount}명</p>
            </div>
          </div>
        </div>

        {/* 로딩 상태 */}
        {isLoading && (
          <div className="p-4 text-center text-gray-500" role="status">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2">로딩 중...</p>
          </div>
        )}

        {/* 에러 상태 */}
        {error && (
          <div className="p-4 text-center text-red-500" role="alert">
            <p>{error}</p>
            <button 
              onClick={fetchFollowingList}
              className="mt-2 text-sm text-blue-500 hover:underline"
            >
              다시 시도
            </button>
          </div>
        )}

        {/* 팔로잉 리스트 */}
        <div className="overflow-y-auto max-h-[60vh]">
          {followingUsers.length === 0 && !isLoading && !error ? (
            <p className="p-4 text-center text-gray-500">팔로잉하는 사용자가 없습니다.</p>
          ) : (
            followingUsers.map((user) => (
              <div 
                key={user.id}
                className="p-3 hover:bg-gray-50 border-b border-gray-200 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                      {user.profile ? (
                        <img 
                          src={user.profile} 
                          alt={`${user.name}의 프로필`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold truncate">{user.name}</h3>
                      <p className="text-gray-600 text-sm truncate">{user.username}</p>
                      {user.bio && (
                        <p className="text-sm text-gray-700 mt-0.5 line-clamp-1">
                          {user.bio}
                        </p>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleUnfollow(user.id)}
                    className="ml-3 px-4 py-1.5 text-sm font-bold rounded-full flex-shrink-0
                      border border-gray-300 hover:border-red-300 hover:text-red-600 
                      hover:bg-red-50 transition-colors"
                    aria-label={`${user.name} 언팔로우`}
                  >
                    팔로잉
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowingListModal;