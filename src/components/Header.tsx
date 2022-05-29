import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {/* Brand Logo */}
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        DashGO
        <Text as="span" color="pink.500">
          .
        </Text>
      </Text>

      {/* Search Input */}
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        pos="relative"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" _hover={{ cursor: "pointer" }} />
      </Flex>

      {/* Right Content */}
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon
            as={RiNotificationLine}
            fontSize="20"
            _hover={{ cursor: "pointer" }}
          />
          <Icon
            as={RiUserAddLine}
            fontSize="20"
            _hover={{ cursor: "pointer" }}
          />
        </HStack>

        {/* Profile */}
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
      </Flex>
    </Flex>
  );
}
