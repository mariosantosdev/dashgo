import {
  Flex,
  Box,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Input } from "~components/Form/Input";
import { Header } from "~components/Header";
import { HeadingText } from "~components/HeadingText";
import { Sidebar } from "~components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  email: yup.string().email("E-mail inválido.").required("E-mail obrigatório."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "Senha deve ter no mínimo 6 caracteres."),
  password_confirmation: yup
    .string()
    .required("Confirmação de senha obrigatória.")
    .oneOf([null, yup.ref("password")], "Senhas não conferem."),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Head>
        <title>DashGO - Criar Usuário</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <HeadingText>Criar Usuários</HeadingText>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar Senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
