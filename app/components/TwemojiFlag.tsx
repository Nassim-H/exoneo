// components/TwemojiFlag.tsx
'use client';

import { useEffect, useRef } from 'react';

interface Props {
  emoji: string;
  className?: string;
}

export default function TwemojiFlag({ emoji, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    import('@twemoji/api').then((twemoji) => {
      if (ref.current) {
        twemoji.default.parse(ref.current, {
          folder: 'svg',
          ext: '.svg',
        });
      }
    });
  }, [emoji]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      {emoji}
    </span>
  );
}