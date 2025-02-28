"use client";

interface ThumbnailProps {
  url?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Thumbnail = ({
  url,
  width = 600,
  height = 400,
  className,
}: ThumbnailProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
    >
      <iframe
        src={url}
        width={width}
        height={height}
        className={`${className} shadow-md border h-[500px]`}
      />
    </a>
  );
};

export default Thumbnail;
