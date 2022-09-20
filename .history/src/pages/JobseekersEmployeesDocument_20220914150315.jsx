import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { DOCUMENTS_COLUMNS } from "../constants/table";
import { TheRest } from "../components/TheRest";

import decline from "../assets/decline.svg";
import verify from "../assets/verify.svg";
import file from "../assets/file.svg";

export const JobseekersEmployeesDocument = ({ tableData }) => {
  const columns = useMemo(() => DOCUMENTS_COLUMNS, []);
  const data = useMemo(() => tableData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <div className="bg-[#fff] rounded-[30px] pb-[22px] px-[28px]">
      <table
        {...getTableProps()}
        className="w-[100%] min-w-[100%] max-w-[100%]"
      >
        <thead className="bg-[#C9DEFF]">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index, arr) => (
                <th
                  key={index}
                  {...column.getHeaderProps()}
                  className={`text-[14px] font-[600] leading-[18px] p-[12px] text-[#000] ${
                    index ? "text-start" : "text-center"
                  } ${
                    index !== arr.length - 1
                      ? "border-r-[1px] border-solid border-[#808080]"
                      : "border-none"
                  }`}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                key={index}
                {...row.getRowProps()}
                className={`${index % 2 !== 0 ? "bg-[#F2F2F2]" : "bg-[#fff]"}`}
              >
                {row.cells.map((cell, index, arr) => (
                  <td
                    key={index}
                    {...cell.getCellProps()}
                    className={`text-[14px] leading-[18px] text-[#000] p-[13px] ${
                      index ? "text-start" : "text-center"
                    } ${
                      index !== arr.length - 1
                        ? "border-r-[1px] border-solid border-[#808080]"
                        : "border-none"
                    } ${
                      cell.column.Header === "Name"
                        ? "min-w-[180px]"
                        : "min-w-[0px]"
                    }`}
                  >
                    {cell.column.Header === "Actions" && (
                      <div className="flex items-center gap-[11px] text-[10px] font-[700] leading-6">
                        <button className="flex items-center gap-[5px] text-[#00944D]">
                          <img src={verify} alt="verify icon" />
                          <span>Verify</span>
                        </button>

                        <button className="flex items-center gap-[5px] text-[#C90415]">
                          <img src={decline} alt="decline icon" />
                          <span>Decline</span>
                        </button>
                      </div>
                    )}

                    {cell.column.Header === "Certificates" && (
                      <div className="flex items-center gap-[2.5px] text-[10px] font-[400] leading-[13px] text-[#000]">
                        <img src={file} alt="file icon" />
                        {cell.render("Cell")}
                      </div>
                    )}

                    {cell.column.Header === "Resume" && (
                      <div className="flex items-center gap-[2.5px] text-[10px] font-[400] leading-[13px] text-[#000]">
                        <img src={file} alt="file icon" />
                        {cell.render("Cell")}
                      </div>
                    )}

                    {cell.column.Header === "CV" && (
                      <div className="flex items-center gap-[2.5px] text-[10px] font-[400] leading-[13px] text-[#000]">
                        <img src={file} alt="file icon" />
                        {cell.render("Cell")}
                      </div>
                    )}

                    {cell.column.Header === "Name" && (
                      <>{cell.render("Cell")}</>
                    )}

                    {cell.column.Header === "S/N" && <>{cell.render("Cell")}</>}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center h-[21px] mt-[42px] justify-between">
        {/* <div className="text-[10px] leading-[13px] text-[#000]">
          Showing {pageSize * (pageIndex + 1) - 9} to{" "}
          {pageSize * (pageIndex + 1)} of {data.length} entries
        </div> */}
        <div className="text-[10px] leading-[13px] text-[#000]">
          Showing {pageSize * (pageIndex + 1) - 9} to{" "}
          {pageSize * (pageIndex + 1) - 10 + data.length} of {data.length}{" "}
          entries
        </div>

        <div className="flex items-center h-[18px]">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`text-[10px] font-[600] leading-[13px] mr-[26px] outline-none ${
              canPreviousPage
                ? "text-[#02378B] cursor-pointer"
                : "text-[#606060a0] cursor-not-allowed"
            }`}
          >
            Prev
          </button>
          {/* 
          {!pageIndex && (
            <div className="flex items-center gap-[19px] text-[12px] font-[600] leading-[10px] text-[#2F2E41]">
              <div className="text-[#303030]">{pageIndex + 1}</div>
              <div>{pageIndex + 2}</div>
              <div>{pageIndex + 3}</div>
              <TheRest />
              <div>{pageOptions.length}</div>
            </div>
          )}

          {pageIndex === 1 && (
            <div className="flex items-center gap-[19px] text-[12px] font-[600] leading-[10px] text-[#2F2E41]">
              <div>{pageIndex}</div>
              <div className="text-[#303030]">{pageIndex + 1}</div>
              <div>{pageIndex + 2}</div>
              <TheRest />
              <div>{pageOptions.length}</div>
            </div>
          )}

          {pageIndex > 1 &&
            pageIndex + 1 !== pageOptions.length &&
            pageIndex + 2 !== pageOptions.length &&
            pageIndex + 3 !== pageOptions.length && (
              <div className="flex items-center gap-[19px] text-[12px] font-[600] leading-[10px] text-[#2F2E41]">
                <TheRest />
                <div>{pageIndex}</div>
                <div className="text-[#303030]">{pageIndex + 1}</div>
                <div>{pageIndex + 2}</div>
                <TheRest />
                <div>{pageOptions.length}</div>
              </div>
            )}

          {pageIndex + 3 === pageOptions.length && (
            <div className="flex items-center gap-[19px] text-[12px] font-[600] leading-[10px] text-[#2F2E41]">
              <TheRest />
              <div className="text-[#303030]">{pageIndex + 1}</div>
              <div>{pageIndex + 2}</div>
              <div>{pageOptions.length}</div>
            </div>
          )}

          {pageIndex + 2 === pageOptions.length && (
            <div className="flex items-center gap-[19px] text-[12px] font-[600] leading-[10px] text-[#2F2E41]">
              <TheRest />
              <div>{pageIndex}</div>
              <div className="text-[#303030]">{pageIndex + 1}</div>
              <div>{pageOptions.length}</div>
            </div>
          )}

          {pageIndex + 1 === pageOptions.length && (
            <div className="flex items-center gap-[19px] text-[12px] font-[600] leading-[10px] text-[#2F2E41]">
              <TheRest />
              <div>{pageIndex - 1}</div>
              <div>{pageIndex}</div>
              <div className="text-[#303030]">{pageOptions.length}</div>
            </div>
          )} */}

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`text-[10px] font-[600] leading-[13px] ml-[20px] outline-none ${
              canNextPage
                ? "text-[#02378B] cursor-pointer"
                : "text-[#606060a0] cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
