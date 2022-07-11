import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { VehicleResponse } from "../../service/vehicle/vehicle-types";
import { RiCloseLine, RiEditBoxLine } from "react-icons/ri";
import { VehicleFavOptions } from "./vehicle-fav-options";
import { currencyFormat } from "../../utils/currency";
import { deleteVehicle } from "../../service/vehicle";
import "./vehicle-card.scss";

export const VehicleCard = ({ vehicle }: { vehicle: VehicleResponse }) => {
    const queryClient = useQueryClient();

    const attemptVehicleDelete = useMutation(deleteVehicle, {
        onMutate: async (vehicle_id) => {
            await queryClient.cancelQueries(["vehicles"], { exact: false });

            const snapshot = queryClient.getQueryData<VehicleResponse[]>(["vehicles"], { exact: false });

            const vehicleIndex = snapshot.findIndex((vehicle) => vehicle.id === vehicle_id);

            const optimisticUpdateData = snapshot.filter((vehicle) => vehicle.id != snapshot[vehicleIndex].id);

            queryClient.setQueriesData(
                {
                    queryKey: ["vehicles"],
                    exact: false,
                },
                optimisticUpdateData,
            );

            return { snapshot };
        },
        onError: (err, vehicle, context) => {
            queryClient.setQueriesData(
                {
                    queryKey: ["vehicles"],
                    exact: false,
                },
                context.snapshot,
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries(["vehicles"], { exact: false });
        },
    });

    return (
        <div className={`vehicle-card  ${vehicle.color}`}>
            <div className="vehicle-options">
                <VehicleFavOptions {...vehicle} />
                <Link to={`/edit-vehicle/${vehicle.id}`}>
                    <RiEditBoxLine />
                </Link>
                <RiCloseLine onClick={() => attemptVehicleDelete.mutate(vehicle.id)} />
            </div>
            <p>Nome: {vehicle.name}</p>
            <p>Marca: {vehicle.brand}</p>
            <p>Preço: {currencyFormat(vehicle.price)}</p>
            <p>Descrição: {vehicle.description}</p>
            <p>Cor: {vehicle.color}</p>
        </div>
    );
};
