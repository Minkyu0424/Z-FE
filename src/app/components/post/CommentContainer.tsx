'use client';

import { POST_COMMENT_PLACEHOLDER } from '@/app/constants/post';
import Image from 'next/image';
import Button from '../common/ui/Button';
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
    </div>
  );
};

export default CommentContainer;
