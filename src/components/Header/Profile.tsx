import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center" _hover={{ cursor: "pointer" }}>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mário Santos</Text>
          <Text color="gray.300" fontSize="small">
            mariodev7@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Mário Santos"
        src="https://github.com/mariosantosdev.png"
      />
    </Flex>
  );
}
