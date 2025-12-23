import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [isHide, setIshide] = useState(false);

  return (
    <LayoutContext.Provider value={{ isHide, setIshide }}>
      {children}
    </LayoutContext.Provider>
  );
}

function useLayout() {
  const context = useContext(LayoutContext);

  if (context === undefined) throw new Error("Unknown Action");

  return context;
}

export { LayoutProvider, useLayout };
