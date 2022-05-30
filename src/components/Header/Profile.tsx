import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center" _hover={{ cursor: "pointer" }}>
      <Box mr="4" textAlign="right">
        <Text>Mário Santos</Text>
        <Text color="gray.300" fontSize="small">
          mariodev7@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Mário Santos"
        src="https://github.com/mariosantosdev.png"
      />
    </Flex>
  );
}
