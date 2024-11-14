import MainPost from '../main/MainPost';

interface SearchPostsProps {
  posts: PostDetailTypes[];
}

const SearchPosts = ({ posts }: SearchPostsProps) => {
  return (
    <div className="w-full flex h-full flex-col gap-y-3 overflow-y-auto ">
      {posts.map((post, i) => (
        <MainPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default SearchPosts;
