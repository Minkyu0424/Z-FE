const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

import { Follower } from "@/app/_types/main";

interface APIResponse {
  success: boolean;
  data: {
    userId: string;
    nickname: string;
    tag: string;
    profile: string;
    bio?: string;
  }[];
  errorCode: number | null;
  errorMessage: string | null;
}

export const fetchFollowers = async (tag: string): Promise<Follower[]> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/follows/followers?tag=${tag}`);
    
    if (!response.ok) {
      throw new Error('API 호출에 실패했습니다');
    }
    
    const data: APIResponse = await response.json();
    
    if (!data.success) {
      throw new Error(data.errorMessage || '팔로워 목록을 불러오는데 실패했습니다');
    }
    
    return data.data.map(item => ({
      id: item.userId,
      name: item.nickname,
      username: `@${item.tag}`,
      bio: item.bio || '',
      profile: item.profile,
      isFollowing: false,
    }));
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};