"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import classNames from "classnames";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

interface PaginationProps {
  children: React.ReactNode;
  className?: string;
}

interface PaginationItemProps {
  children: React.ReactNode;
  className?: string;
}

interface PaginationLinkProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export function Pagination({ children, className }: PaginationProps) {
  return (
    <nav className={classNames("flex justify-center items-center", className)}>
      {children}
    </nav>
  );
}

export function PaginationContent({ children }: PaginationProps) {
  return <ul className="flex list-none space-x-2 items-center">{children}</ul>;
}

export function PaginationItem({ children, className }: PaginationItemProps) {
  return <li className={classNames("flex", className)}>{children}</li>;
}

export function PaginationLink({
  href,
  isActive,
  children,
}: PaginationLinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        "px-3 py-1.5 border border-gray-600 rounded-sm transition-colors duration-200 flex items-center justify-center text-sm",
        isActive
          ? "bg-gray-800 text-white border-gray-800"
          : "text-gray-400 hover:border-purple-400 hover:text-white"
      )}
    >
      {children}
    </a>
  );
}

export function PaginationPrevious({
  href,
  showOnlyIcon,
}: {
  href: string;
  showOnlyIcon: boolean;
}) {
  return (
    <PaginationLink href={href}>
      {showOnlyIcon ? (
        <FaArrowLeft className="w-3 h-3" />
      ) : (
        <>
          <FaArrowLeft className="w-3 h-3 mr-2" /> Previous
        </>
      )}
    </PaginationLink>
  );
}

export function PaginationNext({
  href,
  showOnlyIcon,
}: {
  href: string;
  showOnlyIcon: boolean;
}) {
  return (
    <PaginationLink href={href}>
      {showOnlyIcon ? (
        <FaArrowRight className="w-3 h-3" />
      ) : (
        <>
          Next <FaArrowRight className="w-3 h-3 ml-2" />
        </>
      )}
    </PaginationLink>
  );
}

export function QueryPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const showOnlyIcon = prevPage >= 1 && nextPage <= totalPages;

  return (
    <Pagination
      className={classNames("flex justify-center items-center mt-8", className)}
    >
      <PaginationContent>
        {prevPage >= 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(prevPage)}
              showOnlyIcon={showOnlyIcon}
            />
          </PaginationItem>
        )}

        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${index}`}
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={createPageURL(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages && (
          <PaginationItem>
            <PaginationNext
              href={createPageURL(nextPage)}
              showOnlyIcon={showOnlyIcon}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
