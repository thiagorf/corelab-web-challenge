import api from "../api";

export const deleteVehicle = async (vehicle_id: string) => {
    const response = await api.delete(`/v1/vehicles/${vehicle_id}`);

    return response.data;
};
