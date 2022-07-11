import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import { favoriteVehicle } from "../../service/vehicle/favoriteVehicle";
import { VehicleResponse } from "../../service/vehicle/vehicle-types";

export const VehicleFavOptions = ({ favorite, id }: { favorite: boolean; id: string }) => {
    const queryClient = useQueryClient();

    const favoriteAttempt = useMutation(favoriteVehicle, {
        onMutate: async (vehicle_id) => {
            await queryClient.cancelQueries(["vehicles"], { exact: false });
            console.log(vehicle_id);
            const snapshot = queryClient.getQueryData<VehicleResponse[]>(["vehicles"], { exact: false });

            console.log(snapshot);
            const matchVehicle = snapshot.find((vehicle) => vehicle.id === vehicle_id);

            queryClient.setQueryData<VehicleResponse[]>("favorite-vehicles", (previous) => [...previous, matchVehicle]);

            return { snapshot };
        },
        onError: (err, vehicle, context) => {
            queryClient.setQueriesData(
                {
                    queryKey: ["vehicles"],
                    active: true,
                },
                context.snapshot,
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries(["vehicles"], { active: true });
        },
    });

    return <>{favorite ? <RiHeartFill /> : <RiHeartLine onClick={() => favoriteAttempt.mutate(id)} />}</>;
};
