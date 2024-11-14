'use client';

import { callDelete, callPost } from '@/app/utils/callApi';
import { ArrowLeft } from 'lucide-react';

interface FollowingListModalProps {
  isOpen: boolean;
  onClose: () => void;
  followingCount: number;
  followingUsers: SearchUserTypes[];
}

const FollowingListModal = ({ isOpen, onClose, followingCount, followingUsers }: FollowingListModalProps) => {
  const handleFollow = async (tag: string) => await callPost('api/follow', tag);
  const handleUnFollow = async (tag: string) => await callDelete(`api/follow?tag${tag}`);

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
              <h2 className="font-bold text-xl">팔로잉</h2>
              <p className="text-sm text-gray-500">{followingCount}명</p>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[60vh]">
          {followingUsers.length === 0 ? (
            <p className="p-4 text-center text-gray-500">팔로잉하는 사용자가 없습니다.</p>
          ) : (
            followingUsers.map((user) => (
              <div key={user.tag} className="p-3 hover:bg-gray-50 border-b border-gray-200 last:border-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={`${user.nickname}의 프로필`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold truncate">{user.nickname}</h3>
                      <p className="text-gray-600 text-sm truncate">{user.tag}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleFollow(user.tag)}
                    className="ml-3 px-4 py-1.5 text-sm font-bold rounded-full flex-shrink-0
                      border border-gray-300 hover:border-red-300 hover:text-red-600 
                      hover:bg-red-50 transition-colors"
                    aria-label={`${user.nickname} 언팔로우`}
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
