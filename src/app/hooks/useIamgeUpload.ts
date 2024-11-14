import { useRef, useState } from 'react';

type FileType = {
  type: string;
  file: File;
  preview: string;
};

export const useImageUpload = () => {
  const [files, setFiles] = useState<ImageFileTypes[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleDeleteImage = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    files,
    setFiles,
    fileInputRef,
    handleImageChange,
    handleIconClick,
    handleDeleteImage,
  };
};
