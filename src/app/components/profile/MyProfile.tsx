'use client';

import { mockPosts } from '@/app/data/mockPost';
import { useUserStore } from '@/app/store/store';
import { ArrowLeft, Camera } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import MainPost from '../main/MainPost';
import EditProfileModal from './EditProfileModal';
import FollowerListModal from './FollowerListModal';
import FollowingListModal from './FollowingListModal';

interface Profile {
  username: string;
  handle: string;
  tag: string;
  bio: string;
  following: number;
  followers: number;
}

const MyProfile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const { user } = useUserStore();
  const createTagFromHandle = (handle: string): string => {
    return handle.replace('@', '');
  };

  const initialHandle = '@Warren_Buffett';

  const [profile, setProfile] = useState<Profile>({
    username: '투자초보',
    handle: initialHandle,
    tag: createTagFromHandle(initialHandle),
    bio: '좋은 펀드매니져가 되도록 노력중인 사람이에요.',
    following: 800,
    followers: 1232,
  });

  const myPosts = mockPosts.filter((post) => post.userId === 'user1');

  const handleProfileUpdate = (updatedProfile: Partial<Profile>) => {
    setProfile((prev) => {
      const newProfile = { ...prev, ...updatedProfile };
      if (updatedProfile.handle) {
        newProfile.tag = createTagFromHandle(updatedProfile.handle);
      }
      return newProfile;
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white h-screen">
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onUpdate={(form) => handleProfileUpdate(form)}
      />

      <FollowingListModal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        followingCount={profile.following}
        tag={profile.tag}
      />

      <FollowerListModal
        isOpen={isFollowerModalOpen}
        onClose={() => setIsFollowerModalOpen(false)}
        followerCount={profile.followers}
        tag={profile.tag}
      />

      {/* Header */}
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

      {/* Profile Info */}
      <div className="relative p-4">
        {/* Profile Picture */}
        <div className="mb-4">
          <div className="w-32 h-32 rounded-full bg-blue-100 border-4 border-white relative">
            <button className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-end -mt-10">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="px-4 py-1.5 border border-gray-300 rounded-full font-semibold hover:bg-gray-50"
          >
            프로필 수정
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="px-4 pb-4 border-b">
        <h1 className="font-bold text-xl">{profile.username}</h1>
        <p className="text-gray-600">{profile.handle}</p>
        <p className="mt-2">{profile.bio}</p>

        <div className="flex space-x-4 mt-4">
          <button onClick={() => setIsFollowingModalOpen(true)} className="text-gray-600 hover:underline">
            <span className="font-bold text-black">{profile.following}</span> Following
          </button>
          <button onClick={() => setIsFollowerModalOpen(true)} className="text-gray-600 hover:underline">
            <span className="font-bold text-black">{profile.followers}</span> Followers
          </button>
        </div>
      </div>

      {/* Posts section */}
      <div className="flex flex-col divide-y">
        {myPosts.map((post) => (
          <MainPost
            key={post.userId}
            post={post}
            onNewPost={function (): Promise<void> {
              throw new Error('Function not implemented.');
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
