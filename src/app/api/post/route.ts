import { deletePost } from '@/app/service/deleteRequest';
import { getPost } from '@/app/service/getRequest';
import { createPost } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  const response = await createPost(formData, '000424', req);
  console.log(response, '포스트 후 응답');

  return NextResponse.json(response);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get('id') || '';

  const response = await getPost(req, id);

  return NextResponse.json(response);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') || '';

  const data = await deletePost(id, req);
  return NextResponse.json(data);
}
