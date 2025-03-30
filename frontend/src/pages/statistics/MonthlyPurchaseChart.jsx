import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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
import { API_URL } from "@/utils/constants";
import { fetchWithAuth } from "@/utils/fetchWithAuth";

const MonthlyPurchaseChart = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyPurchaseData, setMonthlyPurchaseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [year]);

  const fetchData = async () => {
    try {
      const response = await fetchWithAuth(`${API_URL}statistics/orders/monthly/${year}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const formattedData = data.monthlyData.map(item => ({
        month: item.yearMonth,
        amount: item.totalAmount,
        orderCount: item.orderCount
      }));
      setMonthlyPurchaseData(formattedData);
    } catch (error) {
      console.error("데이터 조회 중 오류 발생:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          월별 구매 실적
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

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyPurchaseData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
};

export default MonthlyPurchaseChart; 