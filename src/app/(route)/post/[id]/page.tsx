import SideBar from '@/app/components/common/layouts/SideBar';
import CommentContainer from '@/app/components/post/CommentContainer';
import PostDetail from '@/app/components/post/PostDetail';
import { mockPosts } from '@/app/data/mockPost';

interface Props {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: Props) {
  const { id } = params;
//게시물 상세 id 받아와서 요청, parallel 라우트랑 단순 페이지 전환 중 고민임
  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <div className="flex-1 flex flex-col h-screen gap-y-5 overflow-y-auto">
        <PostDetail post={mockPosts[2]} />
        <CommentContainer />
      </div>
    </div>
  );
}
