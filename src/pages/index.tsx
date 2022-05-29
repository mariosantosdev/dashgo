import { Button, Flex, Stack } from "@chakra-ui/react";

import Head from "next/head";
import { Input } from "~components/Form/Input";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>DashGO - Login</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          flexDir="column"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p={8}
          borderRadius={8}
        >
          <Stack spacing={4} mb={6}>
            <Input name="email" type="email" label="Email" />

            <Input name="password" type="password" label="Senha" />
          </Stack>

          <Button type="submit" size="lg" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
