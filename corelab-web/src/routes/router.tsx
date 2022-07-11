import { Route, Routes } from "react-router-dom";
import { CreateVehicleForm, EditVehicleForm } from "../components/vehicleForm/formOptions";
import App from "../App";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create-vehicle" element={<CreateVehicleForm />} />
            <Route path="/edit-vehicle/:id" element={<EditVehicleForm />} />
        </Routes>
    );
};
