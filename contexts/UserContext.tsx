"use client";

import { createContext, useContext, useState } from "react";

interface UserContextData {}

const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useApp = () => {
  return useContext(UserContext);
};
