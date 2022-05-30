import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, label, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        ref={ref}
        id={name}
        name={name}
        type="email"
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
      />
      {Boolean(error) && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
