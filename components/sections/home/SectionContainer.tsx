import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({ children, className = "" }: Props) {
  return <section className={`mx-auto max-w-[1300px] px-6 md:px-8 ${className}`}>{children}</section>;
}
