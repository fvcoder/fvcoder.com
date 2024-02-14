import { YoutubeVideoEmbed } from './video/youtube.video';

export interface YoutubeVideoEmbed {
  provider: 'youtube';
  videoId: string;
}

type VideoEmbedProps = YoutubeVideoEmbed;

export function VideoEmbed(props: VideoEmbedProps) {
  switch (props.provider) {
    case 'youtube':
      return <YoutubeVideoEmbed {...props} />;
    default:
      return null;
  }
}
