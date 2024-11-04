'use client';

import { backIcon, commentIcon, dotIcon, postLikeIcon, repostIcon } from '@/app/constants/iconPath';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Icons from '../common/ui/Icons';

interface PostDetailProps {
  post: PostTypes;
}

const PostDetail = ({ post }: PostDetailProps) => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col px-3 pt-4">
      <div className="flex gap-2.5 pb-5">
        <Icons name={backIcon} onClick={() => router.back()} className="cursor-pointer" />
        <p className="text-xl font-bold">Post</p>
      </div>
      <div className="flex items-center gap-x-2 px-2.5">
        <div className="w-10 h-10 relative">
          <Image src={post.profile} alt="프로필" fill />
        </div>
        <div className="text-sm">
          <p className="text-black font-semibold mb-0.5">{post.nickname}</p>
          <p className="text-xs text-main-1">@{post.userId}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2.5 text-[14px] pt-2">
        <div className="w-full flex-wrap">{post.content}</div>
        <p className="font-bold">#{post.tag}</p>
      </div>
      <div className="w-full flew-wrap flex gap-2 py-2">
        {post.files.map((file, i) => (
          <div key={i} className={`relative ${post.files.length === 1 ? 'w-full' : 'w-1/2'}`}>
            <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
          </div>
        ))}
      </div>
      <div className="flex text-sm items-center gap-2 text-main-1">
        <p>{post.createdAt}</p>
        <Icons name={dotIcon} />
        <p className="font-semibold">24M</p>
      </div>
      <div className="flex gap-x-5 border-y border-main-2 py-2 text-sm font-medium mt-3 pl-2.5">
        <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={postLikeIcon} />
          <p>{post.totalLikes}</p>
        </div>
        <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={repostIcon} />
          <p>{post.totalLikes}</p>
        </div>
        <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={commentIcon} />
          <p>{post.totalComment}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
