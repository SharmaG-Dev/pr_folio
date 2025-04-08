import clsx from "clsx";

interface SectionTagProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function SectionTag({
  name,
  onClick,
  className,
}: SectionTagProps) {
  return (
    <h4
      onClick={onClick}
      className={clsx(
        "flex items-center gap-4 text-lg font-semibold text-primary",
        className
      )}
    >
      <hr className="w-14 border-primary" />
      {name}
    </h4>
  );
}
