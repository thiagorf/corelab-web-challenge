export interface VehicleResponse {
    id: string;
    name: string;
    description: string;
    price: string;
    brand: string;
    color: string;
    year: string;
    plate: string;
    favorite: boolean;
    created_at: Date;
}

export interface CreateVehicleData {
    name: string;
    description: string;
    price: string;
    brand: string;
    color: string;
    year: string;
    plate: string;
}

export interface UpdateVehicleData extends CreateVehicleData {
    id?: string;
}

interface VehicleError {
    error: string;
}

export type AxiosVehiclePostRequest = CreateVehicleData | VehicleError;
