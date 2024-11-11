'use client';

import { imageIcon } from '@/app/constants/iconPath';
import { MAIN_POST_PLACEHOLDER } from '@/app/constants/main';
import { useAutoResize } from '@/app/hooks/useAutoResize';
import { useImageUpload } from '@/app/hooks/useIamgeUpload';
import { callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import MainImages from './MainImages';

const MainUpload = () => {
  const { files, fileInputRef, handleImageChange, handleIconClick, handleDeleteImage } = useImageUpload();
  const { contentInputRef, handleResize } = useAutoResize();

  const handleSubmit = async () => {
    const textContent = contentInputRef.current?.value.trim();

    if (!textContent && files.length === 0) {
      return;
    }

    const formData = new FormData();

    const postRequestDTO = JSON.stringify({
      content: textContent || '',
      parentPostId: null,
      quotePostId: null,
    });
    formData.append('postRequestDTO', new Blob([postRequestDTO], { type: 'application/json' }));

    files.forEach((file, index) => {
      formData.append(`images`, file.file);
    });

    await callPost('/api/post', formData);

    if (contentInputRef.current) {
      contentInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col border-b-main-2 border-b px-3 pb-2.5">
      <div className="flex gap-x-2.5">
        <div className="w-8 h-8 relative">
          <Image className="w-8 h-8 relative mr-3" src="/mock/profile1.png" alt="profile" fill />
        </div>
        <textarea
          ref={contentInputRef}
          placeholder={MAIN_POST_PLACEHOLDER}
          onInput={handleResize}
          className="flex outline-none resize-none w-[340px] p-2 "
        />
      </div>
      <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
      {files.length !== 0 && <MainImages uploads={files} handleDeleteImage={handleDeleteImage} />}
      <div className="flex pl-12 mt-2.5 w-full justify-between pr-4 border-t border-b-main-2 pt-2.5">
        <Icons name={imageIcon} onClick={handleIconClick} className="cursor-pointer" />
        <Button buttonText="POST" type="post" onClickHandler={handleSubmit} />
      </div>
    </div>
  );
};

export default MainUpload;
