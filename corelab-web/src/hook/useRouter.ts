import { NavigateFunction, useNavigate } from "react-router-dom";

interface UseRoutesResponse {
    navigate: NavigateFunction;
}

export const useRouter = (): UseRoutesResponse => {
    const navigate = useNavigate();

    return { navigate };
};
