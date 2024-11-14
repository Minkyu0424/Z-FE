import { create } from 'zustand';
import { callGet } from '../utils/callApi';

interface UserState {
  user: UserTagTypes | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  fetchUser: async () => {
    set({ isLoading: true });
    try {
      const data = await callGet('/api/user');
      set({ user: data.data, isLoading: false, error: null });
    } catch (err) {
      set({ error: '유저 정보를 가져오는 데 실패했습니다.', isLoading: false });
    }
  },
}));
