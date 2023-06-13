import { Columns } from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import { getTopCustomerDummy, getTopCustomer } from "api/dashboard_commercial";
import SearchPanel from "./components/SearchPanel";
import SearchPanelAL from "./components/SearchPanelAL";
import ListResult from "./components/ListResult";
import ColumnTotalRevevue from "./components/ColumnTotalRevevue";
import PieChartShipmentByConsolType from "./components/PieChartShipmentByConsolType";
import ColumnVolumnByWeek from "./components/ColumnVolumnByWeek";
import PieChartVolumeByShip from "./components/PieChartVolumeByShip";
import { useState, useEffect, useLayoutEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthUser } from "react-auth-kit";

const DashboardCommercial = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [val, setVal] = useState(["SIM", currentMonth, currentYear]);
  const auth = useAuthUser();

  const setData = (event, flag) => {
    if (flag === "TYPE") {
      if (event.target.value === "Sea-Import") setVal(["SIM", val[1], val[2]]);
      else if (event.target.value === "Sea-Export")
        setVal(["SEX", val[1], val[2]]);
      else if (event.target.value === "Air-Import")
        setVal(["AIM", val[1], val[2]]);
      else setVal(["AEX", val[1], val[2]]);
    } else if (flag === "MONTH") setVal([val[0], event.target.value, val[2]]);
    else if (flag === "YEAR") setVal([val[0], val[1], event.target.value]);
  };

  const { isLoading, isSuccess, fetchStatus, error, data } = useQuery({
    queryKey: ["topcustomer", val[0], val[1], val[2], auth().name],
    queryFn: () => getTopCustomer(val[0], val[1], val[2], auth().name),
  });

  if (isLoading) console.log("Loading...");
  if (error) console.log("An error has occured : " + error.message);
  if (isSuccess && fetchStatus === "idle") console.log(data);

  if (isSuccess && fetchStatus === "idle")
    return (
      <div>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <SearchPanelAL currentRender={setData} />
        </div>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <ListResult columnsData={Columns} tableData={data} />
        </div>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <ColumnTotalRevevue
            currentType={val[0]}
            monthSelect={val[1]}
            yearSelect={val[2]}
          />
        </div>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <PieChartShipmentByConsolType
            currentType={val[0]}
            monthSelect={val[1]}
            yearSelect={val[2]}
          />
        </div>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <PieChartVolumeByShip
            currentType={val[0]}
            monthSelect={val[1]}
            yearSelect={val[2]}
          />
        </div>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <ColumnVolumnByWeek
            currentType={val[0]}
            monthSelect={val[1]}
            yearSelect={val[2]}
          />
        </div>
      </div>
    );
};

export default DashboardCommercial;
