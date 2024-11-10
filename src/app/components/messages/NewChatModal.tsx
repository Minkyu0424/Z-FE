import { closeIconSmall, searchIconSMWhite } from '@/app/constants/iconPath';
import { CHAT_PLACEHOLDER, CHAT_TITLE } from '@/app/constants/messages';
import { mockUsers } from '@/app/data/mockUsers';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../common/ui/Button';
import Icons from '../common/ui/Icons';
import Input from '../common/ui/Input';
import NewChatUsers from './NewChatUsers';

interface NewChatModalProps {
  closeModal: () => void;
}

const NewChatModal = ({ closeModal }: NewChatModalProps) => {
  const [text, setText] = useState('');
  const router = useRouter();
  const [selectedUser, setSelectedUser] = useState('');
  return (
    <div className="fixed inset-0 flex-center bg-main-1 bg-opacity-20 z-50">
      <div className="flex flex-col w-[400px] h-[520px] p-5 bg-black text-white rounded-xl justify-between">
        <div className="flex flex-col gap-y-3">
          <div className="w-full flex items-end justify-between">
            <div className="flex gap-4 items-center">
              <Icons name={closeIconSmall} onClick={closeModal} className="cursor-pointer" />
              <p className="font-semibold">{CHAT_TITLE}</p>
            </div>
            <Button
              buttonText={'시작하기'}
              type="repost"
              onClickHandler={() => router.push(`messages/chat/${selectedUser}`)}
            />
          </div>
          <div className="relative w-full">
            <Icons name={searchIconSMWhite} className="absolute top-3 left-2" />
            <Input type="newChat" onChange={(e) => setText(e.target.value)} placeholder={CHAT_PLACEHOLDER[1]} />
          </div>
        </div>
        <div className="flex w-full overflow-y-auto py-3">
          <NewChatUsers users={mockUsers} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default NewChatModal;
