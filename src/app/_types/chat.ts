interface ChatPreviewTypes {
  profile: string;
  nickname: string;
  userId: string;
  createdAt: string;
  preview: string;
}

interface ChatTypes {
  sender: 'ohter' | 'me';
  message: string;
  date: string;
}
