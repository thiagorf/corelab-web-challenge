import { useState } from "react";
import { VehicleResponse } from "./service/vehicle/vehicle-types";
import { useGetVehicles } from "./hook/useGetVehicles";
import { Modal } from "./components/modal/Modal";
import { useModal } from "./hook/useModal";

export interface QueryParams {
    search: null | string;
}

function App() {
    const { toggle, handleToggle } = useModal();
    const [filterParam, setFilterParam] = useState<QueryParams>({
        search: null,
    });
    const [text, setText] = useState("");
    const { data, isError, error, isLoading } = useGetVehicles<VehicleResponse[], Error>(filterParam);

    const handleClick = () => {
        if (text) {
            setFilterParam({ search: text });
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error {error.message}</div>;
    }

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleClick}>Enviar</button>
            <button onClick={handleToggle}>criar veiculo</button>
            {toggle && (
                <Modal>
                    <p>Teste</p>
                </Modal>
            )}
            {data.map((vehicle) => (
                <div>{JSON.stringify(vehicle)}</div>
            ))}
        </div>
    );
}

export default App;
