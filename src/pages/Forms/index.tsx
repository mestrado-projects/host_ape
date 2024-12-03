import { Box, Container, Divider, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext } from "react";
import { FormsVariablesContext } from "../../common/contexts/FormsVariablesContext";
import DefaultError from "./DefaultError";
import EndForms from "./EndForms";
import Register from "./Register";
import Header from "./Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Image from '../Home/assets/banner.jpg'

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
            <Box minHeight={"100vh"} marginBottom={10}>
                <Banner
                    title="Já se hospedou conosco? Aproveite ofertas especiais."
                    subtitle="Clientes que já se hospedaram ganham descontos especiais e vantagens únicas na próxima reserva."
                    backgroundImage={Image}
                />                
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
            </Box>
            <Footer/>
        </>
    );
}
