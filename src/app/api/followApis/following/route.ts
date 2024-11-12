const SERVER_URL = process.env.NEXT_PUBLIC_SERVER || "http://43.203.123.147:8080";

export interface Following {
  id: string;
  name: string;
  username: string;
  bio: string;
  profile: string;
}

interface APIResponse {
  success: boolean;
  data: {
    id: number;
    tag: string;
    nickname: string;
    profile?: string;
    bio?: string;
  }[];
  errorCode: number | null;
  errorMessage: string | null;
}

export const fetchFollowings = async (tag: string): Promise<Following[]> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/follows/followings?tag=${tag}`);
    
    if (!response.ok) {
      throw new Error('API 호출에 실패했습니다');
    }
    
    const data: APIResponse = await response.json();
    
    if (!data.success) {
      throw new Error(data.errorMessage || '팔로잉 목록을 불러오는데 실패했습니다');
    }
    
    return data.data.map(item => ({
      id: item.id.toString(),
      name: item.nickname,
      username: `@${item.tag}`,
      bio: item.bio || '',
      profile: item.profile || '',
    }));
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const unfollowUser = async (userId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${SERVER_URL}/api/follows/unfollow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error('API 호출에 실패했습니다');
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.errorMessage || '언팔로우에 실패했습니다');
    }

    return true;
  } catch (error) {
    console.error('Unfollow error:', error);
    throw error;
  }
};