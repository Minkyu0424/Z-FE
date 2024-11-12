'use client';

import { commentIcon, deleteIcon, dotIcon, pencilIcon, postLikeIconSM, repostIcon } from '@/app/constants/iconPath';
import { useModal } from '@/app/hooks/useModal';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../common/ui/Icons';
import PostDeleteModal from '../edit/PostDeleteModal';
import PostEditModal from '../edit/PostEditModal';
import { formatDate } from '@/app/utils/date';

interface MainPostProps {
  post: PostTypes;
}

const MainPost = ({ post }: MainPostProps) => {
  const { isOpen: isOpenEdit, openModal: openEdit, closeModal: closeEdit } = useModal(false);
  const { isOpen: isOpenDel, openModal: openDel, closeModal: closeDel } = useModal(false);

  return (
    <div className="flex px-3 w-full border-b border-b-main-2 pb-2.5">
      {isOpenEdit && <PostEditModal postId={post.userId} closeModal={closeEdit} />}
      {isOpenDel && <PostDeleteModal postId={'1'} closeModal={closeDel} />}
      <div className="w-8 h-8 relative">
        <Image src={post.profile} alt="프로필" fill />
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2.5 text-[14px]">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-x-1 text-main-1">
            <p className="text-black font-semibold">{post.nickname}</p>
            <p>@{post.userId}</p>
            <Icons name={dotIcon} />
            <p>{formatDate(post.createdAt)}</p>
          </div>
          <div className="flex gap-x-2">
            <Icons name={pencilIcon} className="cursor-pointer" onClick={openEdit} />
            <Icons name={deleteIcon} className="cursor-pointer" onClick={openDel} />
          </div>
        </div>
        <Link href="/post/1" className="cursor-pointer">
          <div className="w-full flex-wrap">{post.content}</div>
          <p className="font-bold">#{post.tag}</p>
          <div className="w-full flew-wrap flex gap-2">
            {post.files.map((file, i) => (
              <div key={i} className={`relative ${post.files.length === 1 ? 'w-full' : 'w-1/2'}`}>
                <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
              </div>
            ))}
          </div>
        </Link>
        <div className="flex pl-2.5 gap-x-5 text-xs">
          <div className="flex gap-x-1 items-center cursor-pointer">
            <Icons name={postLikeIconSM} />
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
    </div>
  );
};

export default MainPost;
