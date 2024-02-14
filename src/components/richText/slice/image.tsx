import { Image, Tooltip } from '@nextui-org/react';
import type { RTImageNode } from '@prismicio/types';

export function ImageSlice({ url, alt }: RTImageNode) {
  return (
    <div className="max-w-full mx-auto [&:nth-child(1)]:w-fit">
      <Tooltip
        content={alt}
        classNames={{
          base: 'mx-auto w-fit',
          arrow: 'sdf',
        }}
      >
        <Image
          src={url}
          alt={alt ?? ''}
          className="max-w-full mx-auto rounded-xl h-auto"
        />
      </Tooltip>
    </div>
  );
}
