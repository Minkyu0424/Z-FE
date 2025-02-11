'use client';

import { commentIcon, deleteIcon, dotIcon, pencilIcon, postLikeIconSM, repostIcon } from '@/app/constants/iconPath';
import { useModal } from '@/app/hooks/useModal';
import { useUserStore } from '@/app/store/store';
import { formatDate } from '@/app/utils/date';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../common/ui/Icons';
import PostDeleteModal from '../edit/PostDeleteModal';
import PostEditModal from '../edit/PostEditModal';
import Repost from '../post/Repost';
import RepostModal from '../post/RepostModal';

interface MainPostProps {
  post: PostDetailTypes;
  onNewPost?: () => Promise<void>;
}

const MainPost = ({ post, onNewPost }: MainPostProps) => {
  const { isOpen: isOpenEdit, openModal: openEdit, closeModal: closeEdit } = useModal(false);
  const { isOpen: isOpenDel, openModal: openDel, closeModal: closeDel } = useModal(false);
  const { isOpen: isOpenRe, openModal: openRe, closeModal: closeRe } = useModal(false);
  const { user } = useUserStore();
  return (
    <div className="flex px-3 w-full border-b border-b-main-2 pb-2.5">
      {isOpenEdit && <PostEditModal postId={post.id} closeModal={closeEdit} onNewPost={onNewPost} />}
      {isOpenDel && <PostDeleteModal postId={post.id} closeModal={closeDel} onNewPost={onNewPost} />}
      {isOpenRe && <RepostModal post={post} closeModal={closeRe} onNewPost={onNewPost} />}
      <div className="w-8 h-8 relative rounded-full">
        <Image src={'/mock/default.webp'} alt="프로필" fill className="rounded-full" />
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2.5 text-[14px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1 text-main-1">
            <p className="text-black font-semibold">{post.authorNickname}</p>
            <p>@{post.authorTag}</p>
            <Icons name={dotIcon} />
            <p>{formatDate(post.createdAt)}</p>
          </div>
          {user?.tag === post.authorTag && (
            <div className="flex gap-x-2">
              <Icons name={pencilIcon} className="cursor-pointer" onClick={openEdit} />
              <Icons name={deleteIcon} className="cursor-pointer" onClick={openDel} />
            </div>
          )}
        </div>
        <Link href={`/post/${post.id}`} className="cursor-pointer">
          <div className="w-full flex-wrap">{post.content}</div>
          <div className="w-full flew-wrap flex gap-2">
            {post.imageUrls.map((file, i) => (
              <div key={i} className={`relative ${post.imageUrls.length === 1 ? 'w-full' : 'w-1/2'}`}>
                <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
              </div>
            ))}
          </div>
        </Link>
        {post.quotePost && <Repost post={post.quotePost} isModal={false} />}
        <div className="flex pl-2.5 gap-x-5 text-xs">
          <div className="flex gap-x-1 items-center cursor-pointer">
            <Icons name={postLikeIconSM} />
            <p>{0}</p>
          </div>
          <div className="flex gap-x-1 items-center cursor-pointer" onClick={openRe}>
            <Icons name={repostIcon} />
            <p>{post.childPosts.length}</p>
          </div>
          <div className="flex gap-x-1 items-center cursor-pointer">
            <Icons name={commentIcon} />
            <p>{0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
