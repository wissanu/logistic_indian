import { Columns } from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import SearchPanel from "./components/SearchPanel";
import ListResult from "./components/ListResult";
import ColumnAgeingRec from "./components/ColumnAgeingRec";
import ColumnAgeingPay from "./components/ColumnAgeingPay";
import { useState } from "react";

const DashboardCommercial = () => {
  const [typeSelect, setType] = useState();
  const [monthSelect, setMonth] = useState();
  const [yearSelect, setYear] = useState();

  const typeRender = (event) => {
    setType(event.target.value);
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
          typeRender={typeRender}
          monthRender={monthRender}
          yearRender={yearRender}
          currentType={typeSelect}
          monthSelect={monthSelect}
          yearSelect={yearSelect}
        />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ColumnAgeingRec
          currentType={typeSelect}
          monthSelect={monthSelect}
          yearSelect={yearSelect}
        />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ColumnAgeingPay
          currentType={typeSelect}
          monthSelect={monthSelect}
          yearSelect={yearSelect}
        />
      </div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ListResult columnsData={Columns} tableData={tableDataColumns} />
      </div>
    </div>
  );
};

export default DashboardCommercial;
