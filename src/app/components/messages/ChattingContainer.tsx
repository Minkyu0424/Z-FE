'use client';

import { backIcon, imageIconBlack, newChatIconSM } from '@/app/constants/iconPath';
import { CHAT_PLACEHOLDER } from '@/app/constants/messages';
import { mockUsers } from '@/app/data/mockUsers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { KeyboardEvent, useState } from 'react';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';

const ChattingContainer = () => {
  const [messages, setMessages] = useState<{ message: string; date: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  console.log(messages);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        message: inputValue,
        date: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col gap-y-5 pt-4 px-3 h-screen relative">
      <div className="w-full flex justify-between">
        <div className="flex gap-2.5 items-center">
          <Icons name={backIcon} onClick={() => router.back()} className="cursor-pointer" />
          <p className="text-xl font-bold">Messages</p>
        </div>
      </div>
      <div className="w-full flex-col-center gap-y-2 border-b border-b-main-2 pb-5">
        <div className="w-16 h-16 relative rounded-full">
          <Image src="/mock/profile2.png" fill className="rounded-full" alt="profile" />
        </div>
        <p className="text-sm font-semibold">{mockUsers[0].nickname}</p>
        <p className="text-main-1 text-[11px]">@{mockUsers[0].userId}</p>
        <p className="text-xs">{'좋은 개발자가 되도록 노력중인 사람이에요.'}</p>
      </div>
      <div className="flex flex-col h-full justify-between pb-4 items-end">
        <div className="flex-1 overflow-y-auto rounded-lg p-2 gap-y-3 flex-col flex">
          {messages.map((item, index) => (
            <div key={index} className="inline-flex px-4 py-2 bg-black text-white rounded-md text-sm relative">
              {item.message}
              <p className="absolute top-8 right-1 text-[10px] text-main-0">{item.date}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-between h-10 px-3 py-2 items-center bg-main-4 rounded">
          <Icons name={imageIconBlack} onClick={() => console.log('입력')} className="cursor-pointer" />
          <Input
            type="message"
            textValue={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={CHAT_PLACEHOLDER[2]}
            onEnterPress={handleKeyDown}
          />
          <Icons name={newChatIconSM} onClick={handleSendMessage} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChattingContainer;
