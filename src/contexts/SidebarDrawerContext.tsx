import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, useContext } from "react";

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

type SidebarDrawerContextType = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextType);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
