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
