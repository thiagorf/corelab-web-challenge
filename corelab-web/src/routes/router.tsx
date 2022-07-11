import { Route, Routes } from "react-router-dom";
import App from "../App";
import { CreateVehicleForm } from "../components/vehicleForm/createVehicleForm/create-vehicle-form";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create-vehicle" element={<CreateVehicleForm />} />
        </Routes>
    );
};
