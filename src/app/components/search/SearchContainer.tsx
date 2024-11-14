'use client';

import { searchIconSM } from '@/app/constants/iconPath';
import { NO_RESULT_TEXT, SEARCH_PLACEHOLDER, SEARCH_TYPES } from '@/app/constants/search';
import { callGet } from '@/app/utils/callApi';
import { KeyboardEvent, useState } from 'react';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';
import NoSearch from './NoSearch';
import SearchPeople from './SearchPeople';

const SearchContainer = () => {
  const [text, setText] = useState('');
  const [searchType, setSearchType] = useState<SearchTypes>('POST');
  const [userData, setUserData] = useState<SearchUserTypes[]>([]);

  const tagStyle = (tag: SearchTypes) => {
    return searchType === tag ? 'text-black border-b-2 border-black box-border' : 'text-main-1 pb-0.5';
  };

  const searchUser = async () => {
    const resData = await callGet(`/api/search?tag=${text}`);
    if (resData.success) {
      setUserData(resData.data.memberInfo);
    }
    setText('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      searchUser();
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-y-2.5 pt-4 px-3 h-screen relative">
      <Icons name={searchIconSM} className="absolute top-6 left-5" />
      <Input
        type={'default'}
        onChange={(e) => setText(e.target.value)}
        placeholder={SEARCH_PLACEHOLDER}
        onEnterPress={handleKeyDown}
      />
      <div className="flex w-full gap-x-[100px] justify-center mb-[14px]">
        {SEARCH_TYPES.map((tag) => (
          <div
            key={tag}
            onClick={() => setSearchType(tag)}
            className={`w-[70px] h-7 flex-center text-xl font-bold cursor-pointer ${tagStyle(tag)}`}
          >
            {tag}
          </div>
        ))}
      </div>
      {userData && userData.length !== 0 ? (
        userData.map((user) => (
          <div className="w-full flex-col flex ">
            <SearchPeople user={user} setText={setText} />
          </div>
        ))
      ) : (
        <NoSearch text={NO_RESULT_TEXT} />
      )}
    </div>
  );
};

export default SearchContainer;
