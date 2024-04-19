import { cn } from '@nextui-org/react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
}

export function Container(props: ContainerProps) {
  const Element = props.as ? props.as : 'div';

  return (
    <Element
      className={cn('w-full mx-auto px-4', props.className, {
        'max-w-3xl': !props.fullWidth,
      })}
    >
      {props.children}
    </Element>
  );
}
