import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { useMutation, useQueryClient } from "react-query";
import { favoriteVehicle, unfavoriteVehicle } from "../../service/vehicle";
import { VehicleResponse } from "../../service/vehicle/vehicle-types";

export const VehicleFavOptions = ({ favorite, id }: { favorite: boolean; id: string }) => {
    const queryClient = useQueryClient();

    const attemptFavorite = useMutation(favoriteVehicle, {
        onMutate: async (vehicle_id) => {
            await queryClient.cancelQueries(["vehicles"], { exact: false });

            const snapshot = queryClient.getQueryData<VehicleResponse[]>(["vehicles"], { exact: false });

            const matchVehicle = snapshot.find((vehicle) => vehicle.id === vehicle_id);

            queryClient.setQueryData<VehicleResponse[]>(["favorite-vehicles"], (previous) => [
                ...previous,
                matchVehicle,
            ]);

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
            queryClient.invalidateQueries(["favorite-vehicles"]);
        },
    });

    const attemptUnfavorite = useMutation(unfavoriteVehicle, {
        onMutate: async (vehicle_id) => {
            await queryClient.cancelQueries(["favorite-vehicles"]);

            const snapshot = queryClient.getQueryData<VehicleResponse[]>(["favorite-vehicles"]);

            const matchVehicle = snapshot.find((vehicle) => vehicle.id === vehicle_id);

            queryClient.setQueriesData<VehicleResponse[]>(
                {
                    queryKey: ["vehicles"],
                    exact: false,
                },
                (previous) => [...previous, matchVehicle],
            );

            return { snapshot };
        },

        onError: (err, vehicle, context) => {
            queryClient.setQueryData(["favorite-vehicles"], context.snapshot);
        },
        onSettled: () => {
            queryClient.invalidateQueries(["favorite-vehicles"]);
            queryClient.invalidateQueries(["vehicles"], { exact: false });
        },
    });

    return (
        <>
            {favorite ? (
                <RiHeartFill onClick={() => attemptUnfavorite.mutate(id)} />
            ) : (
                <RiHeartLine onClick={() => attemptFavorite.mutate(id)} />
            )}
        </>
    );
};
