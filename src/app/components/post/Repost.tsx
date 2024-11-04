import { dotIcon } from '@/app/constants/iconPath';
import Image from 'next/image';
import Icons from '../common/ui/Icons';

interface RepostProps {
  post: PostTypes;
}

const Repost = ({ post }: RepostProps) => {
  const thumbnailImg = post.files[0];
  return (
    <div className="flex flex-col w-full pt-2 rounded-xl border border-main-2 text-white">
      <div className="px-3 w-full  text-[11px]">
        <div className="flex items-center gap-x-1 text-main-3 text-[10px]">
          <div className="w-6 h-6 relative">
            <Image src={post.profile} alt="프로필" fill />
          </div>
          <p className=" font-semibold">{post.nickname}</p>
          <p>@{post.userId}</p>
          <Icons name={dotIcon} />
          <p>{post.createdAt}</p>
        </div>
        <div className="w-full flex-wrap">{post.content}</div>
      </div>
      <div className="w-full flex flex-col text-[11px]">
        <div className="w-full flex-wrap flex gap-2">
          <div className="relative w-full h-[64px]">
            <img src={thumbnailImg} alt="img" className="w-full h-[60px] object-cover rounded-bl-xl rounded-br-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repost;
