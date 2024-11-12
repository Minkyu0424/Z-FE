import { mockPosts } from '@/app/data/mockPost';
import MainPost from './MainPost';
import MainUpload from './MainUpload';

const MainContainer = () => {
  //메인화면의 작성 컴포넌트 + 게시물 목록 컴포넌트

  return (
    <div className="flex-1 pt-6 flex-col h-screen w-full overflow-y-auto">
      <MainUpload />
      <div className="flex flex-col gap-y-2.5 h-screen overflow-y-auto pt-2.5">
        {mockPosts.map((post, i) => (
          <MainPost post={post} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
