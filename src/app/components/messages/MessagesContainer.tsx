'use client';

import { backIcon, newChatICon, searchIconSM } from '@/app/constants/iconPath';
import { CHAT_PLACEHOLDER, NO_CHAT_TEXT } from '@/app/constants/messages';
import { mockChatPreviews } from '@/app/data/mockChats';
import { useModal } from '@/app/hooks/useModal';
import router from 'next/router';
import { useState } from 'react';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';
import NoSearch from '../search/NoSearch';
import ChatPreviews from './ChatPreviews';
import NewChatModal from './NewChatModal';

const MessagesContainer = () => {
  const [text, setText] = useState('');
  const [chats, setChats] = useState<ChatPreviewTypes[]>(mockChatPreviews);
  const { isOpen, closeModal, openModal } = useModal(false);

  return (
    <div className="flex-1 flex flex-col gap-y-2.5 pt-4 px-3 h-screen relative">
      {isOpen && <NewChatModal closeModal={closeModal} />}
      <div className="w-full flex justify-between">
        <div className="flex gap-2.5  items-center">
          <Icons name={backIcon} onClick={() => router.back()} className="cursor-pointer" />
          <p className="text-xl font-bold">Messages</p>
        </div>
        <Icons name={newChatICon} className="cursor-pointer" onClick={openModal} />
      </div>
      <div className="flex-1 flex-col gap-y-2.5 pt-5 h-screen relative">
        <Icons name={searchIconSM} className="absolute top-7 left-2" />
        <Input type={'default'} onChange={(e) => setText(e.target.value)} placeholder={CHAT_PLACEHOLDER[0]} />
        {chats.length === 0 ? <NoSearch text={NO_CHAT_TEXT} /> : <ChatPreviews chats={mockChatPreviews} />}
      </div>
    </div>
  );
};

export default MessagesContainer;
