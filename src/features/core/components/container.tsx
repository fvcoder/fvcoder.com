import { cn } from '@nextui-org/react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container(props: ContainerProps) {
  const Element = props.as ? props.as : 'div';

  return (
    <Element className={cn('w-full max-w-3xl mx-auto px-4')}>
      {props.children}
    </Element>
  );
}
