import { createContext, useContext, useState, Dispatch, SetStateAction, FC, useMemo } from 'react';

interface DarkModeContextType {
  darkModeEnabled: boolean,
  setDarkModeEnabled: Dispatch<SetStateAction<boolean>>,
};

interface Props {
  initialValue: boolean,
}

const LocalDarkModeContext = createContext<DarkModeContextType>({ darkModeEnabled: false, setDarkModeEnabled: () => {} });
const LocalDarkModeProvider = LocalDarkModeContext.Provider;

const DarkModeProvider: FC<Props> = ({ children, initialValue = false }) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(initialValue);

  return (
    <LocalDarkModeProvider value={{ darkModeEnabled, setDarkModeEnabled }}>
      {children}
    </LocalDarkModeProvider>
  );
}

function useDarkMode() {
  return useContext(LocalDarkModeContext);
}

export { DarkModeProvider, useDarkMode };
