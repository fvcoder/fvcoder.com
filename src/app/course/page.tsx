'use client';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
} from '@nextui-org/react';
import { useQueries } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Footer } from '@/components/footer';
import { getCourseList } from '@/query/course';
import { Tag } from '@/types/query/course.req';

export default function CourseListPage() {
  const router = useRouter();
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectTag, setSelectTag] = useState<Tag | null>(null);
  const [course] = useQueries({
    queries: [getCourseList({ page: 1, enabled: true })],
  });
  const filterItems = course.data
    ? selectTag !== null
      ? course.data.items.filter((x) =>
          x.tags.find((y) => y.id === selectTag.id),
        )
      : course.data.items
    : [];

  useEffect(() => {
    if (course.data) {
      const allTags: Tag[] = [];
      course.data.items.forEach((item) => {
        item.tags.forEach((y) => {
          if (!allTags.find((x) => x.id === y.id)) {
            allTags.push(y);
          }
        });
      });

      setTags(allTags);
    }
  }, [course.data]);

  function tagOnPress(tagIndex: number) {
    if (selectTag) {
      if (selectTag.id === tags[tagIndex].id) {
        setSelectTag(null);
      } else {
        setSelectTag(tags[tagIndex]);
      }
    } else {
      setSelectTag(tags[tagIndex]);
    }
  }

  return (
    <div className="w-full max-w-3xl px-4 mx-auto">
      <header className="px-5 pt-10 md:pt-20 pb-10 min-h-40 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-xl flex flex-col items-start md:items-center justify-center">
        <h1 className="text-white text-3xl font-bold">
          Cursos de Programacion Web
        </h1>
        <p className="text-zinc-100 mt-2">
          Aprende a programar, o refuerza tu conocimiento
        </p>
        <div className="mt-4">
          <Button variant="solid">Explorar</Button>
        </div>
      </header>
      <main className="mb-4">
        <section className="w-full my-4 flex items-center gap-2 flex-wrap">
          {tags.map((x, i) => (
            <Button
              size="sm"
              color={selectTag && selectTag.id === x.id ? 'primary' : 'default'}
              onPress={() => {
                tagOnPress(i);
              }}
              key={`tag-${i}`}
            >
              {x.title}
            </Button>
          ))}
          {tags.length === 0 &&
            Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={`tags-loadding-${i}`}
                className="h-8 aspect-[3/1] rounded-xl"
              />
            ))}
        </section>
        <section className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {!course.isLoading &&
            course.data &&
            filterItems.map((x, i) => (
              <Card
                shadow="sm"
                key={`course-list-${i}`}
                isPressable
                onPress={() => {
                  router.push(`/course/${x.slug}`);
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={`${x.title} post`}
                    className="w-full object-cover h-[140px]"
                    src={x.imageOriginal}
                    srcSet={`
                      ${x.image1x} 300w,
                      ${x.image2x} 600w,
                      ${x.image3x} 1200w,
                      ${x.imageOriginal} 1920w
                    `}
                    sizes={`(max-width: 300w) 300w, (max-width: 600w) 600w, (max-width: 1200w) 1200w, 1920w`}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b className="line-clamp-1">{x.title}</b>
                </CardFooter>
              </Card>
            ))}

          {course.isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div key={`course-loadding-${i}`}>
                <Skeleton className="aspect-square rounded-xl" />
              </div>
            ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
