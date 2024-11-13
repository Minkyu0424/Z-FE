import { closeIconSmall, ImageIconBig } from '@/app/constants/iconPath';
import { REPOST_PLACEHOLDER, REPOST_TITLE } from '@/app/constants/post';
import { useAutoResize } from '@/app/hooks/useAutoResize';
import { useImageUpload } from '@/app/hooks/useIamgeUpload';
import { callGet, callPatch } from '@/app/utils/callApi';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import MainImages from '../main/MainImages';
import Repost from '../post/Repost';

interface PostEditModalProps {
  postId: string;
  closeModal: () => void;
}

const PostEditModal = ({ postId, closeModal }: PostEditModalProps) => {
  const { files, fileInputRef, handleImageChange, handleIconClick, handleDeleteImage } = useImageUpload();
  const { contentInputRef, handleResize } = useAutoResize();
  const [postData, setPostData] = useState<PostDetailTypes | null>(null);

  useEffect(() => {
    if (contentInputRef.current) {
      handleResize();
    }
  }, [contentInputRef]);

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

  const handlePatch = async () => {
    const textContent = contentInputRef.current?.value.trim();
    if (!textContent && files.length === 0) {
      return;
    }

    const formData = new FormData();

    const postEditRequestDTO = JSON.stringify({
      content: textContent || '',
    });
    formData.append('postEditRequestDTO', new Blob([postEditRequestDTO], { type: 'application/json' }));

    files.forEach((file) => {
      formData.append('images[]', file.file); // `images[]`로 배열 형태를 명시
    });

    await callPatch(`/api/post/?id=${postId}&tag=${postData?.authorTag}`, formData);

    closeModal();

    if (contentInputRef.current) {
      contentInputRef.current.value = '';
    }
  };

  return (
    <div className="fixed inset-0 flex-center bg-main-1 bg-opacity-30 z-50">
      <div className="w-[400px] max-h-[580px] flex flex-col gap-y-4 p-5 bg-black rounded-xl shadow justify-between text-white">
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <Icons name={closeIconSmall} onClick={closeModal} className="cursor-pointer" />
            <p className="font-semibold">{REPOST_TITLE}</p>
          </div>
          <div className="flex flex-col overflow-y-auto h-[400px]">
            <div className="w-full flex py-3">
              <div className="w-8 h-8 relative mt-2 rounded-full">
                <Image fill src="/mock/default.webp" alt="프로필" className="rounded-full" />
              </div>
              <textarea
                ref={contentInputRef}
                placeholder={REPOST_PLACEHOLDER}
                onInput={handleResize}
                defaultValue={postData?.content}
                className="flex outline-none bg-black resize-none w-[330px] p-2.5"
              />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
            {files.length !== 0 && <MainImages uploads={files} handleDeleteImage={handleDeleteImage} />}
            {postData && postData.childPosts.length !== 0 && <Repost post={postData} isModal={false} />}
          </div>
        </div>
        <div className="w-full flex justify-between pt-3 border-white border-t">
          <Icons name={ImageIconBig} onClick={handleIconClick} className="cursor-pointer" />
          <Button buttonText="Update" type={'repost'} onClickHandler={handlePatch} />
        </div>
      </div>
    </div>
  );
};

export default PostEditModal;
