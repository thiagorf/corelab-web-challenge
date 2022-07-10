import { useContext } from "react";
import { ModalContext, ModalContextResponse } from "../context/modal";

export const useModal = (): ModalContextResponse => {
    const modalContext = useContext(ModalContext);

    return modalContext;
};
