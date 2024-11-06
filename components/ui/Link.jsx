"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_FONT } from "@/lib/font";

export const Link = ({ className = "", href = "#", children }) => {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};

export const ExternalLink = ({ className = "", href = "#", children }) => {
  return (
    <NextLink href={href} className={className} target="_blank">
      {children}
    </NextLink>
  );
};

export const NavLink = ({ href = "#", children }) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");

  const isCurrent = `/${pathnameArray[1]}` === href;

  return (
    <NextLink
      href={href}
      className={`${PRIMARY_FONT.className} text-2xl relative group`}
    >
      {children}
      <span
        className={`absolute right-0 -bottom-1 bg-green-700 ${
          isCurrent
            ? "h-[2px] w-full rounded"
            : "h-[1px] w-0 group-hover:w-full transition-all"
        }`}
      />
    </NextLink>
  );
};
