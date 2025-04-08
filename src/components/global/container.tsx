import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-[95vw] md:max-w-[75vw] mx-auto">{children}</div>;
}
