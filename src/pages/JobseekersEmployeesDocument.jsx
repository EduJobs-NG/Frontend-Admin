import { useState, useEffect } from 'react';

import decline from '../assets/decline.svg';
import verify from '../assets/verify.svg';
import file from '../assets/file.svg';
import { Alert } from '../components/Alert';

import { DataGrid } from '@mui/x-data-grid';
import useAxios from '../hooks/useAxios';
import { LoadingIndicator } from '../components/LoadingIndicator';

export const JobseekersEmployeesDocument = ({
  setRefresh,
  pageState,
  setPageState,
}) => {
  const [isPositive, setIsPositive] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertDetails, setAlertDetails] = useState();

  const request = useAxios();

  const {
    makeRequest,
    isLoading,
    setErrorMessage,
    errorMessage,
    success,
    data: response,
  } = request();

  const onCertDecide = (id, data, type) => {
    if (type === 'verify') {
      makeRequest({
        url: `jobseekers/user-document-review/${id}/verify_credential/`,
        method: 'PUT',
        payload: data,
      });
    }

    if (type === 'decline') {
      makeRequest({
        url: `jobseekers/user-document-review/${id}/decline_credential/`,
        method: 'PUT',
        payload: data,
      });
    }
    setErrorMessage(errorMessage);
    console.log(errorMessage);
    return;
  };

  const onProfileDec = (id, data) => {
    console.log(data);
    makeRequest({
      url: `jobseekers/user-profile-review/${id}`,
      method: 'PUT',
      payload: data,
    });

    setErrorMessage(errorMessage);
    console.log(errorMessage);
    return;
  };

  useEffect(() => {
    if (success) {
      console.log(response);
      setRefresh(true);
      return;
    }
  }, [response]);

  const columns = [
    { field: 'col1', headerName: 'id', minWidth: 70, flex: 1 },
    { field: 'col2', headerName: 'name', minWidth: 170, flex: 1 },

    {
      field: 'col3',
      headerName: 'cv/resume',
      minWidth: 190,
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        // console.log(params);
        return (
          <div className='flex flex-row gap-2'>
            <div className='hover:cursor-pointer flex flex-row gap-2 items-center'>
              {params.value === 'nothing to show' ? null : (
                <img src={file} alt='file-icon' width={20} height={20} />
              )}
              {params.value === 'nothing to show' ? (
                <p className='w-8 text-[8px] h-3 text-clip text-center overflow-hidden'>
                  empty
                </p>
              ) : (
                <a href={params.value?.file} target='blank'>
                  <p className='w-8 text-[8px] h-3 text-clip text-center overflow-hidden'>
                    {params.value?.file}
                  </p>
                </a>
              )}
            </div>
            {params.value === 'nothing to show' ? null : (
              <div className='flex items-center gap-[11px] text-[10px] font-[700] leading-6'>
                <button
                  className='flex items-center gap-[5px] text-[#00944D]'
                  onClick={() => {
                    const data = {
                      ...params.value,
                      reviewed: 'verified',
                      type: 'cv',
                    };
                    setAlertDetails({
                      title: 'Verify Document',
                      text: `Are you sure you want to verify ${params.value?.file}?`,
                      data: { id: params.value.id, data, type: 'verify' },
                    });
                    setShowAlert(true);
                  }}
                >
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
            )}
          </div>
        );
      },
    },
    {
      field: 'col4',
      headerName: 'certificates',
      minWidth: 210,
      flex: 1,
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
                <button
                  className='flex items-center gap-[5px] text-[#00944D]'
                  onClick={() => {
                    const data = {
                      ...cv,
                      reviewed: 'verified',
                    };
                    setAlertDetails({
                      title: 'Verify Document',
                      text: `Are you sure you want to verify ${cv.name}?`,
                      data: { id: cv.id, data, type: 'verify' },
                    });
                    setShowAlert(true);
                  }}
                  disabled={cv.reviewed === 'Verified'}
                >
                  {cv.reviewed !== 'Verified' && (
                    <img src={verify} alt='chat-icon' />
                  )}
                  {cv.reviewed !== 'Verified' ? (
                    <span>Verify</span>
                  ) : (
                    <span>Verified</span>
                  )}
                </button>

                <button
                  className='flex items-center gap-[5px] text-[#C90415]'
                  onClick={() => {
                    const data = {
                      ...cv,
                      reviewed: 'declined',
                    };
                    setAlertDetails({
                      title: 'Decline Document',
                      text: `Are you sure you want to decline ${cv.name}?`,
                      data: { id: cv.id, data, type: 'decline' },
                    });
                    setShowAlert(true);
                  }}
                  disabled={cv.reviewed === 'Declined'}
                >
                  {cv.reviewed !== 'Declined' && (
                    <img src={decline} alt='delete-icon' />
                  )}
                  {cv.reviewed !== 'Declined' ? (
                    <span>Decline</span>
                  ) : (
                    <span>Declined</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </ul>
      ),
      type: 'string',
    },
    {
      field: 'col5',
      headerName: 'action',
      minWidth: 120,
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const onClick = (e, type) => {
          // console.log(type);
          e.stopPropagation(); // don't select this row after clicking

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          const data = {
            reviewed: type,
          };
          setAlertDetails({
            title: `${type} User`,
            text: `Are you sure you want to ${type} ${thisRow.col2}?`,
            data: { id: thisRow.col5, data, type: 'profile' },
          });
          setShowAlert(true);
          return;
        };

        return (
          <div className='flex items-center gap-[11px] text-[10px] font-[700] leading-6'>
            <button
              onClick={(e) => onClick(e, 'verified')}
              className='flex items-center gap-[5px] text-[#00944D]'
            >
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
        pagination
        page={pageState.page - 1}
        pageSize={pageState.pageSize}
        paginationMode='server'
        onPageChange={(newPage) =>
          setPageState((old) => ({ ...old, page: newPage + 1 }))
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
              title={alertDetails.title}
              text={alertDetails.text}
              setIsPositive={setIsPositive}
              callBack={(type) => {
                console.log(type);
                setShowAlert(false);
                if (type === 'yes') {
                  if (alertDetails.data.type === 'profile') {
                    onProfileDec(alertDetails.data.id, alertDetails.data.data);
                    return;
                  } else {
                    onCertDecide(
                      alertDetails.data.id,
                      alertDetails.data.data,
                      alertDetails.data.type || ''
                    );
                  }
                }
              }}
            />
          </div>
        </div>
      )}
      {errorMessage && (
        <div className='fixed top-[0] right-[0] bottom-[0] left-[255px] flex justify-center items-center bg-[#918a8a61]'>
          <div>
            <ErrorIndicator errorMessage={pendingErrorMessage} />
          </div>
        </div>
      )}
      {isLoading && (
        <div className='w-full h-full bg-transparent'>
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
};
