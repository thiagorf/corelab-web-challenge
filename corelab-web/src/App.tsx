import { useState } from "react";
import { VehicleResponse } from "./service/vehicle/vehicle-types";
import { useGetVehicles } from "./hook/useGetVehicles";
import { Link } from "react-router-dom";
import { VehicleCard } from "./components/vehicle/vehicle-card";
import { useQuery } from "react-query";
import { getFavoriteVehicles } from "./service/vehicle/getFavoriteVehicles";

export interface QueryParams {
    search: null | string;
}

function App() {
    const [text, setText] = useState("");
    const [filterParam, setFilterParam] = useState<QueryParams>({
        search: null,
    });

    const { data, isError, error, isLoading } = useGetVehicles<VehicleResponse[], Error>(filterParam);
    const { data: favorite, isLoading: isFavoriteLoading } = useQuery<VehicleResponse[], Error>(
        "favorite-vehicles",
        getFavoriteVehicles,
    );

    const handleClick = () => {
        if (text) {
            setFilterParam({ search: text });
        }
    };

    if (isLoading || isFavoriteLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error {error.message}</div>;
    }

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleClick}>Enviar</button>
            <Link to="/create-vehicle">criar veiculo</Link>
            <div>
                <h2>Favoritos</h2>
                <div>
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
            <div>
                <h2>Anúncios</h2>
                {data.map((vehicle) => (
                    <VehicleCard vehicle={vehicle} key={vehicle.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
