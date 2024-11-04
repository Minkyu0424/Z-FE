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

  return (
    <div className="flex bg-white w-[480px]">
      <SideBar />
      <div className="flex-1 flex flex-col gap-y-5">
        <PostDetail post={mockPosts[2]} />
        <CommentContainer />
      </div>
    </div>
  );
}
