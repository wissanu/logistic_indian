import React, { PureComponent } from "react";
import Card from "components/card";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Customer A",
    MARS: 4000,
    APR: 2400,
    amt: 2400,
  },
  {
    name: "Customer B",
    MARS: 3000,
    APR: 1398,
    amt: 2210,
  },
  {
    name: "Customer C",
    MARS: 2000,
    APR: 9800,
    amt: 2290,
  },
  {
    name: "Customer D",
    MARS: 2780,
    APR: 3908,
    amt: 2000,
  },
  {
    name: "Customer E",
    MARS: 1890,
    APR: 4800,
    amt: 2181,
  },
  {
    name: "OTHERS",
    MARS: 2390,
    APR: 3800,
    amt: 2500,
  },
];

export default class ColumnAgeingPay extends PureComponent {
  render() {
    return (
      <Card extra={"w-full pb-10 p-4 h-96"}>
        <header className="relative mb-4 flex items-center justify-between">
          <div className="text-sm font-bold text-navy-700 dark:text-white">
            Ageing Payable
          </div>
        </header>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend layout="vertical" verticalAlign="top" align="right" />
            <Bar dataKey="MARS" fill="#8884d8" />
            <Bar dataKey="APR" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}
