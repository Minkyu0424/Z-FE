import { getSearchMember } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const tag = searchParams.get('tag') || '';

  const response = await getSearchMember(req, tag);

  return NextResponse.json(response);
}
