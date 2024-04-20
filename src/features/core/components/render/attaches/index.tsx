import { Icon } from '@iconify-icon/react';
import { Button } from '@nextui-org/react';
import { filesize } from 'filesize';

const extension: Record<string, string> = {
  doc: '#1483E9',
  docx: '#1483E9',
  odt: '#1483E9',
  pdf: '#DB2F2F',
  rtf: '#744FDC',
  tex: '#5a5a5b',
  txt: '#5a5a5b',
  pptx: '#E35200',
  ppt: '#E35200',
  mp3: '#eab456',
  mp4: '#f676a6',
  xls: '#11AE3D',
  html: '#2988f0',
  htm: '#2988f0',
  png: '#AA2284',
  jpg: '#D13359',
  jpeg: '#D13359',
  gif: '#f6af76',
  zip: '#4f566f',
  rar: '#4f566f',
  exe: '#e26f6f',
  svg: '#bf5252',
  key: '#00B2FF',
  sketch: '#FFC700',
  ai: '#FB601D',
  psd: '#388ae5',
  dmg: '#e26f6f',
  json: '#2988f0',
  csv: '#11AE3D',
};

interface AttachesProps {
  title: string;
  file: {
    extension: string;
    size?: number;
    url: string;
  };
}

export function RenderAttaches(props: AttachesProps) {
  return (
    <div className="not-prose border rounded-md w-full my-4 flex gap-2 items-center px-4 py-2">
      <div className="aspect-square flex items-center justify-center">
        <div
          className="min-w-6 min-h-6 aspect-square p-1 rounded-md [font-size:10px]  uppercase font-bold text-white flex items-end justify-center"
          style={{ backgroundColor: extension[props.file.extension] }}
        >
          {props.file.extension}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <strong className="block text-sm truncate">{props.title}</strong>
        <small className="block text-neutral-500">
          {filesize(props.file.size ?? 0)}
        </small>
      </div>
      <div>
        <Button
          as="a"
          download="filename.png"
          target="_blank"
          href={props.file.url}
          size="sm"
          color="primary"
          className=" min-w-fit md:min-w-unit-16"
          startContent={
            <Icon icon="solar:download-minimalistic-bold" width={18} />
          }
        >
          <span className="hidden md:block">Descargar</span>
        </Button>
      </div>
    </div>
  );
}
