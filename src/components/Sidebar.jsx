import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowX: "auto",
      flexDirection: { md: "row" },
      height: "auto",
    }}
    className="cato"
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "white",
          color: category.name === selectedCategory ? "black" : "white"
        }}
        key={category.name}
      >
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
