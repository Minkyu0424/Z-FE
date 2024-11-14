import { unFollowUser } from '@/app/service/deleteRequest';
import { followUser } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  const response = await followUser(data, req);
  return NextResponse.json(response);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get('tag') || '';

  const response = await unFollowUser(tag, req);
  return NextResponse.json(response);
}
