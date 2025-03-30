import React, { useState, useEffect } from "react";
import axios from "axios";
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

/**
 * 발주 통계 페이지 컴포넌트
 * - 월별 발주 금액 추이를 그래프로 표시
 * @returns {JSX.Element}
 * @constructor
 */
const OrderStatistics = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [monthlyData, setMonthlyData] = useState([]);
  const [supplierData, setSupplierData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [year]);

  const fetchData = async () => {
    try {
      const [monthlyResponse, supplierResponse] = await Promise.all([
        axios.get(`/api/statistics/orders/monthly/${year}`),
        axios.get(`/api/statistics/orders/suppliers/${year}`),
      ]);

      setMonthlyData(monthlyResponse.data.monthlyData);
      setSupplierData(supplierResponse.data);
    } catch (error) {
      console.error("통계 데이터 조회 중 오류 발생:", error);
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(amount);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          발주 통계 현황
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
                월별 발주 금액 추이
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="yearMonth" />
                  <YAxis
                    tickFormatter={(value) =>
                      `₩${(value / 1000000).toFixed(0)}M`
                    }
                  />
                  <Tooltip
                    formatter={(value) => formatAmount(value)}
                    labelFormatter={(label) => `${label} 월`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="totalAmount"
                    name="발주 금액"
                    stroke="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                월별 발주 건수
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="yearMonth" />
                  <YAxis />
                  <Tooltip labelFormatter={(label) => `${label} 월`} />
                  <Legend />
                  <Bar dataKey="orderCount" name="발주 건수" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                공급업체별 발주 비중
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={supplierData}
                    dataKey="totalAmount"
                    nameKey="supplierName"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    label={(entry) => entry.supplierName}
                  >
                    {supplierData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatAmount(value)} />
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

export default OrderStatistics; 