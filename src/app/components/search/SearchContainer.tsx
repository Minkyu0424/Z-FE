'use client';

import { searchIconSM } from '@/app/constants/iconPath';
import { SEARCH_PLACEHOLDER, SEARCH_TYPES } from '@/app/constants/search';
import { useState } from 'react';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';

const SearchContainer = () => {
  const [text, setText] = useState('');
  const [searchType, setSearchType] = useState<SearchTypes>('POST');
  const tagStyle = (tag: SearchTypes) => {
    return searchType === tag ? 'text-black border-b-2 border-black box-border' : 'text-main-1 pb-0.5';
  };

  return (
    <div className="flex-1 flex flex-col gap-y-2.5 pt-4 px-3 h-screen overflow-y-auto relative">
      <Icons name={searchIconSM} className="absolute top-6 left-5" />
      <Input type={'default'} onChange={(e) => setText(e.target.value)} placeholder={SEARCH_PLACEHOLDER} />
      <div className="flex w-full gap-x-[100px] justify-center">
        {SEARCH_TYPES.map((tag, i) => (
          <div
            onClick={() => setSearchType(tag)}
            className={`w-[70px] h-7 flex-center text-xl font-bold cursor-pointer ${tagStyle(tag)}`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
