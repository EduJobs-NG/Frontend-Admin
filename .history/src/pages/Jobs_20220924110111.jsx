import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { WrapperHeader } from '../components/WrapperHeader';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorIndicator } from '../components/ErrorIndicator';

import add from '../assets/add.svg';
import hide from '../assets/hide.svg';
import show from '../assets/show.svg';

export const Jobs = () => {
  const [jobStates, setJobStates] = useState(null);
  const [jobInView, setJobInView] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const getApprovedJobs = useAxios();
  const {
    makeRequest,
    isLoading,
    errorMessage,
    aSuccess,
    data: jobs,
  } = getApprovedJobs();

  const getPendingJobs = useAxios();
  const {
    makeRequest: pRequest,
    isLoading: pLoading,
    errorMessage: pError,
    success: pSuccess,
    data: pJobs,
  } = getPendingJobs();

  const getDeclinedJobs = useAxios();
  const {
    makeRequest: dRequest,
    isLoading: dLoading,
    errorMessage: dError,
    success: dSuccess,
    data: dJobs,
  } = getDeclinedJobs();

  useEffect(() => {
    makeRequest({ url: '/jobs-review/approved' });
    pRequest({ url: '/jobs-review/pending' });
    dRequest({ url: '/jobs-review/declined' });
  }, []);

  // Promise.all(pSuccess, dSuccess, aSuccess)
  //   .then((data) => {
  //     console.log(data);
  //     setSuccess(data);
  //   })
  //   .catch((e) => console.log(e));

  useEffect(() => {
    if (aSuccess && pSuccess && dSuccess) {
      console.log(pJobs);
      console.log(jobs);
      console.log(dJobs);
      const approvedJobs = jobs;
      const pendingJobs = pJobs;
      const declinedJobs = dJobs;
      // const reportedJobs = jobs.results.filter(
      //   (job) => job.status === 'Reported'
      // );

      console.log(pendingJobs);
      console.log(approvedJobs);
      console.log(declinedJobs);

      setJobStates([
        { status: 'Approved', data: approvedJobs },
        { status: 'Pending', data: pendingJobs },
        { status: 'Declined', data: declinedJobs },
        // { status: 'Reported', data: reportedJobs },
      ]);
    }
  }, [aSuccess, pSuccess, dSuccess]);

  if (isLoading | pLoading | dLoading) return <LoadingIndicator />;
  if (errorMessage) {
    console.log(errorMessage);
    return <ErrorIndicator error={errorMessage} />;
  }

  if (pError) {
    console.log(pError);
    return <ErrorIndicator error={pError} />;
  }

  if (dError) {
    console.log(dError);
    return <ErrorIndicator error={dError} />;
  }

  return (
    jobStates && (
      <div className='bg-[#fff] rounded-[30px] pb-[41px] min-h-[100%] flex flex-col'>
        {console.log(jobStates)}
        <div className='flex justify-between items-center'>
          <WrapperHeader title='Jobs Posted' />
          <button
            onClick={() => navigate('post-jobs')}
            className='flex items-center gap-[9px] bg-[#02378B] rounded-[19px] text-[#fff] mr-[20px] px-[20px] py-[1px] text-[10px] font-[700] leading-6'
          >
            <img src={add} alt='add icon' />
            <span> ADD JOB</span>
          </button>
        </div>

        <div className='flex h-[100%] pb-[60px] grow'>
          <div className='flex flex-col gap-[15px] pl-[28px] pr-[20px] grow'>
            {jobStates.map((jobState) => (
              <div key={jobState.status}>
                <button
                  onClick={() => {
                    if (currentStatus === jobState.status)
                      setCurrentStatus(null);
                    else setCurrentStatus(jobState.status);
                  }}
                  className='flex items-center gap-[18px] ml-[23px]'
                >
                  <span className='text-[#000] text-[10px] font-[700] leading-[13px] w-[70px] text-start'>
                    {jobState.status}
                  </span>
                  <img
                    src={currentStatus === jobState.status ? show : hide}
                    alt='icon'
                  />
                </button>

                {currentStatus === jobState.status && (
                  <div
                    className='grid gap-[13px] mt-[13px]'
                    style={{
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(10em, 170px))',
                    }}
                  >
                    {jobState.data.length ? (
                      jobState.data.map((job, index, jobStates) => (
                        <div
                          key={index}
                          className='flex flex-col pt-[11px] pb-[17px] px-[11px] rounded-[20px] border-[1px] border-solid border-[#CCCCCC] items-start'
                        >
                          <div
                            className={`text-[8px] font-[700] leading-[10px] rounded-[4px] mb-[4px] px-[10px] py-[5px] ${
                              job.status === 'Approved'
                                ? 'text-[#00944D] bg-[#B5FFDB]'
                                : 'text-[FFB800] bg-[#FFE298]'
                            }`}
                          >
                            {jobStates[index].status}
                          </div>
                          <div className='text-[#02378B] text-[14px] font-[700] leading-[18px]'>
                            {job.title}
                          </div>
                          <div className='text-[#606060] text-[10px] font-[700] leading-[13px] mb-[6px]'>
                            {job.organization_name}
                          </div>
                          <div className='text-[#606060] text-[8px] font-[400] leading-[10px] mb-[12px]'>
                            {job.summary}
                          </div>
                          <button
                            onClick={() => {
                              if (
                                jobInView?.job?.id === job.id &&
                                jobInView?.status === jobStates[index]?.status
                              )
                                setJobInView(null);
                              else
                                setJobInView({
                                  job,
                                  status: jobStates[index].status,
                                });
                            }}
                            className='text-[#f0f0f0] text-[8px] font-[700] leading-[10px] rounded-[4px] px-[32px] py-[4px] bg-[#02378B] self-center mt-[auto]'
                          >
                            {jobInView?.job?.id === job.id &&
                            jobInView?.status === jobStates[index]?.status
                              ? 'Close Job'
                              : 'View Job'}
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className='ml-[40px] text-[#606060] text-[10px] font-[700] leading-[13px]'>
                        No {jobState.status} jobs
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {jobInView && (
            <div className='flex flex-col rounded-[21px] px-[14px] py-[20px] mr-[20px] border-[1px] border-solid border-[#D9D9D9] max-w-[400px] min-w-[210px]'>
              <div className='text-[#02378B] text-[14px] font-[700] leading-[18px]'>
                {jobInView.job.title}
              </div>
              <div className='text-[#606060] text-[10px] font-[700] leading-[13px] mb-[10.5px]'>
                {jobInView.job.organization_name}
              </div>

              <div className='mb-[3.5px] bg-[#606060] h-[0.5px]'></div>

              <div className='mb-[4px]'>
                <div className='text-[#000] text-[10px] font-[700] leading-[13px] mb-[3px]'>
                  About
                </div>
                <p className='text-[#606060] text-[8px] font-[400] leading-[10px]'>
                  {jobInView.job.about}
                </p>
              </div>

              <div className='mb-[6px] bg-[#606060] h-[0.5px]'></div>

              <div>
                <div className='text-[#000] text-[10px] font-[700] leading-[13px] mb-[3px]'>
                  Qualifications
                </div>
                {/* {console.log(jobInView.qualifications)} */}

                {/* <ol type="1">
                {jobInView.qualifications.map((qualification, index) => (
                  <li
                    key={index}
                    className="text-[#606060] text-[8px] font-[400] leading-[10px] ml-[10px] list-decimal"
                  >
                    {qualification}
                  </li>
                ))}
              </ol> */}
              </div>

              <div className='mt-[auto]'>
                {jobInView.status === 'Pending' && (
                  <div className='flex flex-col gap-[4px] text-[#fff] mt-[25px] text-[8px] font-[700] leading-[10px]'>
                    <button className='p-[6px] rounded-[4px] bg-[#00944D] border-[1.5px] border-solid border-[#00944D]'>
                      Approve
                    </button>
                    <button className='p-[6px] rounded-[4px] text-[#C90415]  border-[1.5px] border-solid border-[#C90415]'>
                      Decline
                    </button>
                  </div>
                )}

                {jobInView.status === 'Reported' && (
                  <div className='flex flex-col gap-[4px] text-[#fff] mt-[25px] text-[8px] font-[700] leading-[10px]'>
                    <button className='bg-[#C90415] rounded-[4px] p-[7px]'>
                      Delete
                    </button>
                    <button className='text-[#303030] bg-[#e6e6e6] p-[7px] rounded-[4px]'>
                      Ignore
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};
