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
    name: "Wk 46",
    amt: 2400,
  },
  {
    name: "Wk 47",
    amt: 2210,
  },
  {
    name: "Wk 48",
    amt: 2290,
  },
  {
    name: "Wk 49",
    amt: 2000,
  },
  {
    name: "Wk 50",
    amt: 3219,
  },
  ,
  ,
  ,
  ,
  ,
  ,
];

export default class ColumnVolumnByWeek extends PureComponent {
  render() {
    return (
      <Card extra={"w-full pb-10 p-4 h-96"}>
        <header className="relative mb-4 flex items-center justify-between">
          <div className="text-sm font-bold text-navy-700 dark:text-white">
            Total Volume By Weekly
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
            <Bar dataKey="amt" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}
