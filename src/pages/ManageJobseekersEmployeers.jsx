import { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorIndicator } from '../components/ErrorIndicator';
import { ManageJobseekersEmployeersTable } from './ManageJobseekersEmployeersTable';

export const ManageJobseekersEmployeers = ({ title }) => {
  const [tableData, setTableData] = useState(null);
  const [refetch, setRefetch] = useState(0);
  const getData = useAxios();
  const {
    makeRequest,
    isLoading,
    errorMessage,
    success,
    data: gottenData,
  } = getData();

  useEffect(() => {
    makeRequest({
      url:
        title === 'Manage Jobseekers'
          ? '/jobseekers/user-profile-review/'
          : '/employer/user-profile-review/',
    });
  }, [refetch]);

  useEffect(() => {
    if (success) {
      console.log(gottenData);
      const newData = gottenData?.results?.map((data, index) => {
        // console.log(data);
        return {
          id: data.id,
          col1: data.id,
          col2: data.user?.first_name || data.name || 'nothing to show',
          col3: data.user?.email || 'nothing to show',
          col4: data?.phone_number || 'nothing to show',
          col5: '',
        };
      });

      setTableData({
        data: newData,
        count: gottenData.count,
        next: gottenData.next,
        prev: gottenData.previous,
        rawData: gottenData.results,
      });
    }
  }, [success]);

  if (isLoading) return <LoadingIndicator />;
  if (errorMessage) return <ErrorIndicator error={errorMessage} />;

  // gottenData && console.log(gottenData);
  // return <p>hello</p>;

  // console.log(gottenData);

  return tableData !== null ? (
    <>
      {console.log(tableData)}
      <ManageJobseekersEmployeersTable
        tableData={tableData}
        title={title}
        setRefetch={setRefetch}
      />
    </>
  ) : (
    <ErrorIndicator error='No Data' />
  );
};
