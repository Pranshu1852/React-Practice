import type { HTMLProps, ReactNode } from "react";

function CardTitle({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLHeadingElement>) {
  return <h2 {...props}>{children}</h2>;
}

export { CardTitle };
