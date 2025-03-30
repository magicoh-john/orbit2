import React, {useEffect, useState} from "react";
import axios from "axios";
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

const MonthlyOrderChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 현재 연도의 데이터를 가져오기 위한 날짜 설정
                const startDate = `${new Date().getFullYear()}-01-01 00:00:00`;
                const endDate = `${new Date().getFullYear()}-12-31 23:59:59`;

                const response = await axios.get(
                    "/api/bidding/orders/statistics/monthly",
                    {
                        params: {
                            startDate,
                            endDate,
                        },
                    }
                );
                setData(response.data);
            } catch (error) {
                console.error("통계 데이터 조회 중 오류 발생:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{width: "100%", height: "400px"}}>
            <h2>월별 발주 통계</h2>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="yearMonth"/>
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8"/>
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d"/>
                    <Tooltip/>
                    <Legend/>
                    <Bar
                        yAxisId="left"
                        dataKey="orderCount"
                        name="발주 건수"
                        fill="#8884d8"
                    />
                    <Bar
                        yAxisId="right"
                        dataKey="totalAmount"
                        name="총 금액"
                        fill="#82ca9d"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MonthlyOrderChart; 