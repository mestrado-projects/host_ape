import React from "react";
import { Card, CardContent, Typography, Box, Chip, CardActionArea } from "@mui/material";

interface PropertiesCardProps {
    title: string;
    description: string;
    active?: boolean;
    onClick: () => void;
}

export default function PropertiesCard({ title, description, active = false, onClick }: PropertiesCardProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 200,
                border: active ? "2px solid #3f51b5" : "1px solid #ddd",
                backgroundColor: active ? "#f0f0f0" : "white",
                position: "relative",
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
                    sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: "#e0e0e0",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        color: "#a0a0a0",
                        margin: "16px auto 12px",
                    }}
                >
                    🖼️
                </Box>
                <CardContent sx={{ textAlign: "center" }}>
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
