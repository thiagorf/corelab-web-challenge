import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { getFavoriteVehicles } from "./service/vehicle/getFavoriteVehicles";
import { VehicleResponse } from "./service/vehicle/vehicle-types";
import { VehicleCard } from "./components/vehicle/vehicle-card";
import { useGetVehicles } from "./hook/useGetVehicles";

import "./app.scss";

export interface QueryParams {
    search: null | string;
    sort: "asc" | "desc" | string;
}

function App() {
    const [text, setText] = useState("");
    const [filterParam, setFilterParam] = useState<QueryParams>({
        search: null,
        sort: "asc",
    });

    const { data, isError, error, isLoading } = useGetVehicles<VehicleResponse[], Error>(filterParam);
    const { data: favorite, isLoading: isFavoriteLoading } = useQuery<VehicleResponse[], Error>(
        ["favorite-vehicles"],
        getFavoriteVehicles,
    );

    const handleClick = () => {
        if (text) {
            setFilterParam((prevValue) => ({ ...prevValue, search: text }));
        }
    };

    if (isLoading || isFavoriteLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error {error.message}</div>;
    }

    return (
        <div className="container">
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <label>
                    Ordenar:
                    <select
                        value={filterParam.sort}
                        onChange={(e) => setFilterParam((prev) => ({ ...prev, sort: e.target.value }))}
                    >
                        <option value="asc">ascendente</option>
                        <option value="desc">descendente</option>
                    </select>
                </label>
                <button onClick={handleClick}>Enviar</button>
            </div>

            <Link className="create-vehicle" to="/create-vehicle">
                <span>criar veiculo</span>
                <RiAddLine />
            </Link>

            <div className="vehicle-content">
                <h2>Favoritos</h2>
                <div className="vehicle-container">
                    {favorite.length > 0 ? (
                        <>
                            {favorite.map((vehicle) => (
                                <VehicleCard vehicle={vehicle} key={vehicle.id} />
                            ))}
                        </>
                    ) : (
                        <p>Não há favoritos no momento</p>
                    )}
                </div>
            </div>
            <div className="vehicle-content">
                <h2>Anúncios</h2>
                <div className="vehicle-container">
                    {data.map((vehicle) => (
                        <VehicleCard vehicle={vehicle} key={vehicle.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
