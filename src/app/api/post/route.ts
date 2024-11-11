import { createPost } from '@/app/service/postRequest';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();

  const response = await createPost(formData, '000424', req);

  return NextResponse.json(response);
}
