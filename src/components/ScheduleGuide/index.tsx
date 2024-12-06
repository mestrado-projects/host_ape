import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)({
    backgroundColor: "#e0e0e0",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

const DetailBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isVisible",
})<{ isVisible: boolean }>(({ isVisible }) => ({
    marginTop: "16px",
    padding: "16px",
    backgroundColor: "#f0f0f0",
    width: "100%",
    textAlign: "center",
    borderRadius: "8px",
    maxWidth: "800px",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
}));

const CustomStepper = styled(Stepper)({
    backgroundColor: "transparent",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 24px",
    ".MuiStepConnector-line": {
        display: "none",
    },
});

const CustomStepLabel = styled(StepLabel)({
    textAlign: "left",
    "& .MuiStepLabel-label": {
        color: "#333",
    },
});

interface StepData {
    label: string;
    description: string;
    moreText: string;
}

const steps: StepData[] = [
    { label: "Primeiro Passo", description: "Ter tido ao menos uma reserva para ter acesso", moreText: "Para ter acesso aos beneficios exclusivos, você deve ter feito ao menos uma reserva pelo Airbnb" },
    { label: "Segundo Passo", description: "Escolha uma nova reserva", moreText: "Veja os detalhes, fotos e comodidades para garantir que o apartamento atenda às suas necessidades." },
    { label: "Terceiro Passo", description: "Faça sua reserva com descontos", moreText: "Se comunique diretamente com o proprietario para ter acesso aos beneficios" },
];

export default function SchedulingInstructions() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const handleStepClick = (index: number) => {
        setActiveStep((prev) => (prev === index ? null : index));
    };

    return (
        <Container>
            <CustomStepper alternativeLabel nonLinear activeStep={activeStep ?? -1}>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => handleStepClick(index)} sx={{ cursor: "pointer" }}>
                        <CustomStepLabel>
                            <Typography variant="h6">{step.label}</Typography>
                            <Typography variant="body2" color="textSecondary">{step.description}</Typography>
                        </CustomStepLabel>
                    </Step>
                ))}
            </CustomStepper>

            <DetailBox isVisible={activeStep !== null}>
                {activeStep !== null && (
                    <Typography variant="body1">
                        {steps[activeStep].moreText}
                    </Typography>
                )}
            </DetailBox>
        </Container>
    );
}
