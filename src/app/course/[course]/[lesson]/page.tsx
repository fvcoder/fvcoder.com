import { Button, ButtonGroup, User } from '@nextui-org/react';
import Link from 'next/link';

import { ChevronLeftIcon } from '@/assets/icons/chevronLeft';
import { ThumpUpIcon } from '@/assets/icons/thumbUp';
import { VideoEmbed } from '@/components/embed/video';
import { Footer } from '@/components/footer';

export default function LessonPage() {
  return (
    <div className="w-full max-w-3xl px-4 mx-auto">
      <div className="aspect-video w-full bg-black rounded-xl">
        <VideoEmbed provider="youtube" videoId="2h2Sr0ZJvyE" />
      </div>
      <header>
        <div className="flex items-center py-2 gap-2 text-balance">
          <div className="flex-1">
            <h1 className="text-xl line-clamp-2">
              Aprende a Redactar un “Sobre mi” en tu Portfolio Web | Tips y
              FeedBack
            </h1>
          </div>
          <ButtonGroup>
            <Button
              isIconOnly
              variant="solid"
              size="sm"
              startContent={<ChevronLeftIcon width={15} />}
            />
            <Button
              isIconOnly
              variant="solid"
              size="sm"
              startContent={
                <ChevronLeftIcon width={15} className="rotate-180" />
              }
            />
          </ButtonGroup>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Link href={'/'}>
              <User
                name="Fernando Ticona"
                description="@fvcoder"
                avatarProps={{ src: 'https://github.com/fvcoder.png' }}
              />
            </Link>
          </div>
          <div>
            <ButtonGroup size="sm">
              <Button isIconOnly startContent={<ThumpUpIcon width={15} />} />
              <Button
                isIconOnly
                startContent={<ThumpUpIcon width={15} className="rotate-180" />}
              />
            </ButtonGroup>
          </div>
        </div>
      </header>
      <main>
        <article className="prose dark:prose-invert mx-auto my-4">
          <p>Texto Ejemplo</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
