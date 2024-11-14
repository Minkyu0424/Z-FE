'use client';

import { useUserStore } from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { getRandomProfileImage } from '@/app/utils/randomProfile';
import { ArrowLeft, Camera } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import MainPost from '../main/MainPost';
import FollowerListModal from './FollowerListModal';
import FollowingListModal from './FollowingListModal';

const MyProfile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [postDatas, setPostDatas] = useState<PostDetailTypes[]>([]);
  const [followers, setFollowers] = useState<SearchUserTypes[]>([]);
  const [followings, setFollowings] = useState<SearchUserTypes[]>([]);
  const [userData, setUserData] = useState<SearchUserTypes | null>(null);
  const profile = getRandomProfileImage();
  const { user } = useUserStore();
  const fetchPosts = useCallback(async () => {
    const resData = await callGet(`/api/mainPosts?tag=${user?.tag}`);
    setPostDatas(resData.data);
  }, [user]);

  const fetchFollower = useCallback(async () => {
    const followerData = await callGet(`/api/followApis/follower?tag=${user?.tag}`);
    setFollowers(followerData.data);
  }, [user]);

  const fetchFollowing = useCallback(async () => {
    const followingData = await callGet(`/api/followApis/following?tag=${user?.tag}`);
    setFollowings(followingData.data);
  }, [user]);

  const getUser = async () => {
    const resData = await callGet(`/api/search/me?tag=${user?.tag}`);
    resData.success && setUserData(resData.data);
  };

  useEffect(() => {
    fetchPosts();
    getUser();
    fetchFollower();
    fetchFollowing();
  }, [fetchPosts]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white h-screen overflow-y-auto">
      <FollowingListModal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        followingCount={followings.length}
        followingUsers={followings}
      />

      <FollowerListModal
        isOpen={isFollowerModalOpen}
        onClose={() => setIsFollowerModalOpen(false)}
        followerCount={followers.length}
        followerUsers={followers}
      />

      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="hover:bg-gray-200 rounded-full p-2">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h2 className="font-bold text-xl ml-4">My profile</h2>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="relative p-4 w-full">
          <div className="mb-4">
            <div className="w-20 h-20 rounded-full bg-blue-100 border-4 relative">
              <button className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </button>
              <Image src={profile} fill alt="profile" className="rounded-full" />
            </div>
          </div>
          <div className="flex justify-end -mt-12">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="px-4 py-1.5 border border-gray-300 rounded-full font-semibold hover:bg-gray-50"
            >
              프로필 수정
            </button>
          </div>
        </div>
        <div className="px-4 pb-4 border-b flex w-full justify-between">
          <div>
            <h1 className="font-bold text-xl">{userData?.nickname}</h1>
            <p className="text-gray-600">#{userData?.tag}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <button onClick={() => setIsFollowingModalOpen(true)} className="text-gray-600 hover:underline">
              <span className="font-bold text-black">{followings.length}</span> Following
            </button>
            <button onClick={() => setIsFollowerModalOpen(true)} className="text-gray-600 hover:underline">
              <span className="font-bold text-black">{followers.length}</span> Followers
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col  h-full overflow-y-auto">
        {postDatas.map((post) => (
          <MainPost key={post.id} post={post} onNewPost={fetchPosts} />
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
