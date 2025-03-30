import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@/utils/constants";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
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

const StatisticsPage = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyData, setMonthlyData] = useState([]);
  const [itemYearlyData, setItemYearlyData] = useState([]);
  const [categoryYearlyData, setCategoryYearlyData] = useState([]);
  const [monthlyPurchaseData, setMonthlyPurchaseData] = useState([]);
  const [categoryPurchaseData, setCategoryPurchaseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [year]);

  const fetchData = async () => {
    try {
      const monthlyPurchaseResponse = await fetchWithAuth(`${API_URL}statistics/orders/monthly/${year}`);
      const categoryPurchaseResponse = await fetchWithAuth(`${API_URL}statistics/orders/category/${year}`);

      if (!monthlyPurchaseResponse.ok) {
        throw new Error(`HTTP error! status: ${monthlyPurchaseResponse.status}`);
      }
      if (!categoryPurchaseResponse.ok) {
        throw new Error(`HTTP error! status: ${categoryPurchaseResponse.status}`);
      }

      const monthlyDataResponse = await monthlyPurchaseResponse.json();
      const categoryData = await categoryPurchaseResponse.json();

      // 응답 데이터가 배열인지 확인
      console.log('Monthly Data Response:', monthlyDataResponse);

      // 데이터 형식 변환 (서버의 컬럼명에 맞게 수정)
      const formattedMonthlyData = Array.isArray(monthlyDataResponse.monthlyData) ? monthlyDataResponse.monthlyData.map(item => ({
        month: item.yearMonth,
        amount: item.totalAmount,
        orderCount: item.orderCount
      })) : [];

      const formattedCategoryData = Array.isArray(categoryData) ? categoryData.map(item => ({
        category: item.category,
        amount: item.totalAmount
      })) : [];

      console.log('Formatted Monthly Data:', formattedMonthlyData);
      console.log('Formatted Category Data:', formattedCategoryData);

      setMonthlyPurchaseData(formattedMonthlyData);
      setCategoryPurchaseData(formattedCategoryData);
    } catch (error) {
      console.error("통계 데이터 조회 중 오류 발생:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          통계 조회
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

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                월별 구매 실적
              </Typography>
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
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                카테고리별 구매 실적
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={categoryPurchaseData}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
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
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default StatisticsPage;
