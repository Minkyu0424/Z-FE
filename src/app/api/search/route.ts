import { getMember } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const tag = searchParams.get('tag') || '';

  const response = await getMember(req, tag);
  console.log(response, '검색 응답');

  return NextResponse.json(response);
}
