import { deletePost } from '@/app/service/deleteRequest';
import { getPost } from '@/app/service/getRequest';
import { patchPost } from '@/app/service/patchRequest';
import { createPost } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  const response = await createPost(formData, 'callmeZ', req);
  return NextResponse.json(response);
}

export async function PATCH(req: Request) {
  const { searchParams } = new URL(req.url);
  const formData = await req.formData();

  const id = searchParams.get('id') || '';
  const tag = searchParams.get('tag') || '';

  const data = await patchPost(formData, id, tag, req);
  return NextResponse.json(data);
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
