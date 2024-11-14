'use client';

import { useUserStore } from '@/app/store/store';
import { callGet } from '@/app/utils/callApi';
import { useCallback, useEffect, useState } from 'react';
import MainNoPost from './MainNoPost';
import MainPost from './MainPost';
import MainUpload from './MainUpload';

const MainContainer = () => {
  const [postDatas, setPostDatas] = useState<PostDetailTypes[] | null>(null);
  const { user } = useUserStore();

  const fetchPostDetail = useCallback(async () => {
    try {
      const resData = await callGet(`/api/mainPosts?tag=${user?.tag}`);
      setPostDatas(resData.data);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }, [user]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail, user]);

  return (
    <div className="flex-1 pt-6 flex-col-center h-screen w-full overflow-y-auto">
      <MainUpload onNewPost={fetchPostDetail} />
      {postDatas?.length === 0 ? (
        <MainNoPost />
      ) : (
        <div className="flex flex-col w-full gap-y-2.5 h-screen overflow-y-auto pt-2.5">
          {postDatas?.map((post, i) => <MainPost post={post} onNewPost={fetchPostDetail} />)}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
