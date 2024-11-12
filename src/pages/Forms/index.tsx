import { Container, Divider, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext } from "react";
import { FormsVariablesContext } from "../../common/contexts/FormsVariablesContext";
import DefaultError from "./DefaultError";
import EndForms from "./EndForms";
import Register from "./Register";
import Header from "./Header";

export default function Forms() {
    const { step } = useContext(FormsVariablesContext);

    function currentStep(current: number) {
        switch (current) {
            case 0:
                return <Register />;
            case 1:
                return <EndForms />;
            default:
                return <DefaultError />;
        }
    }

    return (
        <>
            <Header></Header>
            <Container>
                <Stepper activeStep={step}>
                    <Step>
                        <StepLabel>Cadastro</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Conclusão</StepLabel>
                    </Step>
                </Stepper>
                <Divider variant="middle" sx={{ mt: 2 }} />
                <Container>{currentStep(step)}</Container>
            </Container>
        </>
    );
}
