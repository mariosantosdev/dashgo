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
} from "@chakra-ui/react";
import Head from "next/head";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "~components/Header";
import { HeadingText } from "~components/HeadingText";
import { Pagination } from "~components/Pagination";
import { Sidebar } from "~components/Sidebar";

export default function UserList() {
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
            <HeadingText>Usuários</HeadingText>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Box overflowX={isLargeScreen ? "auto" : "scroll"}>
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
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Mário Santos</Text>
                      <Text fontSize="sm" color="gray.300">
                        mariodev7@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Text>16/03/2022</Text>
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
              </Tbody>
            </Table>
          </Box>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
