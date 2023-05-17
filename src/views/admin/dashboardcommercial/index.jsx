import { Columns } from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import SearchPanel from "./components/SearchPanel";
import ListResult from "./components/ListResult";
import ColumnChartPanel from "./components/ColumnChartPanel";
import PieChartPanel from "./components/PieChartPanel";

const DashboardCommercial = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <SearchPanel />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ListResult columnsData={Columns} tableData={tableDataColumns} />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ColumnChartPanel />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <PieChartPanel />
      </div>
    </div>
  );
};

export default DashboardCommercial;
