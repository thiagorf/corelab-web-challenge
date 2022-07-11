import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CreateVehicleData } from "../../../../service/vehicle/vehicle-types";
import { createVehicle } from "../../../../service/vehicle";
import { VehicleForm } from "../../formWrapper";
import { Input } from "../../inputs";

export const CreateVehicleForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<CreateVehicleData>();

    const attemptSubmit: SubmitHandler<CreateVehicleData> = async (data) => {
        await createVehicle(data);

        navigate("/");
    };

    return (
        <div>
            <Link to="/">Voltar</Link>
            <VehicleForm onSubmit={handleSubmit(attemptSubmit)}>
                <h4>Criar veiculo</h4>
                <Input label="name" register={register} required />
                <Input label="brand" register={register} required />
                <select {...register("color", { required: true })}>
                    <option value="vermelho" selected>
                        vermelho
                    </option>
                    <option value="azul">azul</option>
                    <option value="branco">branco</option>
                </select>
                <Input label="description" register={register} required />
                <Input label="plate" register={register} required />
                <Input label="price" register={register} required />
                <Input label="year" register={register} required />
                <button type="submit">Criar</button>
            </VehicleForm>
        </div>
    );
};
