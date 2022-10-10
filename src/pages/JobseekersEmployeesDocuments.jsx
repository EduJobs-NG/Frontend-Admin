import { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { JobseekersEmployeesDocument } from './JobseekersEmployeesDocument';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorIndicator } from '../components/ErrorIndicator';

import dropdown from '../assets/hide.svg';

export const JobseekersEmployeesDocuments = ({ title }) => {
  const [tableToDisplay, setTableToDisplay] = useState(null);

  const [pendingTableData, setPendingTableData] = useState(null);
  const [verifiedTableData, setVerifiedTableData] = useState(null);
  const [declinedTableData, setDeclinedTableData] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const getPendingData = useAxios();
  const getVerifiedData = useAxios();
  const getDeclinedData = useAxios();

  const {
    makeRequest: makePendingRequest,
    isLoading: isPendingLoading,
    errorMessage: pendingErrorMessage,
    success: pendingSuccess,
    data: pendingData,
  } = getPendingData();

  const {
    makeRequest: makeVerifiedRequest,
    isLoading: isVerifiedLoading,
    errorMessage: verifiedErrorMessage,
    success: verifiedSuccess,
    data: verifiedData,
  } = getVerifiedData();

  const {
    makeRequest: makeDeclinedRequest,
    isLoading: isDeclinedLoading,
    errorMessage: declinedErrorMessage,
    success: declinedSuccess,
    data: declinedData,
  } = getDeclinedData();

  useEffect(() => {
    if (refresh === true) {
      getData();
    }
    setRefresh(null);
  }, [refresh]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    makeDeclinedRequest({
      url: `/${
        title === 'Jobseekers Documents'
          ? 'jobseekers/user-profile-review'
          : 'employer/user-profile-review'
      }/declined`,
    });
    makePendingRequest({
      url: `/${
        title === 'Jobseekers Documents'
          ? 'jobseekers/user-profile-review'
          : 'employer/user-profile-review'
      }/pending`,
    });
    makeVerifiedRequest({
      url: `/${
        title === 'Jobseekers Documents'
          ? 'jobseekers/user-profile-review'
          : 'employer/user-profile-review'
      }/verified/`,
    });
  };

  useEffect(() => {
    if (pendingSuccess) {
      console.log(pendingData);
      if (title === 'Jobseekers Documents') {
        const newData = pendingData?.results.map((data, index) => {
          return {
            id: index + 1,
            col1: data.id,
            col2:
              `${data.user.first_name ? data.user.first_name : ''} ${
                data.user.last_name ? data.user.last_name : ''
              }` || 'nothing to show',
            col3: data.cv?.file || 'nothing to show',
            col4: data.credentials || 'nothing to show',
          };
        });
        setPendingTableData({ data: newData, count: pendingData.count });
      } else {
        const newData = pendingData?.results.map((data, index) => {
          return {
            id: index + 1,
            col1: data.id,
            col2:
              `${data.user.first_name ? data.user.first_name : ''} ${
                data.user.last_name ? data.user.last_name : ''
              }` || 'nothing to show',
            col3: data.cv[0] || data.cv || 'nothing to show',
            col4: data.credentials || 'nothing to show',
          };
        });

        setPendingTableData({ data: newData, count: pendingData.count });
      }
    }
  }, [pendingSuccess]);

  useEffect(() => {
    if (verifiedSuccess) {
      console.log(verifiedData);

      if (title === 'Jobseekers Documents') {
        const newData = verifiedData?.results.map((data, index) => {
          return {
            id: index + 1,
            col1: data.id,
            col2:
              `${data.user.first_name ? data.user.first_name : ''} ${
                data.user.last_name ? data.user.last_name : ''
              }` || 'nothing to show',
            col3: data.cv?.file || 'nothing to show',
            col4: data.credentials || 'nothing to show',
          };
        });
        setVerifiedTableData({ data: newData, count: verifiedData.count });
      } else {
        const newData = verifiedData?.results.map((data, index) => {
          return {
            id: index + 1,
            col1: data.id,
            col2:
              `${data.user.first_name ? data.user.first_name : ''} ${
                data.user.last_name ? data.user.last_name : ''
              }` || 'nothing to show',
            col3: data.cv[0] || data.cv || 'nothing to show',
            col4: data.credentials || 'nothing to show',
          };
        });

        setVerifiedTableData({ data: newData, count: verifiedData.count });
      }
    }
  }, [verifiedSuccess]);

  useEffect(() => {
    if (declinedSuccess) {
      console.log(declinedData);
      if (title === 'Jobseekers Documents') {
        const newData = declinedData?.results.map((data, index) => {
          return {
            id: index + 1,
            col1: data.id,
            col2:
              `${data.user.first_name ? data.user.first_name : ''} ${
                data.user.last_name ? data.user.last_name : ''
              }` || 'nothing to show',
            col3: data.cv?.file || 'nothing to show',
            col4: data.credentials || 'nothing to show',
          };
        });
        setDeclinedTableData({ data: newData, count: declinedData.count });
      } else {
        const newData = declinedData?.results.map((data, index) => {
          return {
            id: index + 1,
            col1: data.id,
            col2:
              `${data.user.first_name ? data.user.first_name : ''} ${
                data.user.last_name ? data.user.last_name : ''
              }` || 'nothing to show',
            col3: data.cv[0] || data.cv || 'nothing to show',
            col4: data.credentials || 'nothing to show',
          };
        });

        setDeclinedTableData({ data: newData, count: declinedData.count });
      }
    }
  }, [declinedSuccess]);

  if (isPendingLoading || isVerifiedLoading || isDeclinedLoading)
    return <LoadingIndicator />;
  if (pendingErrorMessage)
    return <ErrorIndicator errorMessage={pendingErrorMessage} />;
  if (verifiedErrorMessage)
    return <ErrorIndicator errorMessage={verifiedErrorMessage} />;
  if (declinedErrorMessage)
    return <ErrorIndicator errorMessage={declinedErrorMessage} />;

  const options = [
    {
      text: 'pending',
      data: pendingTableData,
      setData: setPendingTableData,
      isLoading: isPendingLoading,
      makeRequest: makePendingRequest,
    },
    {
      text: 'verified',
      data: verifiedTableData,
      setData: setVerifiedTableData,
      isLoading: isVerifiedLoading,
      makeRequest: makeVerifiedRequest,
    },
    {
      text: 'declined',
      data: declinedTableData,
      setData: setDeclinedTableData,
      isLoading: isDeclinedLoading,
      makeRequest: makeDeclinedRequest,
    },
  ];

  return (
    pendingSuccess &&
    verifiedSuccess &&
    declinedSuccess && (
      <div className='flex flex-col gap-[14px]'>
        {/* {console.log(pendingTableData)} */}
        {options.map((option) => (
          <div key={option.text} className='bg-[#fff] rounded-[8px]'>
            <div
              className='flex items-center gap-[10px] px-[70px] cursor-pointer py-[22px]'
              onClick={() => {
                tableToDisplay === option.text
                  ? setTableToDisplay(null)
                  : setTableToDisplay(option.text);
              }}
            >
              <p className='text-[#000] text-[14px] font-[700] leading-[18px]'>
                {option.text}
              </p>
              <img src={dropdown} alt='dropdown' />
            </div>

            {tableToDisplay === option.text ? (
              option.data ? (
                <>
                  {console.log(option)}
                  <JobseekersEmployeesDocument
                    tableData={option.data}
                    setRefresh={setRefresh}
                  />
                </>
              ) : (
                <p className='font-[700] ml-[80px] pb-[10px]'>No Data</p>
              )
            ) : null}
          </div>
        ))}
      </div>
    )
  );
};
