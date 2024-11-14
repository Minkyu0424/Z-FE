'use client';

import { callDelete, callPost } from '@/app/utils/callApi';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface FollowerListModalProps {
  isOpen: boolean;
  onClose: () => void;
  followerCount: number;
  tag: string;
}

const FollowerListModal: React.FC<FollowerListModalProps> = ({ isOpen, onClose, followerCount, tag }) => {
  const handleFollow = async (tag: string) => await callPost('api/follow', tag);
  const handleUnFollow = async (tag: string) => await callDelete(`api/follow?tag${tag}`);
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleFollow = async (userId: string) => {
    setFollowers((prev) =>
      prev.map((follower) => (follower.id === userId ? { ...follower, isFollowing: !follower.isFollowing } : follower)),
    );
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" role="dialog">
      <div className="bg-white w-full max-w-sm rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center p-3">
            <button onClick={onClose} className="p-1.5 -ml-1.5 hover:bg-gray-100 rounded-full" aria-label="닫기">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="ml-3">
              <h2 className="font-bold text-xl">팔로워</h2>
              <p className="text-sm text-gray-500">{followerCount}명</p>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh]">
          {followers.length === 0 && !isLoading && !error ? (
            <p className="p-4 text-center text-gray-500">팔로워가 없습니다.</p>
          ) : (
            followers.map((follower) => (
              <div key={follower.id} className="p-3 hover:bg-gray-50 border-b border-gray-200 last:border-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                      {follower.profile ? (
                        <img src={follower.profile} alt={follower.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold truncate">{follower.name}</h3>
                      <p className="text-gray-600 text-sm truncate">{follower.username}</p>
                      {follower.bio && <p className="text-sm text-gray-700 mt-0.5 line-clamp-1">{follower.bio}</p>}
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFollow(follower.id)}
                    className={`ml-3 px-3 py-1.5 text-sm font-bold rounded-full flex-shrink-0 
                     ${
                       follower.isFollowing
                         ? 'border border-gray-300 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                         : 'bg-black text-white hover:bg-gray-800'
                     } transition-colors`}
                    aria-label={`${follower.name} ${follower.isFollowing ? '팔로잉' : '팔로우'}`}
                  >
                    {follower.isFollowing ? '팔로잉' : '팔로우'}
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

export default FollowerListModal;
