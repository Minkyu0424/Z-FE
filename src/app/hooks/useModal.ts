import { useState } from 'react';

export const useModal = (initialState: boolean) => {
  //모달을 관리하는 hook, modal의 열고 닫음 state를 관리하는 함수
  //isOpen && <원하는 컴포넌트/> 구조로 모달 보여주기
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //모달 클릭 이벤트가 내부 이벤트에 의해 막히는 경우 사용
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    handleModalClick,
  };
};
