import { Path, UseFormRegister } from "react-hook-form";
import { CreateVehicleData } from "../../../service/vehicle/vehicle-types";
import "./input-styles.scss";

interface InputProps {
    label: Path<CreateVehicleData>;
    register: UseFormRegister<CreateVehicleData>;
    required: boolean;
}

export const Input = ({ label, register, required }: InputProps) => (
    <div className="input-field">
        <label>{label}</label>
        <input {...register(label, { required })} />
    </div>
);
