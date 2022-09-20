import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { WrapperHeader } from '../components/WrapperHeader';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorIndicator } from '../components/ErrorIndicator';

import registeredUser from '../assets/registered-users.svg';
import validatedUser from '../assets/validated-users.svg';
import totalJobSeeker from '../assets/total-job-seekers.svg';
import totalEmployers from '../assets/total-employers.svg';
import totalJobs from '../assets/total-jobs.svg';
import activeJobs from '../assets/active-jobs.svg';
import pendingJobs from '../assets/pending-jobs.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export const Dashboard = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle('Dashboard');
  }, []);

  const getDashbordData = useAxios();
  const {
    makeRequest,
    isLoading,
    errorMessage,
    success,
    data: dashboardData,
  } = getDashbordData();

  useEffect(() => {
    makeRequest({ url: '/admin-dashboard/' });
    console.log(data);
  }, []);

  const userDetails = [
    {
      icon: registeredUser,
      title: 'Registered Users',
      number: dashboardData?.registered_user,
    },
    {
      icon: validatedUser,
      title: 'Validated Users',
      number: dashboardData?.validated_user,
    },
    {
      icon: totalJobSeeker,
      title: 'Total Jobseekers',
      number: dashboardData?.jobseekers,
    },
    {
      icon: totalEmployers,
      title: 'Total Employers',
      number: dashboardData?.employers,
    },
    {
      icon: totalJobs,
      title: 'Total Jobs',
      number: dashboardData?.jobs_total,
    },
    {
      icon: activeJobs,
      title: 'Active Jobs',
      number: dashboardData?.active_jobs,
    },
    {
      icon: pendingJobs,
      title: 'Pending Jobs',
      number: dashboardData?.pending_jobs,
    },
  ];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#303030',
          beginAtZero: true,
          font: {
            size: 14,
            weight: 700,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#303030',
          beginAtZero: true,
          font: {
            size: 14,
            weight: 700,
          },
        },
      },
    },
  };

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          1600, 2000, 2200, 2700, 1800, 1800, 1600, 2000, 2200, 1800, 2200,
          1800,
        ],
        maxBarThickness: 37,
        backgroundColor: '#02378B',
      },
    ],
  };

  if (isLoading) return <LoadingIndicator />;
  if (errorMessage) return <ErrorIndicator error={errorMessage} />;

  return (
    success && (
      <div className='flex flex-col gap-[18px]'>
        <div className='bg-[#fff] rounded-[30px]'>
          <WrapperHeader title='Overview' />

          <div
            className='px-[40px] pb-[29px] gap-[12px] grid'
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(13.5em, 1fr))',
            }}
          >
            {userDetails.map((userDetails) => (
              <div
                key={userDetails.title}
                className='flex items-center bg-[#F0F0F0] rounded-[10px] px-[25px] py-[13px] gap-[16px]'
              >
                <img src={userDetails.icon} alt='icon' />
                <div className='flex flex-col gap-[4px]'>
                  <div className='text-[16px] font-[700] leading-[20px] text-[#303030]'>
                    {userDetails.title}
                  </div>
                  <div className='text-[24px] font-[700] leading-[30px] text-[#000]'>
                    {userDetails.number}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[#fff] rounded-[30px]'>
          <WrapperHeader title='Users Activity' />
          <div className='h-[295px] w-[100%] px-[40px] pb-[45px]'>
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    )
  );
};
