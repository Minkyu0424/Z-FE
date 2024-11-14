'use client';

import { closeIconSmall, ImageIconBig } from '@/app/constants/iconPath';
import { REPOST_PLACEHOLDER, REPOST_TITLE } from '@/app/constants/post';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import MainImages from '../main/MainImages';
import Repost from './Repost';

interface RepostModalProps {
  post: PostDetailTypes;
  closeModal: () => void;
}

const RepostModal = ({ post, closeModal }: RepostModalProps) => {
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
    <div className="fixed inset-0 flex-center bg-main-3 bg-opacity-10 z-50">
      <div className="flex flex-col w-[400px] h-[520px] p-5 bg-black text-white rounded-xl justify-between">
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
                className="flex outline-none bg-black text-white resize-none w-[330px] p-2.5"
              />
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} className="hidden" />
            {files.length !== 0 && <MainImages uploads={files} handleDeleteImage={handleDeleteImage} />}
            <Repost post={post} isModal={true} />
          </div>
        </div>
        <div className="w-full flex justify-between pt-3 border-white border-t">
          <Icons name={ImageIconBig} onClick={handleIconClick} className="cursor-pointer" />
          <Button buttonText="Repost" type={'repost'} onClickHandler={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default RepostModal;
