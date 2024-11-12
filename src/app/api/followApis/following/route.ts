
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
    const response = await fetch(`/api/follows/followings?tag=${tag}`);
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
  };
  
  export const unfollowUser = async (userId: string): Promise<boolean> => {
    const response = await fetch('/api/follows/unfollow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
  
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.errorMessage || '언팔로우에 실패했습니다');
    }
  
    return true;
  };