import React from "react";
import { Card, CardContent, Typography, Box, Chip, CardActionArea } from "@mui/material";

interface PropertiesCardProps {
    title: string;
    description: string;
    thumb: string;
    active?: boolean;
    onClick: () => void;
}

export default function PropertiesCard({ title, description, thumb, active = false, onClick }: PropertiesCardProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 200,
                border: active ? "2px solid #3f51b5" : "1px solid #ddd",
                backgroundColor: active ? "#f0f0f0" : "white",
                position: "relative",
                margin: "auto",
                cursor: "pointer",
                "&:hover": {
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
            }}
            onClick={onClick}
        >
            <CardActionArea>
                {active && (
                    <Chip
                        label="Ativo"
                        sx={{
                            position: "absolute",
                            top: 8,
                            left: 8,
                            backgroundColor: "#3f51b5",
                            color: "#ffffff",
                        }}
                    />
                )}
                <Box
                    component="img"
                    src={thumb}
                    alt={title}
                    sx={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        backgroundColor: "#e0e0e0",
                    }}
                />
                <CardContent sx={{ textAlign: "center", minHeight: "150px" }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
