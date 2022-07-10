import React, { createContext } from "react";
import { useToggle } from "../hook/useToggle";

export interface ModalContextResponse {
    toggle: boolean;
    handleToggle: () => void;
}

export const ModalContext = createContext({} as ModalContextResponse);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const { toggle, handleToggle } = useToggle();

    return <ModalContext.Provider value={{ toggle, handleToggle }}>{children}</ModalContext.Provider>;
};
