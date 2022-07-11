import api from "../api";

export const getFavoriteVehicles = async () => {
    const response = await api.get("/v1/vehicles/favorites");

    return response.data;
};
