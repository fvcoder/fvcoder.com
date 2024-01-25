import { Button } from '@nextui-org/react';

export interface TimeLineItemProps {
  title: string;
  content: string;
  link?: string;
  date: string;
}

function TimeLineItem({ title, content, link, date }: TimeLineItemProps) {
  return (
    <>
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
        {content}
      </p>
      {link && (
        <Button as="a" href={link}>
          Saber más...{' '}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      )}
    </>
  );
}

export function TimeLine({ timeline }: { timeline: TimeLineItemProps[] }) {
  return (
    <ol className="relative border-s border-gray-200 ml-3">
      {timeline.map((x, i) => (
        <li className="mb-10 ms-4" key={`time-line-${i}`}>
          <TimeLineItem {...x} />
        </li>
      ))}
    </ol>
  );
}
