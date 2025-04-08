import Image from "next/image";

interface BubbleProps {
  image: string;
  width?: number;
  height?: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export default function Bubble({
  image,
  width = 50,
  height = 50,
  left = "auto",
  right = "auto",
  top = "auto",
  bottom = "auto",
}: BubbleProps) {
  return (
    <div
      style={{ left, right, top, bottom }}
      className="absolute rounded-full p-4 bg-white w-20 h-20 flex items-center justify-center"
    >
      <Image src={image} width={width} height={height} alt="_bubble" />
    </div>
  );
}
