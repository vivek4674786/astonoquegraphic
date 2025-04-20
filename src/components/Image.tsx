interface ImageProps {
  key?: string;
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ key, src, alt, className }: ImageProps) {
  const imgProps = {
    src,
    alt,
    className,
    ...(key && { key })
  };

  return (
    <img {...imgProps} />
  );
}
