import React, { useState, useEffect } from "react";
import { API_URL } from "@/utils/constants";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
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
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
];

const TopItemsChart = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [topItemsData, setTopItemsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [year]);

  const fetchData = async () => {
    try {
      const response = await fetchWithAuth(`${API_URL}statistics/orders/item/${year}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // 응답 데이터가 배열인지 확인
      console.log('Item Data Response:', data);

      // 데이터 형식 변환
      const formattedData = Array.isArray(data) ? data.map(item => ({
        item: item.item,
        orderCount: item.orderCount,
        totalAmount: item.totalAmount
      })) : [];

      console.log('Formatted Item Data:', formattedData);

      setTopItemsData(formattedData);
    } catch (error) {
      console.error("데이터 조회 중 오류 발생:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          연간 품목별 구매 상위 TOP 10
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

        <ResponsiveContainer width="100%" height={600}>
          <BarChart data={topItemsData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="item" />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalAmount" fill="#82ca9d">
              {topItemsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
};

export default TopItemsChart; 