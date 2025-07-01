import type { HTMLProps, ReactNode } from "react";

function CardContent({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export { CardContent };
