import type { HTMLProps, ReactNode } from "react";

function CardHeader({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export { CardHeader };
