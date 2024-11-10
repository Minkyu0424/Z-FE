interface ImageFileTypes {
  type: 'image';
  file: File;
  preview: string;
}

interface PostTypes {
  profile:string
  nickname: string;
  tag: string;
  userId:string
  createdAt: string;
  content: string;
  totalLikes: number;
  totalComment: number;
  files: string[];
}
export interface Follower {
  id: string;
  name: string;
  username: string;
  bio: string;
  isFollowing: boolean;
  profile: string;
}