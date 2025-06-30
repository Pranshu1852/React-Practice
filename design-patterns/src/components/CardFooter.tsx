import type { HTMLProps, ReactNode } from "react";

function CardFooter({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export { CardFooter };
