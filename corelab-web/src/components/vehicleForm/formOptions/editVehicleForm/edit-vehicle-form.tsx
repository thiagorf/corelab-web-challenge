import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneVehicle } from "../../../../service/vehicle";
import { updateVehicle } from "../../../../service/vehicle/updateVehicle";
import { UpdateVehicleData, VehicleResponse } from "../../../../service/vehicle/vehicle-types";
import { VehicleForm } from "../../formWrapper";
import { Input } from "../../inputs";

export const EditVehicleForm = () => {
    const { id } = useParams();

    const [vehicleData, setVehicleData] = useState<UpdateVehicleData>();

    const { register, handleSubmit, reset } = useForm<UpdateVehicleData>({
        defaultValues: useMemo(() => {
            return vehicleData;
        }, [vehicleData]),
    });

    const navigate = useNavigate();
    const attemptSubmit: SubmitHandler<UpdateVehicleData> = async (data) => {
        await updateVehicle(data);

        navigate("/");
    };

    useEffect(() => {
        (async () => {
            const response = await getOneVehicle(id);

            setVehicleData(response);
            reset(response);
        })();
    }, []);

    return (
        <div>
            <Link to="/">Voltar</Link>
            <VehicleForm onSubmit={handleSubmit(attemptSubmit)}>
                <Input label="name" register={register} required />
                <Input label="brand" register={register} required />
                <Input label="color" register={register} required />
                <Input label="description" register={register} required />
                <Input label="plate" register={register} required />
                <Input label="price" register={register} required />
                <Input label="year" register={register} required />
                <button type="submit">Atualizar</button>
            </VehicleForm>
        </div>
    );
};
