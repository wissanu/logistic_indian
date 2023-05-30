import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";
import Card from "components/card";

const data = [
  { name: "Agent Consolidation", value: 400 },
  { name: "Buyer's Consolidation", value: 300 },
  { name: "Direct", value: 300 },
  { name: "Back to Back", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}`}
    </text>
  );
};

export default class PieChartShipmentByConsolType extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <Card extra={"w-full pb-10 p-4 h-96"}>
        <header className="relative mb-4">
          <div className="text-sm font-bold text-navy-700 dark:text-white">
            Total Shipment By Consol Type
          </div>
        </header>
        <div className="float-left -translate-x-2/4"></div>
        <ResponsiveContainer width={400} height={400} className="text-center">
          <PieChart width={400} height={400}>
            <Legend layout="vertical" verticalAlign="top" align="right" />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}
