import { Heading, HeadingProps } from "@chakra-ui/react";

interface HeadingTextProps extends HeadingProps {
  children: string;
}

export function HeadingText({ children, ...props }: HeadingTextProps) {
  return (
    <Heading size="lg" fontWeight="normal" {...props}>
      {children}
    </Heading>
  );
}
