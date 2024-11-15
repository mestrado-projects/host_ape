import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

interface BannerProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const BannerContainer = styled(Box)({
    width: "100%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#ffffff",
    position: "relative",
});

const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
});

const Content = styled(Box)({
    position: "relative",
    textAlign: "center",
    zIndex: 1,
});

export default function Banner({ title, subtitle, backgroundImage, buttonText, onButtonClick }: BannerProps) {
    return (
        <BannerContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Overlay />
            <Content>
                <Typography variant="h3" component="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    {subtitle}
                </Typography>
                {buttonText && (
                    <Button variant="contained" color="primary" onClick={onButtonClick}>
                        {buttonText}
                    </Button>
                )}
            </Content>
        </BannerContainer>
    );
}
