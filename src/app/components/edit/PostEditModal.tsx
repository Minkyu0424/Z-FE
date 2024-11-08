import { closeIconSmall, ImageIconBig } from '@/app/constants/iconPath';
import { REPOST_PLACEHOLDER, REPOST_TITLE } from '@/app/constants/post';
import { useAutoResize } from '@/app/hooks/useAutoResize';
import { useImageUpload } from '@/app/hooks/useIamgeUpload';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import MainImages from '../main/MainImages';
import Repost from '../post/Repost';

interface PostEditModalProps {
  post: PostTypes;
  closeModal: () => void;
}

const PostEditModal = ({ post, closeModal }: PostEditModalProps) => {
  const { files, fileInputRef, handleImageChange, handleIconClick, handleDeleteImage } = useImageUpload();
  const { contentInputRef, handleResize } = useAutoResize();
  const [content, setContent] = useState(post.content);

  function handleSubmit(): void {
    console.log('수정 api 요청 로직');
    closeModal();
  }

  useEffect(() => {
    if (contentInputRef.current) {
      handleResize();
    }
  }, [contentInputRef]);

  return (
    <div className="fixed inset-0 flex-center bg-main-3 bg-opacity-10 z-50">
      <div className="w-[400px] max-h-[580px] flex flex-col gap-y-4 p-5 bg-black rounded-xl shadow justify-between text-white">
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <Icons name={closeIconSmall} onClick={closeModal} className="cursor-pointer" />
            <p className="font-semibold">{REPOST_TITLE}</p>
          </div>
          <div className="flex flex-col overflow-y-auto h-[400px]">
            <div className="w-full flex py-3">
              <div className="w-8 h-8 relative mt-2">
                <Image fill src="/mock/profile1.png" alt="프로필" />
              </div>
              <textarea
                ref={contentInputRef}
                placeholder={REPOST_PLACEHOLDER}
                onInput={handleResize}
                defaultValue={post.content}
                onChange={(e) => setContent(e.target.value)}
                className="flex outline-none bg-black resize-none w-[330px] p-2.5"
              />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
            {files.length !== 0 && <MainImages uploads={files} handleDeleteImage={handleDeleteImage} />}
            <Repost post={post} isModal={false} />
          </div>
        </div>
        <div className="w-full flex justify-between pt-3 border-white border-t">
          <Icons name={ImageIconBig} onClick={handleIconClick} className="cursor-pointer" />
          <Button buttonText="Update" type={'repost'} onClickHandler={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default PostEditModal;
