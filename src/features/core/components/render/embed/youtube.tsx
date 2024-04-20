'use client';
import { cn } from '@nextui-org/react';
import { useState } from 'react';

import style from './youtube.module.css';

function getYoutubeId(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length === 11 ? match[7] : false;
}

interface EmbedYoutubeProps {
  src: string;
}

export function EmbedYoutube(props: EmbedYoutubeProps) {
  const [show, setShow] = useState(false);
  const id = getYoutubeId(props.src);

  return (
    <div
      className={cn('my-4 not-prose', style.main)}
      style={{
        backgroundImage: `url("https://i.ytimg.com/vi/${id}/hqdefault.jpg")`,
      }}
      onClick={!show ? () => setShow(true) : undefined}
    >
      {show ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`}
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      ) : (
        <button className={style.button}>
          <span className={style.buttonSpan}>Play</span>
        </button>
      )}
    </div>
  );
}
