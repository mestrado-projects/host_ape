import React from "react";
import { Typography, Button } from "@mui/material";
import styled from "styled-components";

interface BannerProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const BannerContainer = styled.div<{ $backgroundImage: string }>`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
        height: 400px;
    }

    @media (max-width: 600px) {
        height: 300px;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
    position: relative;
    text-align: center;
    margin: 0 15px;
    z-index: 1;
`;

export default function Banner({
    title,
    subtitle,
    backgroundImage,
    buttonText,
    onButtonClick,
}: BannerProps) {
    return (
        <BannerContainer $backgroundImage={backgroundImage}>
            <Overlay />
            <Content>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontSize: {
                            xs: "1.5rem",
                            sm: "2rem",
                            md: "2.5rem",
                        },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    gutterBottom
                    sx={{
                        fontSize: {
                            xs: "1rem",
                            sm: "1.25rem",
                            md: "1.5rem",
                        },
                    }}
                >
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
