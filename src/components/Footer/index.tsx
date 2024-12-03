import React from "react";
import { Box, Typography, Link } from "@mui/material";
import styled from "styled-components";

const FooterContainer = styled(Box)({
  backgroundColor: "#333", // Fundo escuro
  color: "#fff", // Texto branco
  padding: "32px 16px",
});

const ContentWrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 32px",
  display: "flex",
  gap: "60px", // Espaçamento reduzido entre colunas
  alignItems: "start", // Alinha o conteúdo ao topo
});

const Column = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        {/* Coluna 1 */}
        <Column>
          <Typography variant="subtitle1">
            <Link href="#" color="inherit" underline="hover">
              Início
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link href="#" color="inherit" underline="hover">
              Acessar Conta
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link href="#" color="inherit" underline="hover">
              Apartamentos
            </Link>
          </Typography>
        </Column>

        {/* Coluna 2 */}
        <Column>
          <Typography variant="subtitle1">
            <Link href="#" color="inherit" underline="hover">
              Depoimentos
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link href="#" color="inherit" underline="hover">
              Dúvidas Frequentes
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link href="#" color="inherit" underline="hover">
              Contato
            </Link>
          </Typography>
        </Column>
      </ContentWrapper>
    </FooterContainer>
  );
}
