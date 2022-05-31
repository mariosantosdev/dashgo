import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import { Fragment, useMemo } from "react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfItems: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfItems,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = useMemo(() => {
    return Math.floor(totalCountOfItems / registersPerPage);
  }, [totalCountOfItems, registersPerPage]);

  const previousPage = useMemo(() => {
    if (currentPage > 1)
      return generatePagesArray(
        currentPage - 1 - siblingsCount,
        currentPage - 1
      );

    return [];
  }, [currentPage]);

  const nextPage = useMemo(() => {
    if (currentPage < lastPage)
      return generatePagesArray(
        currentPage,
        Math.min(currentPage + siblingsCount, lastPage)
      );

    return [];
  }, [currentPage, lastPage]);

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber="1" />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length &&
          previousPage.map((page) => (
            <PaginationItem
              onPageChange={onPageChange}
              key={page}
              pageNumber={String(page)}
            />
          ))}

        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={String(currentPage)}
          isCurrent
        />

        {nextPage.length &&
          nextPage.map((page) => (
            <Fragment key={page}>
              <PaginationItem
                onPageChange={onPageChange}
                pageNumber={String(page)}
              />
              {currentPage + 1 + siblingsCount < lastPage && (
                <Text color="gray.300" width="8" textAlign="center">
                  ...
                </Text>
              )}
            </Fragment>
          ))}

        {currentPage + siblingsCount < lastPage && (
          <PaginationItem
            onPageChange={onPageChange}
            pageNumber={String(lastPage)}
          />
        )}
      </HStack>
    </Stack>
  );
}
