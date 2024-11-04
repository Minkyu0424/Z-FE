'use client';

import { commentIcon, dotIcon, postLikeIconSM, repostIcon } from '@/app/constants/iconPath';
import { POST_COMMENT_PLACEHOLDER } from '@/app/constants/post';
import { mockComments } from '@/app/data/mockComment';
import Image from 'next/image';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';

const CommentContainer = () => {
  return (
    <div className="w-full flex flex-col px-3">
      <div className="py-1 px-3 rounded-xl flex border border-[#cecece] items-center justify-between">
        <div className="w-8 h-8 relative">
          <Image src="/mock/profile3.png" alt="profile" fill />
        </div>
        <Input type={'comment'} onChange={() => console.log('hi')} placeholder={POST_COMMENT_PLACEHOLDER} />
        <Button
          buttonText="Post"
          type="post"
          onClickHandler={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <div className="flex flex-col gap-y-5 pt-5">
        {mockComments.map((comment, i) => (
          <div className="w-full px-2.5 pb-3 flex border-b border-main-2 gap-x-[14px]">
            <div className="w-8 h-8 relative">
              <Image src={comment.profile} alt="profile" fill />
            </div>
            <div className="flex flex-col text-xs gap-y-1.5">
              <div className="flex items-center gap-x-1 text-main-1">
                <p className="text-black font-semibold">{comment.nickname}</p>
                <p>@{comment.userId}</p>
                <Icons name={dotIcon} />
                <p>{comment.createdAt}</p>
              </div>
              <div className="w-[300px]">{comment.content}</div>
              <div className="w-full flew-wrap flex gap-2">
                {comment.files.map((file, i) => (
                  <div key={i} className={`relative ${comment.files.length === 1 ? 'w-[300px]' : 'w-[140px]'}`}>
                    <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
                  </div>
                ))}
              </div>
              <div className="flex gap-x-5 text-xs">
                <div className="flex gap-x-1 items-center cursor-pointer">
                  <Icons name={postLikeIconSM} />
                  <p>{comment.totalLikes}</p>
                </div>
                <div className="flex gap-x-1 items-center cursor-pointer">
                  <Icons name={repostIcon} />
                  <p>{comment.totalLikes}</p>
                </div>
                <div className="flex gap-x-1 items-center cursor-pointer">
                  <Icons name={commentIcon} />
                  <p>{comment.totalComment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;
