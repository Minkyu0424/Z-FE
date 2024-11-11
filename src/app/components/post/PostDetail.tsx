'use client';

import { backIcon } from '@/app/constants/iconPath';
import { useModal } from '@/app/hooks/useModal';
import { callGet } from '@/app/utils/callApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icons from '../common/ui/Icons';

interface PostDetailProps {
  postId: string;
}
//게시물 상세 페이지의 게시물 내용과 해당 파트 헤더를 포함하는 컴포넌트

const PostDetail = ({ postId }: PostDetailProps) => {
  const router = useRouter();
  const { isOpen, openModal, closeModal } = useModal(false);
  const [postData, setPostData] = useState<PostDetailTypes | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const resData = await callGet(`/api/post?id=${postId}`);
        setPostData(resData.data);
        console.log(resData);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchPostDetail();
  }, [postId]);

  return (
    <div className="w-full flex flex-col px-3 pt-4 relative">
      {/* {isOpen && <RepostModal post={postData} closeModal={closeModal} />} */}
      <div className="flex gap-2.5 pb-5">
        <Icons name={backIcon} onClick={() => router.back()} className="cursor-pointer" />
        <p className="text-xl font-bold">Post</p>
      </div>
      <div className="flex items-center gap-x-2 px-2.5">
        <div className="w-10 h-10 relative">
          <Image src={postData?.imageUrls[0] || '/mock/profile1.png'} alt="프로필" fill />
        </div>
        <div className="text-sm">
          <p className="text-black font-semibold mb-0.5">{postData?.authorNickname}</p>
          <p className="text-xs text-main-1">@{postData?.authorTag}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2.5 text-[14px] pt-2">
        <div className="w-full flex-wrap">{postData?.content}</div>
        <p className="font-bold">#{postData?.authorTag}</p>
      </div>
      <div className="w-full flew-wrap flex gap-2 py-2">
        {postData?.imageUrls.map((file, i) => (
          <div key={i} className={`relative ${postData.imageUrls.length === 1 ? 'w-full' : 'w-1/2'}`}>
            <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
          </div>
        ))}
      </div>
      {/* <div className="flex text-sm items-center gap-2 text-main-1">
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
          <Icons name={repostIcon} onClick={openModal} />
          <p>{post.totalLikes}</p>
        </div>
        <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={commentIcon} />
          <p>{post.totalComment}</p>
        </div>
      </div> */}
    </div>
  );
};

export default PostDetail;
