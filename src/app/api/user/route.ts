import { getTag } from '@/app/service/getRequest';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const response = await getTag(req);
  return NextResponse.json(response);
}
