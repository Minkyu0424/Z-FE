import { getCookie } from '../utils/setToken';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const patchRequest = async (url: string, req: Request, body: any = null) => {
  const token = getCookie(req, 'accessToken');
  const isFormData = body instanceof FormData;

  const headers: HeadersInit = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token && { Cookie: `accessToken=${token}` }),
  };

  const response = await fetch(`${SERVER_URL}${url}`, {
    method: 'PATCH',
    headers,
    body: isFormData ? body : JSON.stringify(body),
  });
  console.log(url, '실 서버 요청 주소');

  return response.json();
};

export const patchPost = async (postData: FormData, postId: string, authorTag: string, req: Request) => {
  return patchRequest(`/api/posts/${postId}?currentMemberTag=${authorTag}`, req, postData);
};
