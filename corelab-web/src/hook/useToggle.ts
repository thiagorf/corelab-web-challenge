import { useState } from "react";

interface ToggleResponse {
    toggle: boolean;
    handleToggle: () => void;
}

export const useToggle = (): ToggleResponse => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return { toggle, handleToggle };
};
