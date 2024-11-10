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
    const response = await fetch(`/api/follows/followers?tag=${tag}`);
    const data: APIResponse = await response.json();
    
    if (!data.success) {
      throw new Error(data.errorMessage || '팔로워 목록을 불러오는데 실패했습니다');
    }
    
    // API 응답 데이터를 Follower 인터페이스 형식으로 변환
    return data.data.map(item => ({
      id: item.userId,
      name: item.nickname,
      username: `@${item.tag}`,
      bio: item.bio || '',
      profile: item.profile,  // profile 추가
      isFollowing: false,
    }));
  };