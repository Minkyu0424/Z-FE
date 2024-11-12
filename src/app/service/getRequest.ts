import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;
const commonHeaders = {
  'Content-Type': 'application/json',
};

const getRequest = async (url: string, req: Request) => {
  const token = getCookie(req, 'accessToken');
  const headers = {
    ...commonHeaders,
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  const response = await fetch(`${SERVER_URL}${url}`, { headers });
  return response.json();
};

export const getPost = async (req: Request, postId: string) => {
  const url = `/api/posts/${postId}`;
  return getRequest(url, req);
};

export const getAllPosts = async (req: Request, tag: string) => {
  const url = `/api/posts/posts?currentMemberTag=${tag}`;
  return getRequest(url, req);
};
