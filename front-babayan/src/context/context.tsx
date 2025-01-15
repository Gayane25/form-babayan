import React, { useContext, createContext, useState } from 'react';
import { ArticleData } from '../utils/types/types';

// import { LayoutType } from 'utils/types';
// import { ITypes } from 'components/SelectBox';

interface IAppContextProvider {
  children: React.ReactNode;
}

type IAppContext = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  data: ArticleData[];
  setData: React.Dispatch<React.SetStateAction<ArticleData[]>>;
};

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider: React.FC<IAppContextProvider> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [data, setData] = useState<ArticleData[]>([]);

  const contextValue = React.useMemo(
    () => ({
      isOpenMenu,
      setIsOpenMenu,
      data,
      setData,
    }),
    [isOpenMenu, data, setData]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }

  return context;
};
