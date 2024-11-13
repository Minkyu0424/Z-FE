'use client';

import { callGet } from '@/app/utils/callApi';
import { useEffect, useState } from 'react';
import MainPost from './MainPost';
import MainUpload from './MainUpload';

const MainContainer = () => {
  const [postDatas, setPostDatas] = useState<PostDetailTypes[] | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const resData = await callGet(`/api/mainPosts?tag=${'callmeZ'}`);
        setPostDatas(resData.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };
    fetchPostDetail();
  }, []);
  return (
    <div className="flex-1 pt-6 flex-col h-screen w-full overflow-y-auto">
      <MainUpload />
      <div className="flex flex-col gap-y-2.5 h-screen overflow-y-auto pt-2.5">
        {postDatas?.map((post, i) => <MainPost post={post} />)}
      </div>
    </div>
  );
};

export default MainContainer;
