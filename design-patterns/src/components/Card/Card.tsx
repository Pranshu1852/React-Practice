import type { HTMLProps, ReactNode } from "react";

function Card({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export { Card };
