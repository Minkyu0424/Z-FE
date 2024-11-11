import { getCookie } from '@/app/utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const postRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');
  const isFormData = body instanceof FormData;

  const headers: HeadersInit = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'POST',
    headers,
    body: isFormData ? body : JSON.stringify(body),
  });
  return response.json();
};

export const createPost = async (postData: FormData, authorTag: string, req: Request) => {
  return postRequest(`/api/posts/create?authorTag=${authorTag}`, req, postData);
};
