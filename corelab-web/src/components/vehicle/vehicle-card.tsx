import { VehicleResponse } from "../../service/vehicle/vehicle-types";
import { currencyFormat } from "../../utils/currency";
import { RiCloseLine, RiEditBoxLine } from "react-icons/ri";
import { VehicleFavOptions } from "./vehicle-fav-options";

export const VehicleCard = ({ vehicle }: { vehicle: VehicleResponse }) => {
    return (
        <div className={`${vehicle.color}`}>
            <VehicleFavOptions {...vehicle} />
            <RiEditBoxLine />
            <RiCloseLine />
            <h3>{vehicle.name}</h3>
            <p>{vehicle.brand}</p>
            <p>{currencyFormat(vehicle.price)}</p>
            <p>{vehicle.description}</p>
            <p>{vehicle.color}</p>
        </div>
    );
};
