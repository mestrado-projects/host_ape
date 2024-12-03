import React from "react";
import { Box, Chip } from "@mui/material";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) {
    return (
        <Box display="flex" justifyContent={"center"} gap={1} marginBottom={3}>
            {categories.map((category) => (
                <Chip
                    key={category}
                    label={category}
                    onClick={() => onCategorySelect(category)}
                    color={selectedCategory === category ? "primary" : "default"}
                    sx={{
                        cursor: "pointer",
                        fontWeight: selectedCategory === category ? "bold" : "normal",
                    }}
                />
            ))}
        </Box>
    );
}
