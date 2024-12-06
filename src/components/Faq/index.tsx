import React from "react";

import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface FaqProps {
    preview: boolean;
}

interface FAQ {
    question: string;
    answer: string;
}

const faqPreview: FAQ[] = [
    {
        question: "Onde posso acessar os detalhes da hospedagem?",
        answer:
            "Após a confirmação da sua reserva, você poderá acessar todos os detalhes da sua hospedagem, incluindo o endereço completo, as instruções de check-in e o contato do anfitrião. Para garantir a segurança e privacidade, é necessário estar logado com sua conta de hóspede.",
    },
    {
        question: "Quem devo contactar em caso de problemas no imóvel?",
        answer:
            "Caso tenha problemas no imóvel, você pode entrar em contato diretamente com o anfitrião através das informações fornecidas após a reserva. Se necessário, existe um contato adicional caso o primeiro esteja indisponível.",
    },
    {
        question: "Como recebo as instruções de chegada ao local?",
        answer:
            "As instruções de chegada ao local serão enviadas automaticamente após a confirmação da reserva. Elas estarão disponíveis no painel do hóspede e também serão enviadas para o e-mail cadastrado.",
    },
];

const faqData: FAQ[] = [
    {
        question: "Posso solicitar limpeza do apartamento durante minha estadia?",
        answer: "Claro! Temos contatos de confiança que podemos oferecer para agendamento",
    },
];

export default function FAQs({ preview }: FaqProps) {
    return (
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "32px" }}>
            <Box sx={{ textAlign: "left", marginBottom: "24px" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Dúvidas Frequentes
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Reunimos as dúvidas mais frequentes para ajudá-lo a esclarecer tudo
                    de forma rápida e prática. Se não encontrar o que procura, estamos
                    aqui para ajudar!
                </Typography>
            </Box>

            {faqPreview.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        <Typography variant="subtitle1">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="textSecondary">
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

            {preview ? (
                <Box marginTop={3} textAlign={"right"}>
                    <Button
                        variant="text"
                        color="primary"
                        href="/faq"
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<OpenInNewIcon />}
                    >
                        Mostrar mais
                    </Button>
                </Box>
            ) : (
                <>
                    {faqData.map((faq, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                            >
                                <Typography variant="subtitle1">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="textSecondary">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </>
            )}
        </Box>
    );
}
