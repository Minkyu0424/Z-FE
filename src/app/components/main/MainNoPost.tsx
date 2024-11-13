import { NO_POSTS_IMOJI, NO_POSTS_TEXT } from '@/app/constants/main';

const MainNoPost = () => {
  return (
    <div className="flex-col-center justify-center h-full w-80 text-xl text-main-0 gap-y-3">
      <div className="text-5xl">{NO_POSTS_IMOJI}</div>
      <p className="text-2xl font-semibold"> {NO_POSTS_TEXT[0]}</p>
      <div className="flex-col-center">
        <p className="text-lg"> {NO_POSTS_TEXT[1]}</p>
        <p className="text-lg"> {NO_POSTS_TEXT[2]}</p>
      </div>
    </div>
  );
};

export default MainNoPost;
