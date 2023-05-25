import { Columns } from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import SearchPanel from "./components/SearchPanel";
import ListResult from "./components/ListResult";
import ColumnChartPanel from "./components/ColumnChartPanel";
import PieChartPanel from "./components/PieChartPanel";
import { useState } from "react";

const DashboardCommercial = () => {
  const [daySelect, setDay] = useState();
  const [monthSelect, setMonth] = useState();
  const [yearSelect, setYear] = useState();

  const dayRender = (event) => {
    setDay(event.target.value);
    console.log(daySelect);
  };

  const monthRender = (event) => {
    setMonth(event.target.value);
  };

  const yearRender = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <SearchPanel
          dayRender={dayRender}
          monthRender={monthRender}
          yearRender={yearRender}
          currentDay={daySelect}
        />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ListResult columnsData={Columns} tableData={tableDataColumns} />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ColumnChartPanel currentDay={daySelect} />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <PieChartPanel />
      </div>
    </div>
  );
};

export default DashboardCommercial;
