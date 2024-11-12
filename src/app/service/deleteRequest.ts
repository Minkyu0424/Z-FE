import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const deleteRequest = async (url: string, req: Request, bodyData?: object) => {
  const token = getCookie(req, 'accessToken');
  console.log(bodyData, '로 삭제 요창');

  const response = await fetch(url, {
    method: 'DELETE',
    headers: { ...commonHeaders, ...(token && { 'access-token': token }) },
    body: bodyData ? JSON.stringify(bodyData) : undefined,
  });
  return response.json();
};

export const deletePost = async (id: string, req: Request) => {
  return deleteRequest(`${SERVER_URL}/api/posts/${id}?currentMemberTag=${'000424'}`, req);
};

export const unFollowUser = async (tag: string, req: Request) => {
  return deleteRequest(`${SERVER_URL}/api/follows`, req, { tag });
};
