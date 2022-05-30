import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isLargeScreen && (
        <IconButton
          aria-label="Open sidebar"
          icon={<Icon as={RiMenu2Line} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}

      {/* Brand Logo */}
      <Logo />

      {/* Search Input */}
      {isLargeScreen && <SearchBar />}

      {/* Right Content */}
      <Flex align="center" ml="auto">
        <NotificationsNav />

        {/* Profile */}
        <Profile showProfileData={isLargeScreen} />
      </Flex>
    </Flex>
  );
}
