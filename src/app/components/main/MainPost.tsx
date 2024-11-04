import { dotIcon } from '@/app/constants/iconPath';
import Image from 'next/image';
import Icons from '../common/ui/Icons';

interface MainPostProps {
  post: PostTypes;
}

const MainPost = ({ post }: MainPostProps) => {
  return (
    <div className="flex px-3 w-full border-b border-b-main-2 pb-2.5">
      <div className="w-8 h-8 relative">
        <Image src={post.profile} alt="프로필" fill />
      </div>
      <div className="w-full flex flex-col gap-y-2 px-2.5 text-[12px]">
        <div className="flex items-center gap-x-1 text-colors-main-1">
          <p className="text-black font-semibold">{post.nickname}</p>
          <p>@{post.userId}</p>
          <Icons name={dotIcon} />
          <p>
            @{post.userId}
            {post.createdAt}
          </p>
        </div>
        <div className="w-full flex-wrap">{post.content}</div>
        <p className="font-bold">#{post.tag}</p>
        <div className="w-full flew-wrap flex gap-2">
          {post.files.map((file, i) => (
            <div key={i} className={`relative ${post.files.length === 1 ? 'w-full' : 'w-1/2'}`}>
              <img src={file} alt={`file-${i}`} className='flex-1 rounded-xl' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPost;
