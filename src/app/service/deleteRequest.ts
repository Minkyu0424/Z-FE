import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const deleteRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');

  const response = await fetch(url, {
    method: 'DELETE',
    headers: { ...commonHeaders, ...(token && { 'access-token': token }) },
  });
  return response.json();
};

export const deletePost = async (id: string, req: Request) => {
  return deleteRequest(`${SERVER_URL}/api/posts/${id}?currentMemberTag=${'000424'}`, req);
};
