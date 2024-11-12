'use client';

import React, { useState } from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import MainPost from '../main/MainPost';
import { mockPosts } from '@/app/data/mockPost';
import FollowingListModal from './FollowingListModal';
import FollowerListModal from './FollowerListModal';

const DMIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.95 7.76661L5.28336 1.93328C4.82293 1.70412 4.30304 1.62254 3.79455 1.69965C3.28607 1.77677 2.81374 2.00884 2.44197 2.36421C2.07019 2.71958 1.81707 3.18096 1.7171 3.68545C1.61713 4.18994 1.67519 4.71299 1.88336 5.18328L3.88336 9.65828C3.92874 9.76647 3.95211 9.88262 3.95211 9.99994C3.95211 10.1173 3.92874 10.2334 3.88336 10.3416L1.88336 14.8166C1.71394 15.1972 1.64232 15.6141 1.675 16.0294C1.70769 16.4447 1.84364 16.8453 2.07051 17.1947C2.29737 17.5441 2.60796 17.8313 2.97404 18.0301C3.34012 18.229 3.75009 18.3332 4.16669 18.3333C4.55688 18.3294 4.94126 18.2383 5.29169 18.0666L16.9584 12.2333C17.3722 12.0251 17.72 11.706 17.9631 11.3117C18.2062 10.9173 18.3349 10.4632 18.3349 9.99994C18.3349 9.5367 18.2062 9.08257 17.9631 8.68821C17.72 8.29386 17.3722 7.97479 16.9584 7.76661H16.95ZM16.2084 10.7416L4.54169 16.5749C4.38849 16.6485 4.21647 16.6735 4.04868 16.6465C3.88089 16.6195 3.72536 16.5419 3.60295 16.424C3.48054 16.3061 3.39709 16.1536 3.3638 15.987C3.33051 15.8203 3.34896 15.6475 3.41669 15.4916L5.40836 11.0166C5.43414 10.9569 5.4564 10.8956 5.47502 10.8333H11.2167C11.4377 10.8333 11.6497 10.7455 11.8059 10.5892C11.9622 10.4329 12.05 10.221 12.05 9.99994C12.05 9.77893 11.9622 9.56697 11.8059 9.41069C11.6497 9.25441 11.4377 9.16661 11.2167 9.16661H5.47502C5.4564 9.10425 5.43414 9.04303 5.40836 8.98328L3.41669 4.50828C3.34896 4.35241 3.33051 4.17957 3.3638 4.01292C3.39709 3.84627 3.48054 3.69378 3.60295 3.5759C3.72536 3.45802 3.88089 3.38039 4.04868 3.3534C4.21647 3.32642 4.38849 3.35139 4.54169 3.42494L16.2084 9.25828C16.3449 9.32821 16.4594 9.43446 16.5394 9.56532C16.6194 9.69617 16.6617 9.84657 16.6617 9.99994C16.6617 10.1533 16.6194 10.3037 16.5394 10.4346C16.4594 10.5654 16.3449 10.6717 16.2084 10.7416Z" fill="black" />
  </svg>
);

const OtherProfile = () => {
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const profile = {
    username: "재테크러",
    handle: "@boodong",
    tag: "boodong",  
    bio: "좋은 부동산투자자가 되도록 노력중인 사람이에요.",
    following: 800,
    followers: 1232
  };

  const userPosts = mockPosts.filter(post => post.userId === 'user2');

  const handleToggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Modals */}
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
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
        <div className="flex items-center p-4">
          <Link href="/" className="rounded-full hover:bg-gray-200 p-2">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold ml-4">Profile</h1>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-start mb-4">
          {/* Profile image placeholder */}
          <div className="w-24 h-24 rounded-full bg-gray-300"></div>
          <div className="flex gap-2">
            <button
              onClick={() => { }}
              className="p-2 rounded-full hover:bg-gray-200"
              title="Send Message"
            >
              <DMIcon />
            </button>
            <button
              onClick={handleToggleFollow}
              className={`px-4 py-2 rounded-full font-bold
                ${isFollowing
                  ? 'border border-gray-300 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                  : 'bg-black text-white hover:bg-gray-800'}`}
            >
              {isFollowing ? '팔로잉' : '팔로우'}
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold">{profile.username}</h2>
          <p className="text-gray-500">{profile.handle}</p>
        </div>

        <p className="mb-4">{profile.bio}</p>

        <div className="flex gap-4 text-sm">
          <button
            onClick={() => setIsFollowingModalOpen(true)}
            className="hover:underline"
          >
            <strong>{profile.following}</strong> Following
          </button>
          <button
            onClick={() => setIsFollowerModalOpen(true)}
            className="hover:underline"
          >
            <strong>{profile.followers}</strong> Followers
          </button>
        </div>
      </div>

      {/* Posts section */}
      <div>
        {userPosts.map((post) => (
          <MainPost key={post.userId} post={post} />
        ))}
      </div>
    </div>
  );
};

export default OtherProfile;