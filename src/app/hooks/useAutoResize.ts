import { useRef } from 'react';

export const useAutoResize = () => {
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResize = () => {
    if (contentInputRef.current) {
      contentInputRef.current.style.height = 'auto';
      contentInputRef.current.style.height = `${contentInputRef.current.scrollHeight}px`;
    }
  };

  return {
    contentInputRef,
    handleResize,
  };
};
