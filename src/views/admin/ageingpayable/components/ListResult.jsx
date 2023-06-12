import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import FooterTable from "./FooterTable";
import React, { useMemo } from "react";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const ListResult = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    gotoPage,
    prepareRow,
    pageCount,
  } = tableInstance;

  return (
    <Card extra={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-sm font-bold text-navy-700 dark:text-white">
          List Result
        </div>
        <CardMenu />
      </header>

      <div className="mt-8 overflow-auto">
        <table {...getTableProps()} className="w-full">
          <thead class="whitespace-nowrap bg-gray-50 text-xs uppercase text-gray-700 dark:bg-navy-700 dark:text-white">
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pb-[10px] pr-14 text-start dark:!border-navy-700"
                  >
                    <div className="flex flex-row-reverse ">
                      <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600 dark:text-white">
                        {column.render("Header")}
                      </div>
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <BsArrowUp />
                          ) : (
                            <BsArrowDown />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              console.log(row, index);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data;
                    data = (
                      <p className="text-sm font-bold text-navy-700 dark:text-white">
                        {cell.value}
                      </p>
                    );

                    return (
                      <td
                        className="pb-[10px] pt-[10px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <FooterTable
          nextPage={nextPage}
          previousPage={previousPage}
          gotoPage={gotoPage}
          pageCount={pageCount}
        />
      </div>
    </Card>
  );
};

export default ListResult;
