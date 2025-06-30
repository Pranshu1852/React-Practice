import type { HTMLProps, ReactNode } from "react";

function CardDescription({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLParagraphElement>) {
  return <p {...props}>{children}</p>;
}

export { CardDescription };
