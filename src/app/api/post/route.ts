import { getPost } from '@/app/service/getRequest';
import { createPost } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  const response = await createPost(formData, '000424', req);

  return NextResponse.json(response);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get('id') || '';
  console.log(id, '가져온 id');

  const response = await getPost(req, id);

  return NextResponse.json(response);
}
