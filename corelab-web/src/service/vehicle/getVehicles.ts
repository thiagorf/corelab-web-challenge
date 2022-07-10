import { QueryParams } from "../../App";
import api from "../api";

const getVehicles = async (filters?: QueryParams) => {
    const response = await api.get("/v1/vehicles", {
        params: filters,
    });

    return response.data;
};

export default getVehicles;
