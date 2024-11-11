interface CommentTypes {
  profile: string;
  nickname: string;
  tag?: string;
  userId: string;
  createdAt: string;
  content: string;
  totalLikes: number;
  totalComment: number;
  files: string[];
}

interface UserTypes {
  profile: string;
  nickname: string;
  userId: string;
}

interface PostDetailTypes {
  id: number;
  authorNickname: string;
  authorTag: string;
  content: string;
  imageUrls: string[];
  parentPostId: number | null;
  quotePost: number | null;
  childPosts: string[];
}
