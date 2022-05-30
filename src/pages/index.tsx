import { Button, Flex, Stack } from "@chakra-ui/react";

import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "~components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido.").required("E-mail obrigatório."),
  password: yup.string().required("Senha obrigatória."),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  };

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4} mb={6}>
            <Input
              name="email"
              type="email"
              label="Email"
              error={errors.email}
              {...register("email")}
            />

            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register("password")}
            />
          </Stack>

          <Button
            type="submit"
            size="lg"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
