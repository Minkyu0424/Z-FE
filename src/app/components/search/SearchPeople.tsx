import Image from 'next/image';
import Button from '../common/ui/Button';

interface SearchPeopleProps {
  user: SearchUserTypes;
}

const SearchPeople = ({ user }: SearchPeopleProps) => {
  return (
    <div className="w-full flex h-full flex-col gap-y-3 overflow-y-auto gap-x-3 hide-scrollbar">
      {/* {user.map((user, i) => ( */}
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
          <Button buttonText="Follow" type="profile" onClickHandler={() => console.log('팔로우 하는 로직')} />
        </div>
      {/* ))} */}
    </div>
  );
};

export default SearchPeople;
