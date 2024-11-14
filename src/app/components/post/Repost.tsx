import Image from 'next/image';

interface RepostProps {
  post: QuotePostTypes | PostDetailTypes;
  isModal: boolean;
}

const Repost = ({ post, isModal }: RepostProps) => {
  const thumbnailImg = post?.imageUrls[0];
  const mainColor = isModal ? 'text-white' : 'text-black';
  const borderColor = isModal ? 'border-main-2' : 'border-main-1';
  const mainBg = isModal ? 'bg-black' : 'bg-white';

  return (
    <div className={`flex flex-col w-full pt-2 rounded-xl border gap-y-3 ${borderColor} ${mainColor} ${mainBg}`}>
      <div className="px-3 w-full text-[11px]">
        <div className="flex items-center gap-x-1 text-[10px] mb-2">
          <div className="w-6 h-6 relative rounded-full">
            <Image src="/mock/default.webp" alt="프로필" fill className="rounded-full" />
          </div>
          <p className=" font-semibold">{post.authorNickname}</p>
          <p>@{post.authorTag}</p>
        </div>
        <div className="w-full flex-wrap">{post.content}</div>
      </div>
      <div className="w-full flex flex-col text-[11px]">
        {thumbnailImg && (
          <div className="relative w-full h-[64px]">
            <Image
              src={thumbnailImg || '/mock/defualt.png'}
              alt="img"
              className="w-full h-[64px] object-cover rounded-bl-xl rounded-br-xl"
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Repost;
