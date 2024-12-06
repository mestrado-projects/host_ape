import React from "react";
import { Box, Typography, Link } from "@mui/material";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const FooterContainer = styled(Box)({
  backgroundColor: "#333",
  color: "#fff",
  padding: "32px 16px",
});

const ContentWrapper = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 32px",
  display: "flex",
  gap: "60px",
  alignItems: "start",
});

const Column = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const redirectToWhatsApp = () => {
    window.open(
      "https://wa.me/5581997359190",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        <Column>
          <Typography variant="subtitle1">
            <Link
              onClick={handleScrollToTop}
              color="inherit"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Início
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link
              onClick={() => navigate("/login")}
              color="inherit"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Acessar Conta
            </Link>
          </Typography>
        </Column>

        <Column>
          <Typography variant="subtitle1">
            <Link
              onClick={() => navigate("/faq")}
              color="inherit"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Dúvidas Frequentes
            </Link>
          </Typography>
          <Typography variant="subtitle1">
            <Link
              onClick={redirectToWhatsApp}
              color="inherit"
              underline="hover"
              sx={{ cursor: "pointer" }}
            >
              Contato: (81) 99735-9190
            </Link>
          </Typography>
        </Column>
      </ContentWrapper>
    </FooterContainer>
  );
}
