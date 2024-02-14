'use client';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export interface CardPostProps {
  slug: string;
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
}

export function CardPost({
  slug,
  tag,
  title,
  image,
  imageAlt,
}: Partial<CardPostProps>) {
  const router = useRouter();

  return (
    <Card
      shadow="sm"
      className="pb-4"
      isPressable
      onPress={() => {
        router.push(`/blog/${slug}`);
      }}
    >
      <CardHeader className="px-4 flex-col items-start">
        <p className="text-sm text-neutral-500 line-clamp-1 capitalize">
          {tag}
        </p>
        <h2 className="font-bold line-clamp-1 text-lg">{title}</h2>
      </CardHeader>
      <CardBody className="overflow-visible pt-2">
        <Image
          className="object-cover rounded-xl aspect-video"
          src={image}
          alt={imageAlt}
        />
      </CardBody>
    </Card>
  );
}
