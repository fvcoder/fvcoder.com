import { PutObjectCommand } from '@aws-sdk/client-s3';
import { lookup } from 'mime-types';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import * as sharp from 'sharp';

import { r2 } from '@/features/core/lib/r2';
import { generateUid } from '@/features/core/utils/generateUid';

const mimeTypesImgFiles = ['image/png', 'image/jpeg'];

export async function POST(
  req: NextRequest,
): Promise<NextResponse<{ success: number }>> {
  const data = await req.formData();
  const image = data.get('image') as File | undefined;
  const file = data.get('file') as File | undefined;

  if (!file && !image) {
    return NextResponse.json(
      {
        success: 0,
      },
      { status: 422 },
    );
  }

  const session = await getServerSession();

  if (!session || session.user?.email !== 'thefersh24@gmail.com') {
    return NextResponse.json(
      {
        success: 0,
      },
      { status: 403 },
    );
  }

  if (image) {
    const mimeType = lookup(image.name) as string;
    if (!mimeType || !mimeTypesImgFiles.includes(mimeType)) {
      return NextResponse.json(
        {
          success: 0,
        },
        { status: 422 },
      );
    }

    const path = `media/${generateUid()}.webp`;

    const fileBuffer = Buffer.from(await image.arrayBuffer());
    const convert = sharp.default(fileBuffer).webp({ quality: 80 });
    const metadata = await convert.metadata();

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: path,
      ContentType: 'image/webp',
      Body: await convert.toBuffer(),
    });

    await r2.send(command);

    return NextResponse.json({
      success: 1,
      file: {
        url: `https://cdn.fvcoder.com/${path}`,
        size: metadata.size,
        extension: 'webp',
      },
    });
  }
  if (file) {
    const extension = file.name.split('.').pop();
    const mimeType = lookup(file.name) as string;
    const path = `file/${generateUid()}-${file.name}`;

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: path,
      ContentType: mimeType,
      Body: Buffer.from(await file.arrayBuffer()),
    });

    await r2.send(command);

    return NextResponse.json({
      success: 1,
      file: {
        url: `https://cdn.fvcoder.com/${path}`,
        size: file.size,
        extension: extension ?? '',
        title: file.name,
      },
    });
  }

  return NextResponse.json(
    {
      success: 0,
    },
    { status: 422 },
  );
}
