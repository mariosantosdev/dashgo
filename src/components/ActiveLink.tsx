import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement, useMemo } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    if (shouldMatchHref && asPath === rest.href) return true;
    if (shouldMatchHref && asPath === rest.as) return true;

    if (!shouldMatchHref && asPath.startsWith(String(rest.href))) return true;
    if (!shouldMatchHref && asPath.startsWith(String(rest.as))) return true;

    return false;
  }, [asPath, rest.as, rest.href, shouldMatchHref]);

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
}
