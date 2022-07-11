import api from "../api";
import { UpdateVehicleData } from "./vehicle-types";

export const updateVehicle = async (data: UpdateVehicleData) => {
    const response = await api.put(`/v1/vehicles/${data.id}`, data);

    return response.data;
};
