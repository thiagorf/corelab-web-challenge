import api from "../api";
import { CreateVehicleData } from "./vehicle-types";

export const createVehicle = async (data: CreateVehicleData) => {
    const response = await api.post("/v1/vehicles", data);

    return response.data;
};
