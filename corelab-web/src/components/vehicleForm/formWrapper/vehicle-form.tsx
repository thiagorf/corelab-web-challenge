import { PropsWithChildren } from "react";
import "./form-styles.scss";

type CustomFormBehavior = React.ComponentProps<"form">;

export const VehicleForm = ({ children, ...formProps }: PropsWithChildren<CustomFormBehavior>) => {
    return (
        <>
            <form className="vehicle-form" {...formProps}>
                {children}
            </form>
        </>
    );
};
