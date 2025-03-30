import React, { useState, useEffect } from "react";
import { API_URL } from "@/utils/constants";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";


const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const CategoryPurchaseChart = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [categoryPurchaseData, setCategoryPurchaseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [year]);

  const fetchData = async () => {
    try {
      const response = await fetchWithAuth(`${API_URL}statistics/orders/category/${year}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const formattedData = data.map(item => ({
        category: item.category,
        amount: item.totalAmount
      }));
      setCategoryPurchaseData(formattedData);
    } catch (error) {
      console.error("데이터 조회 중 오류 발생:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          카테고리별 구매 실적
        </Typography>

        <FormControl sx={{ mb: 3, minWidth: 120 }}>
          <InputLabel>연도 선택</InputLabel>
          <Select
            value={year}
            label="연도 선택"
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {Array.from(
              { length: 5 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <MenuItem key={year} value={year}>
                {year}년
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={categoryPurchaseData}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={180}
              label={(entry) => entry.category}
            >
              {categoryPurchaseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
};

export default CategoryPurchaseChart; 