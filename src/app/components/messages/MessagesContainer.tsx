'use client';

import { backIcon, newChatICon, searchIconSM } from '@/app/constants/iconPath';
import { SEARCH_PLACEHOLDER } from '@/app/constants/search';
import { mockPosts } from '@/app/data/mockPost';
import router from 'next/router';
import { useState } from 'react';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';
import NoSearch from '../search/NoSearch';
import SearchPosts from '../search/SearchPosts';
import { NO_CHAT_TEXT } from '@/app/constants/messages';

const MessagesContainer = () => {
  const [text, setText] = useState('');
  const [chats, setChats] = useState([]);

  return (
    <div className="flex-1 flex flex-col gap-y-2.5 pt-4 px-3 h-screen relative">
      <div className="w-full flex justify-between">
        <div className="flex gap-2.5  items-center">
          <Icons name={backIcon} onClick={() => router.back()} className="cursor-pointer" />
          <p className="text-xl font-bold">Messages</p>
        </div>
        <Icons name={newChatICon} className='cursor-pointer'/>
      </div>
      <div className="flex-1 flex-col gap-y-2.5 pt-5 h-screen relative">
        <Icons name={searchIconSM} className="absolute top-6 left-2" />
        <Input type={'default'} onChange={(e) => setText(e.target.value)} placeholder={SEARCH_PLACEHOLDER} />
        {chats.length === 0 ? <NoSearch text={NO_CHAT_TEXT} /> : <SearchPosts posts={mockPosts} />}
      </div>
    </div>
  );
};

export default MessagesContainer;
