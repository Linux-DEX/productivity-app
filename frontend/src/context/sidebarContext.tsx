'use client';

import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface SidebarContextType {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

interface SidebarContextProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({
  children,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContextProvider, SidebarContext };
