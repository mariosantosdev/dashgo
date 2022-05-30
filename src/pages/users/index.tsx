import {
  Flex,
  Box,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";

import { Header } from "~components/Header";
import { HeadingText } from "~components/HeadingText";
import { Pagination } from "~components/Pagination";
import { Sidebar } from "~components/Sidebar";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery(
    "users",
    async () => {
      const response = await fetch("/api/users");
      const data = await response.json();

      const users = data.users.map((user) => ({
        ...user,
        createdAt: new Date(user.createdAt).toLocaleDateString(),
      }));

      return users;
    },
    {
      staleTime: 5 * 1000, // 5 seconds
    }
  );

  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Head>
        <title>DashGO - Usuários</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8" maxW="100%">
          <Flex mb="8" justify="space-between" align="center">
            <HeadingText>
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </HeadingText>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Box overflowX={isLargeScreen ? "auto" : "scroll"}>
            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
                <Table
                  colorScheme="whiteAlpha"
                  overflowX={isLargeScreen ? "auto" : "scroll"}
                >
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      <Th>Data de cadastro</Th>
                      <Th w="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((user) => (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td>
                          <Text>{user.createdAt}</Text>
                        </Td>
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="blackAlpha"
                            leftIcon={<Icon as={RiPencilLine} />}
                          >
                            Editar
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </>
            )}
          </Box>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
