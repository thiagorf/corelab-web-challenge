import api from "../api";

export const unfavoriteVehicle = async (vehicle_id: string) => {
    const response = await api.put(`/v1/vehicles/${vehicle_id}/unfavorites`);

    return response.data;
};
