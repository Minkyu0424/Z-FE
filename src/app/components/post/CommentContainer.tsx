'use client';

import { dotIcon, postLikeIconSM } from '@/app/constants/iconPath';
import { POST_COMMENT_PLACEHOLDER } from '@/app/constants/post';
import { callGet, callPost } from '@/app/utils/callApi';
import { getHM } from '@/app/utils/date';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';

interface CommentContainerProps {
  postId: string;
}

const CommentContainer = ({ postId }: CommentContainerProps) => {
  const [postData, setPostData] = useState<PostDetailTypes[]>([]);
  const [text, setText] = useState('');

  const fetchPostDetail = useCallback(async () => {
    try {
      const resData = await callGet(`/api/post?id=${postId}`);
      setPostData(resData.data.childPosts);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }, [postId]);

  useEffect(() => {
    fetchPostDetail();
  }, [postId]);

  const handleSubmit = async () => {
    const formData = new FormData();
    const postRequestDTO = JSON.stringify({
      content: text || '',
      parentPostId: postId,
      quotePostId: null,
    });
    formData.append('postRequestDTO', new Blob([postRequestDTO], { type: 'application/json' }));

    await callPost('/api/post', formData);
    setText('');
    fetchPostDetail();
  };

  return (
    <div className="w-full flex flex-col px-3">
      <div className="py-1 px-3 rounded-xl flex border border-[#cecece] items-center justify-between">
        <div className="w-8 h-8 relative">
          <Image src="/mock/profile3.png" alt="profile" fill />
        </div>
        <Input type={'comment'} textValue={text} onChange={(e) => setText(e.target.value)} placeholder={POST_COMMENT_PLACEHOLDER} />
        <Button buttonText="Post" type="post" onClickHandler={handleSubmit} />
      </div>
      <div className="flex flex-col gap-y-5 pt-5">
        {postData &&
          postData?.map((post, i) => (
            <div className="w-full px-2.5 pb-3 flex border-b border-main-2 gap-x-[14px]">
              <div className="w-8 h-8 relative rounded-full">
                <Image src="/mock/default.webp" alt="profile" fill className="rounded-full" />
              </div>
              <div className="flex flex-col text-xs gap-y-1.5">
                <div className="flex items-center gap-x-1 text-main-1">
                  <p className="text-black font-semibold">{post.authorNickname}</p>
                  <p>@{post.authorTag}</p>
                  <Icons name={dotIcon} />
                  <p>{getHM(post.createdAt)}</p>
                </div>
                <div className="w-[290px]">{post.content}</div>
                <div className="w-full flew-wrap flex gap-2">
                  {post.imageUrls.map((file, i) => (
                    <div key={i} className={`relative ${post.imageUrls.length === 1 ? 'w-[300px]' : 'w-[140px]'}`}>
                      <img src={file} alt={`file-${i}`} className="flex-1 rounded-xl" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center cursor-pointer">
                <Icons name={postLikeIconSM} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentContainer;
