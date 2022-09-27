import { useState, useEffect } from 'react';

import decline from '../assets/decline.svg';
import verify from '../assets/verify.svg';
import file from '../assets/file.svg';

import { DataGrid } from '@mui/x-data-grid';

export const JobseekersEmployeesDocument = ({ tableData }) => {
  const [isPositive, setIsPositive] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [pageState, setPageState] = useState({
    isLoading: true,
    data: [],
    total: 0,
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    setPageState((old) => ({
      ...old,
      isLoading: false,
      data: tableData.data,
      total: tableData.count,
    }));
  }, [pageState.page, pageState.pageSize]);

  const columns = [
    { field: 'col1', headerName: 'id', width: 70 },
    { field: 'col2', headerName: 'name', width: 170 },
    {
      field: 'col3',
      headerName: 'cv',
      width: 170,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className='flex flex-row gap-2'>
            <div className='hover:cursor-pointer flex flex-row gap-2 items-center'>
              <img src={file} alt='file-icon' width={20} height={20} />
              <p className='w-8 text-[8px] h-3 text-clip text-center overflow-hidden'>
                {params.value}
              </p>
            </div>
            <div className='flex items-center gap-[11px] text-[10px] font-[700] leading-6'>
              <button className='flex items-center gap-[5px] text-[#00944D]'>
                <img src={verify} alt='chat-icon' />
                <span>Verify</span>
              </button>

              <button
                // onClick={onClick}
                className='flex items-center gap-[5px] text-[#C90415]'
              >
                <img src={decline} alt='delete-icon' />
                <span>Decline</span>
              </button>
            </div>
          </div>
        );
      },
    },
    {
      field: 'col4',
      headerName: 'resume',
      width: 170,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className='flex flex-row gap-2'>
            <div className='hover:cursor-pointer flex flex-row gap-2 items-center'>
              <img src={file} alt='file-icon' width={20} height={20} />
              <p className='w-8 text-[8px] h-3 text-clip text-center overflow-hidden'>
                {params.value}
              </p>
            </div>
            <div className='flex items-center gap-[11px] text-[10px] font-[700] leading-6'>
              <button className='flex items-center gap-[5px] text-[#00944D]'>
                <img src={verify} alt='chat-icon' />
                <span>Verify</span>
              </button>

              <button
                // onClick={onClick}
                className='flex items-center gap-[5px] text-[#C90415]'
              >
                <img src={decline} alt='delete-icon' />
                <span>Decline</span>
              </button>
            </div>
          </div>
        );
      },
    },
    {
      field: 'col5',
      headerName: 'certificates',
      width: 190,
      sortable: false,
      renderCell: (params) => (
        <ul className='flex flex-col gap-2 py-1'>
          {params.value.map((cv, index) => (
            <div key={index} className='flex flex-row gap-2 items-center'>
              <a href={cv.file} target='blank'>
                <div className='hover:cursor-pointer flex flex-row gap-2 items-center'>
                  <img src={file} alt='file-icon' width={20} height={20} />
                  <li className='w-8 text-[8px] h-3 text-clip text-center overflow-hidden'>
                    {cv.name}
                  </li>
                </div>
              </a>
              <div className='flex items-center gap-[11px] text-[10px] font-[700] leading-6'>
                <button className='flex items-center gap-[5px] text-[#00944D]'>
                  <img src={verify} alt='chat-icon' />
                  <span>Verify</span>
                </button>

                <button
                  // onClick={onClick}
                  className='flex items-center gap-[5px] text-[#C90415]'
                >
                  <img src={decline} alt='delete-icon' />
                  <span>Decline</span>
                </button>
              </div>
            </div>
          ))}
        </ul>
      ),
      type: 'string',
    },
    {
      field: 'col6',
      headerName: 'action',
      width: 120,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return handleDeleteConfirmation(thisRow);
        };

        return (
          <div className='flex items-center gap-[11px] text-[10px] font-[700] leading-6'>
            <button className='flex items-center gap-[5px] text-[#00944D]'>
              <img src={verify} alt='chat-icon' />
              <span>Verify</span>
            </button>

            <button
              // onClick={onClick}
              className='flex items-center gap-[5px] text-[#C90415]'
            >
              <img src={decline} alt='delete-icon' />
              <span>Decline</span>
            </button>
          </div>
        );
      },
    },
    // { field: 'col6', headerName: 'userId', width: 0 },
  ];

  // console.log(data);

  return (
    <div className='bg-[#fff] rounded-[30px] pb-[22px] px-[28px]'>
      <DataGrid
        rows={pageState.data}
        rowCount={pageState.total}
        loading={pageState.isLoading}
        rowsPerPageOptions={[10]}
        pagination
        page={pageState.page}
        pageSize={pageState.pageSize}
        paginationMode='server'
        onPageChange={(newPage) =>
          setPageState((old) => ({ ...old, page: newPage }))
        }
        onPageSizeChange={(newPageSize) =>
          setPageState((old) => ({ ...old, pageSize: newPageSize }))
        }
        columns={columns}
        autoHeight={true}
        getRowHeight={() => 'auto'}
        disableSelectionOnClick={true}
      />
      {showAlert && (
        <div className='fixed top-[0] right-[0] bottom-[0] left-[255px] flex justify-center items-center bg-[#918a8a61]'>
          <div>
            <Alert
              title='DELETE'
              text={`Are you sure you want to delete ${
                toDeleteDetail.name.trim() ? toDeleteDetail.name : 'this user'
              }?, it can't be reversed?`}
              setIsPositive={setIsPositive}
            />
          </div>
        </div>
      )}
    </div>
  );
};
