import { dotIcon } from '@/app/constants/iconPath';
import Image from 'next/image';
import Icons from '../common/ui/Icons';

interface RepostProps {
  post: PostDetailTypes;
  isModal: boolean;
}

const Repost = ({ post, isModal }: RepostProps) => {
  const thumbnailImg = post.imageUrls[0];
  const mainColor = isModal ? 'text-white' : 'text-black';
  const borderColor = isModal ? 'border-main-2' : 'border-main-1';
  const mainBg = isModal ? 'bg-black' : 'bg-white';

  return (
    <div className={`flex flex-col w-full pt-2 rounded-xl border gap-y-2 ${borderColor} ${mainColor} ${mainBg}`}>
      <div className="px-3 w-full  text-[11px]">
        <div className="flex items-center gap-x-1 text-[10px]">
          <div className="w-6 h-6 relative">
            <Image src="/mock/default.webp" alt="프로필" fill />
          </div>
          <p className=" font-semibold">{post.authorNickname}</p>
          <p>@{post.authorTag}</p>
          <Icons name={dotIcon} />
          <p>{post.createdAt}</p>
        </div>
        <div className="w-full flex-wrap">{post.content}</div>
      </div>
      <div className="w-full flex flex-col text-[11px]">
        <div className="relative w-full h-[64px]">
          <img src={thumbnailImg} alt="img" className="w-full h-[64px] object-cover rounded-bl-xl rounded-br-xl" />
        </div>
      </div>
    </div>
  );
};

export default Repost;
