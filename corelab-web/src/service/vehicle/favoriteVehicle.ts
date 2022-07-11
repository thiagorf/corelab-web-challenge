import api from "../api";

export const favoriteVehicle = async (vehicle_id: string) => {
    const response = await api.put(`/v1/vehicles/${vehicle_id}/favorites`);

    return response.data;
};
