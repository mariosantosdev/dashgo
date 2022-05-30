import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingTextProps extends HeadingProps {
  children: ReactNode;
}

export function HeadingText({ children, ...props }: HeadingTextProps) {
  return (
    <Heading size="lg" fontWeight="normal" {...props}>
      {children}
    </Heading>
  );
}
