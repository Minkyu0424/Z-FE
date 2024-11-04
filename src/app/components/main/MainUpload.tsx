'use client';

import { imageIcon } from '@/app/constants/iconPath';
import { MAIN_POST_PLACEHOLDER } from '@/app/constants/main';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import MainImages from './MainImages';

const MainUpload = () => {
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<ImageFileTypes[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && files.length < 4) {
      const imageUrl = URL.createObjectURL(file);
      setFiles((prev) => [...prev, { type: 'image', file, preview: imageUrl }]);
      e.target.value = '';
    } else {
      alert('사진은 최대 4개까지 업로드 가능합니다.');
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleResize = () => {
    if (contentInputRef.current) {
      contentInputRef.current.style.height = 'auto';
      contentInputRef.current.style.height = `${contentInputRef.current.scrollHeight}px`;
    }
  };

  const handleDeleteImage = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const textContent = contentInputRef.current?.value.trim();
    if (!textContent && files.length === 0) {
      return;
    }
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
