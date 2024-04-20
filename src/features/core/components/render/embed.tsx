import { EmbedYoutube } from './embed/youtube';

interface EmbedRenderProps {
  service: string;
  source: string;
  embed: string;
  width: number;
  height: number;
  caption: string;
}

export function EmbedRender(props: EmbedRenderProps) {
  switch (props.service) {
    case 'youtube':
      return <EmbedYoutube src={props.embed} />;
    default:
      return (
        <iframe
          className="mx-auto border-none not-prose my-4"
          width={props.width}
          height={props.height}
          allowTransparency
          src={props.embed}
        />
      );
  }
}
