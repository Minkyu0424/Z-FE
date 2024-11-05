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
