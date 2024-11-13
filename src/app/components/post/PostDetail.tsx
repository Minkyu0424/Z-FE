'use client';

import { backIcon, commentIcon, deleteIcon, dotIcon, pencilIcon, repostIcon } from '@/app/constants/iconPath';
import { useModal } from '@/app/hooks/useModal';
import { callGet } from '@/app/utils/callApi';
import { formatDate } from '@/app/utils/date';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icons from '../common/ui/Icons';
import PostDeleteModal from '../edit/PostDeleteModal';
import PostEditModal from '../edit/PostEditModal';
import RepostModal from './RepostModal';

interface PostDetailProps {
  postId: string;
}

const PostDetail = ({ postId }: PostDetailProps) => {
  const router = useRouter();
  const { isOpen: isOpenEdit, openModal: openEdit, closeModal: closeEdit } = useModal(false);
  const { isOpen: isOpenDel, openModal: openDel, closeModal: closeDel } = useModal(false);
  const { isOpen: isOpenRepost, openModal: openRepost, closeModal: closeRepost } = useModal(false);
  const [postData, setPostData] = useState<PostDetailTypes | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const resData = await callGet(`/api/post?id=${postId}`);
        setPostData(resData.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchPostDetail();
  }, [postId]);

  return (
    <div className="w-full flex flex-col px-3 pt-4 relative">
      {isOpenRepost && postData && <RepostModal post={postData} closeModal={closeRepost} />}
      {isOpenEdit && <PostEditModal postId={postId} closeModal={closeEdit} />}
      {isOpenDel && <PostDeleteModal postId={postId} closeModal={closeDel} />}
      <div className="flex gap-2.5 pb-5">
        <Icons name={backIcon} onClick={() => router.back()} className="cursor-pointer" />
        <p className="text-xl font-bold">Post</p>
      </div>
      <div className="flex w-full justify-between px-2.5">
        <div className="flex items-center gap-x-2">
          <div className="w-10 h-10 relative bg-main-1 rounded-full">
            <Image src={'/mock/default.webp' || '/mock/profile1.png'} alt="프로필" fill className="rounded-full" />
          </div>
          <div className="text-sm">
            <p className="text-black font-semibold mb-0.5">{postData?.authorNickname || '작성자'}</p>
            <p className="text-xs text-main-1">@{postData?.authorTag || 'leetsBoy'}</p>
          </div>
        </div>
        {/* {postData?.authorTag===user.authorTag && } */}
        <div className="flex gap-x-2 pt-1">
          <Icons name={pencilIcon} className="cursor-pointer" onClick={openEdit} />
          <Icons name={deleteIcon} className="cursor-pointer" onClick={openDel} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2.5 text-[14px] pt-2">
        <div className="w-full flex-wrap">{postData?.content || '게시물을 받아오지 못했습니다.'}</div>
      </div>
      <div className="w-full flew-wrap flex gap-2 py-2">
        {postData?.imageUrls.map((file, i) => (
          <div key={i} className={`relative ${postData.imageUrls.length === 1 ? 'w-full' : 'w-1/2'}`}>
            <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
          </div>
        ))}
      </div>
      <div className="flex text-sm items-center gap-2 text-main-1 pl-3">
        <p>{formatDate(postData?.createdAt)}</p>
        <Icons name={dotIcon} />
        <p className="font-semibold">24M View</p>
      </div>
      <div className="flex gap-x-5 border-y border-main-2 py-2 text-sm font-medium mt-3 pl-2.5">
        {/* <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={postLikeIcon} />
          <p>{postData.totalLikes}</p>
        </div> */}
        <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={repostIcon} onClick={openRepost} />
          {/* <p>{postData.totalLikes}</p> */}
        </div>
        <div className="flex gap-x-1 items-center cursor-pointer">
          <Icons name={commentIcon} />
          {/* <p>{postData.totalComment}</p> */}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
