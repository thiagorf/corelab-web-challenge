import React from "react";
import { useModal } from "../../hook/useModal";
import "./modal-styles.scss";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const { handleToggle } = useModal();

    return (
        <div className="modal">
            <div className="modal-wrapper">
                <button onClick={handleToggle}>Fechar modal</button>
                {children}
            </div>
        </div>
    );
};
