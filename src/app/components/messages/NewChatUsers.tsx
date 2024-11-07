import { useModal } from '@/app/hooks/useModal';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface NewChatUsersProps {
  users: UserTypes[];
  setSelectedUser: Dispatch<SetStateAction<string>>;
  selectedUser: string;
}

const NewChatUsers = ({ users, setSelectedUser, selectedUser }: NewChatUsersProps) => {

  const handleUserClick = (userId: string) => {
    if (selectedUser === userId) {
      setSelectedUser('');
    } else {
      setSelectedUser(userId);
    }
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      {users.map((user) => (
        <div
          key={user.userId}
          className={`flex w-full items-center gap-x-2 px-2.5 py-1 cursor-pointer ${
            selectedUser === user.userId ? 'bg-main-0' : 'bg-black' // 선택 시 bg-main-4, 기본은 흰색
          } hover:bg-main-0 rounded`}
          onClick={() => handleUserClick(user.userId)}
        >
          <div className="w-9 h-9 relative">
            <Image src={user.profile} alt="프로필" fill />
          </div>
          <div className="text-[11px]">
            <p className="text-white font-semibold mb-0.5">{user.nickname}</p>
            <p className="text-[10px] text-main-4">@{user.userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewChatUsers;
