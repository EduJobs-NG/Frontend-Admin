import { useState, useEffect } from 'react';
import { WrapperHeader } from '../components/WrapperHeader';
import { Alert } from '../components/Alert';
import search from '../assets/search-chat.svg';
import remove from '../assets/delete.svg';
import chat from '../assets/chat.svg';
import useAxios from '../hooks/useAxios';
import { LoadingIndicator } from '../components/LoadingIndicator';
import {
  DataGrid,
  GridToolbarQuickFilter,
  GridLinkOperator,
} from '@mui/x-data-grid';

function QuickSearchToolbar() {
  return (
    <div
      style={{
        padding: '0px 10px',
        position: 'absolute',
        top: '-50px',
        right: '0px',
      }}
    >
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </div>
  );
}

export const ManageJobseekersEmployeersTable = ({
  title,
  setRefetch,
  pageState,
  setPageState,
}) => {
  const [toDeleteDetail, setToDeleteDetail] = useState(null);
  const [isPositive, setIsPositive] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const deleteData = useAxios();

  const columns = [
    { field: 'col1', headerName: 'id', minWidth: 70, flex: 1 },
    { field: 'col2', headerName: 'name', minWidth: 170, flex: 1 },
    { field: 'col3', headerName: 'email', minWidth: 170, flex: 1 },
    { field: 'col4', headerName: 'number', minWidth: 170, flex: 1 },
    {
      field: 'col5',
      headerName: 'action',
      minWidth: 150,
      flex: 1,
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
              <img src={chat} alt='chat-icon' />
              <span>Chat</span>
            </button>

            <button
              onClick={onClick}
              className='flex items-center gap-[5px] text-[#C90415]'
            >
              <img src={remove} alt='delete-icon' />
              <span>Delete</span>
            </button>
          </div>
        );
      },
    },
    // { field: 'col6', headerName: 'userId', width: 0 },
  ];

  const {
    makeRequest,
    isLoading,
    errorMessage,
    success,
    data: gottenData,
  } = deleteData();

  useEffect(() => {
    if (isPositive === 'yes') {
      makeRequest({
        url:
          title === 'Manage Jobseekers'
            ? `/jobseekers/user-profile-review/${toDeleteDetail.id}`
            : `/employer/user-profile-review/${toDeleteDetail.id}`,
        method: 'DELETE',
        payload: { id: toDeleteDetail.id },
      });
    } else {
      setShowAlert(false);
      setToDeleteDetail(null);
      setIsPositive(null);
    }
  }, [isPositive]);

  useEffect(() => {
    if (success) setTimeout(() => setRefetch((prev) => prev + 1), 0);
  }, [success]);

  const handleDeleteConfirmation = (detail) => {
    setToDeleteDetail({ id: detail.col1, data: detail });
    console.log(detail.col1);
    setShowAlert(true);
  };

  if (isLoading) return <LoadingIndicator />;
  if (errorMessage) return <ErrorIndicator errorMessage={errorMessage} />;

  return (
    <div className='flex flex-col bg-[#fff] rounded-[30px] pb-[44px] px-[28px] h-[100%]'>
      <div className='flex justify-between items-center'>
        <div className='ml-[-28px]'>
          <WrapperHeader title={title} />
        </div>
        {/* search */}
      </div>
      <DataGrid
        rows={pageState.data}
        rowCount={pageState.total}
        loading={pageState.isLoading}
        pagination
        page={pageState.page - 1}
        pageSize={pageState.pageSize}
        paginationMode='server'
        onPageChange={(newPage, details) => {
          console.log(details, newPage);
          setPageState((old) => ({
            ...old,
            page: newPage + 1,
          }));
        }}
        onPageSizeChange={(newPageSize, details) => {
          console.log(details, newPageSize);
          setPageState((old) => ({ ...old, pageSize: newPageSize }));
        }}
        columns={columns}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterLogicOperator: GridLinkOperator.Or,
            },
          },
        }}
        components={{ Toolbar: QuickSearchToolbar }}
        autoHeight={true}
      />
      {showAlert && (
        <div className='fixed top-[0] right-[0] bottom-[0] left-[255px] flex justify-center items-center bg-[#918a8a61]'>
          <div>
            <Alert
              title='DELETE'
              text={`Are you sure you want to delete ${
                toDeleteDetail.data.col2.trim()
                  ? toDeleteDetail.data.col2
                  : 'this user'
              }?, it can't be reversed?`}
              setIsPositive={setIsPositive}
            />
          </div>
        </div>
      )}
    </div>
  );
};
