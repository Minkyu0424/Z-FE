import { deleteIcon, dotIcon } from '@/app/constants/iconPath';
import Image from 'next/image';
import Icons from '../common/ui/Icons';

interface ChatPreviewsProps {
  chats: ChatPreviewTypes[];
}

const ChatPreviews = ({ chats }: ChatPreviewsProps) => {
  return (
    <div className="w-full flex flex-col items-center pt-5 gap-y-1.5">
      {chats.map((chat) => (
        <div className="flex w-full justify-between border-r border-r-black px-2.5 py-1.5 cursor-pointer hover:bg-main-4">
          <div className='flex gap-x-2 items-center'>
            <div className="w-10 h-10 relative rounded-full">
              <Image src={chat.profile} alt={'profile'} className="rounded-full" fill />
            </div>
            <div className="flex flex-col text-xs gap-y-1">
              <div className="flex items-center gap-x-1 text-main-1">
                <p className="text-black font-semibold">{chat.nickname}</p>
                <p>@{chat.userId}</p>
                <Icons name={dotIcon} />
                <p>{chat.createdAt}</p>
              </div>
              <p className='text-xs'>{chat.preview}</p>
            </div>
          </div>
          <Icons name={deleteIcon} className='cursor-pointer'/>
        </div>
      ))}
    </div>
  );
};

export default ChatPreviews;
