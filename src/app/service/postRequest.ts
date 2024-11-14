import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const postRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');
  const isFormData = body instanceof FormData;

  const headers: HeadersInit = {
    ...(!isFormData && { 'Content-Type': 'application/json' }),
    ...(token && { Cookie: `accessToken=${token}` }),
  };

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'POST',
    headers,
    body: isFormData ? body : JSON.stringify(body),
  });
  console.log(response);

  return response.json();
};

export const createPost = async (postData: FormData, req: Request) => {
  return postRequest('/api/posts/create', req, postData);
};

export const followUser = async (data: any, req: Request) => {
  return postRequest('/api/follows', req, data);
};
