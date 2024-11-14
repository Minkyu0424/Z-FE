import SideBar from '@/app/components/common/layouts/SideBar';
import CommentContainer from '@/app/components/post/CommentContainer';
import PostDetail from '@/app/components/post/PostDetail';

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
      <div className="flex-1 flex flex-col h-screen gap-y-5 overflow-y-auto">
        <PostDetail postId={id} />
        <CommentContainer postId={id} />
      </div>
    </div>
  );
}
