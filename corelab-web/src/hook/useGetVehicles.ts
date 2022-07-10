import { useQuery } from "react-query";
import { QueryParams } from "../App";
import getVehicles from "../service/vehicle/getVehicles";

export const useGetVehicles = <IResponse, IError>(filters?: QueryParams) => {
    return useQuery<IResponse, IError>(["vehicles", filters], () => getVehicles(filters));
};
