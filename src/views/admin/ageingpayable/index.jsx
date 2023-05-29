import { Columns } from "assets/dummy/columnsData";
import tableDataColumns from "assets/dummy/tableDataColumns.json";
import SearchPanel from "./components/SearchPanel";
import ListResult from "./components/ListResult";

const AgeingPayable = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <SearchPanel />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <ListResult columnsData={Columns} tableData={tableDataColumns} />
      </div>
    </div>
  );
};

export default AgeingPayable;
