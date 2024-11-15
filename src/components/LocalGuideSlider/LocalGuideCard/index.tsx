import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

interface LocalGuideCardProps {
    title: string;
    description: string;
    time: string;
    maps: string;
}

export default function LocalGuideCard({ title, description, time, maps }: LocalGuideCardProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 200,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                "&:hover .hoverContent": {
                    opacity: 1,
                    transform: "translateY(0)",
                },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: 100,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#a0a0a0",
                    marginBottom: "16px",
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
            
            <Box
                className="hoverContent"
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    opacity: 0,
                    transform: "translateY(100%)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
            >
                <Typography variant="body2">{time}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    href={maps}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: "8px" }}
                >
                    Como Chegar
                </Button>
            </Box>
        </Card>
    );
}
