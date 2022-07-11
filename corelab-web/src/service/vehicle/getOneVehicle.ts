import api from "../api";

export const getOneVehicle = async (vehicle_id: string) => {
    const response = await api.get(`/v1/vehicles/${vehicle_id}`);

    return response.data;
};
