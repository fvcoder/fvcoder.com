'use client';
import { useState } from 'react';

export interface YoutubeVideoEmbedProps {
  provider: 'youtube';
  videoId: string;
}

export function YoutubeVideoEmbed(props: YoutubeVideoEmbedProps) {
  const [play, setPlay] = useState(false);

  return play ? (
    <iframe
      className="rounded-xl w-full h-full aspect-video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      src={`https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&amp;playsinline=1`}
      allowFullScreen
    ></iframe>
  ) : (
    <div
      className="youtube-video-embed rounded-xl"
      onClick={() => {
        setPlay(true);
      }}
      style={{
        backgroundImage: `url("https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg")`,
      }}
    >
      <button type="button" className="lty-playbtn">
        <span className="lyt-visually-hidden">Play</span>
      </button>
    </div>
  );
}
