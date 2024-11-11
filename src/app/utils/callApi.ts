const headers = {
  'Content-Type': 'application/json',
};

export async function callGet(url: string) {
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
}

export async function callPost(url: string, body?: FormData | any) {
  const options: RequestInit = {
    method: 'POST',
    body: body instanceof FormData ? body : JSON.stringify(body),
  };
  if (!(body instanceof FormData)) {
    options.headers = { 'Content-Type': 'application/json' };
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export async function callPatch(url: string, body?: any) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

export async function callDelete(url: string) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers,
  });
  const data = await response.json();
  return data;
}
