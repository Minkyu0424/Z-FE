'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface Upload {
  type: 'image';
  file: File;
  preview: string;
}

const MainUpload = () => {
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [uploads, setUploads] = useState<Upload[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploads((prev) => [...prev, { type: 'image', file, preview: imageUrl }]);
      e.target.value = ''; // 파일 입력 초기화
    }
  };

  const handleSubmit = async () => {
    const textContent = contentInputRef.current?.value.trim();
    if (!textContent && uploads.length === 0) {
      return;
    }
    const formData = new FormData();
    if (textContent) {
      formData.append('textContent', textContent);
    }
    uploads.forEach((upload, index) => {
      if (upload.type === 'image') {
        formData.append(`image[${index}]`, upload.file);
      }
    });
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Upload successful:', result);
    } catch (error) {
      console.error('Error uploading:', error);
    }
    if (contentInputRef.current) {
      contentInputRef.current.value = '';
    }
    setUploads([]);
  };

  return (
    <div className="flex flex-col border-b-colors-main-1 border-b px-3">
      <div className="flex items-start mb-4">
        <Image className="w-8 h-8 relative mr-3" src="/mock/profile1" alt="profile" />
      </div>
      <div className="flex items-center max-h-[800px] overflow-y-auto">
        <textarea
          ref={contentInputRef}
          placeholder="내용을 입력하세요..."
          className="border border-gray-300 rounded px-2 py-1 flex-1 mr-2 h-24 resize-none"
        />
        <button onClick={handleSubmit} className="px-3 py-1 bg-blue-500 text-white rounded">
          제출
        </button>
      </div>

      {/* Image Input */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      {/* Uploaded Images Preview */}
      <div className="flex flex-wrap mt-4">
        {uploads.map((upload, index) => (
          <div key={index} className="flex-1">
            {upload.type === 'image' && (
              <img src={upload.preview} alt="미리보기 이미지" className="flex-1 h-60 object-cover rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainUpload;
