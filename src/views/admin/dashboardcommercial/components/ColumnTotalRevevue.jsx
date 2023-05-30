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
    name: "Jan",
    2011: 4000,
    2012: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    2011: 3000,
    2012: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    2011: 2000,
    2012: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    2011: 2780,
    2012: 3908,
    amt: 2000,
  },
  {
    name: "May",
    2011: 1890,
    2012: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    2011: 2390,
    2012: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    2011: 3490,
    2012: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    2011: 3490,
    2012: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    2011: 3490,
    2012: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    2011: 3490,
    2012: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    2011: 3490,
    2012: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    2011: 3490,
    2012: 4300,
    amt: 2100,
  },
];

export default class ColumnTotalRevevue extends PureComponent {
  render() {
    return (
      <Card extra={"w-full pb-10 p-4 h-96"}>
        <header className="relative mb-4 flex items-center justify-between">
          <div className="text-sm font-bold text-navy-700 dark:text-white">
            Total Revenue (THB)
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
            <Bar dataKey="2011" fill="#8884d8" />
            <Bar dataKey="2012" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}
