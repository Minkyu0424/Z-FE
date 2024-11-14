import { callDelete, callPost } from '@/app/utils/callApi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../common/ui/Button';

interface SearchPeopleProps {
  user: SearchUserTypes;
  setText: Dispatch<SetStateAction<string>>;
}

const SearchPeople = ({ user, setText }: SearchPeopleProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  console.log(user);
  

  const followUser = async () => {
    const response = await callPost('/api/follow', { tag: user.tag });
    setText('');
    setIsFollowing(true);
  };

  const unFollowUser = async () => {
    const response = await callDelete(`/api/follow?tag=${user.tag}`);
    setIsFollowing(false);
    console.log(response);
  };

  return (
    <div className="w-full flex h-full flex-col gap-y-3 overflow-y-auto gap-x-3 hide-scrollbar">
      <div className="h-9 w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 relative rounded-full">
            <Image src="/mock/default.webp" alt={'profile'} fill className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <div className="text-black text-sm font-bold">{user.nickname}</div>
            <div className="text-main-1 text-xs">@{user.tag}</div>
          </div>
        </div>
        <Button buttonText="Follow" type="profile" onClickHandler={followUser} />
      </div>
    </div>
  );
};

export default SearchPeople;
