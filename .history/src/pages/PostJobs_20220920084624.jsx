import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import 'react-markdown-editor-lite/lib/index.css';
import { LoadingIndicator } from '../components/LoadingIndicator';
import useAxios from '../hooks/useAxios';

export const PostJobs = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle('Jobs');
  }, []);

  const mdEditor = useRef(null);

  const [data, setData] = useState({
    deadline: '',
    title: '',
    organization_name: '',
    location: '',
    summary: '',
    min_pay_range: '',
    max_pay_range: '',
    job_type: '',
  });

  const navigate = useNavigate();

  const postJob = useAxios();
  const {
    makeRequest,
    isLoading,
    setErrorMessage,
    errorMessage,
    success,
    data: response,
  } = postJob();

  useEffect(() => {
    setErrorMessage('');
  }, [data]);

  useEffect(() => {
    if (success) {
      console.log(response);
      setErrorMessage('');
      navigate('/jobs');
    }
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.deadline ||
      !data.title ||
      !data.organization_name ||
      !data.location ||
      !data.summary ||
      !data.min_pay_range ||
      !data.max_pay_range ||
      !data.job_type
    ) {
      setErrorMessage('All Fields are required');
      return;
    }

    makeRequest({
      url: '/jobs-review/',
      method: 'POST',
      payload: data,
    });
  };

  if (isLoading) return <LoadingIndicator />;

  return (
    <div className='bg-[#fff] rounded-[30px] h-[100%] pt-[28px] pb-[65px] px-[43px] text-[#000]'>
      <h3 className='text-[24px] font-[700] leading-6 tracking-[-0.006em] mb-[10px]'>
        POST JOBS
      </h3>
      <p className='text-[14px] leading-6 tracking-[-0.006em] mb-[46px]'>
        Kindly fill in the following fields to post available jobs on EduJobs NG
      </p>

      <form
        className='flex flex-col gap-[22px]'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='flex flex-col gap-[1px]'>
          <label
            htmlFor='title'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Job Title
          </label>
          <input
            type='text'
            id='title'
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          <label
            htmlFor='deadline'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Job Deadline
          </label>
          <input
            type='date'
            id='deadline'
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            value={data.deadline}
            onChange={(e) => setData({ ...data, deadline: e.target.value })}
          />
        </div>
        <div className='flex flex-col gap-[1px]'>
          <label
            htmlFor='organization'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Organization Name
          </label>
          <input
            type='text'
            id='organization'
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            value={data.organization_name}
            onChange={(e) =>
              setData({ ...data, organization_name: e.target.value })
            }
          />
        </div>
        <div className='flex flex-col gap-[1px]'>
          <label
            htmlFor='location'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Location
          </label>
          <input
            type='text'
            id='location'
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            value={data.location}
            onChange={(e) => setData({ ...data, location: e.target.value })}
          />
        </div>

        <div className='flex flex-col gap-[1px]'>
          <label
            htmlFor='location'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Job Type
          </label>
          <select
            onChange={(e) => setData({ ...data, job_type: e.target.value })}
            value={data.job_type}
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            id='job_type'
          >
            <option value='Part-time'>Part-time</option>
            <option value='Full-time'>Full-time</option>
            <option value='Permanent'>Permanent</option>
            <option value='Temporary'>Temporary</option>
            <option value='Contract'>Contract</option>
          </select>
        </div>

        <div className='flex flex-col gap-[1px]'>
          <label htmlFor='summary'>Job Summary</label>
          <textarea className='p-[15px] h-[139px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'></textarea>
        </div>

        <div className='flex flex-col gap-[1px]'>
          <label htmlFor='summary'>
            Job Description (Requirements, Responsibilities etc.)
          </label>
          <Editor
            ref={mdEditor}
            value={data.summary}
            style={{
              height: '500px',
            }}
            onChange={({ html, text }) => {
              setData({ ...data, summary: text });
            }}
            renderHTML={(text) => <ReactMarkdown children={text} />}
          />
        </div>

        <div className='flex flex-col gap-[1px]'>
          <label
            htmlFor='title'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Min Pay Range
          </label>
          <input
            type='text'
            id='title'
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            value={data.min_pay_range}
            onChange={(e) =>
              setData({ ...data, min_pay_range: e.target.value })
            }
          />
        </div>
        <div className='flex flex-col gap-[1px]'>
          <label
            htmlFor='title'
            className='text-[14px] leading-6 tracking-[-0.006em]'
          >
            Max Pay Range
          </label>
          <input
            type='text'
            id='title'
            className='px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]'
            value={data.max_pay_range}
            onChange={(e) =>
              setData({ ...data, max_pay_range: e.target.value })
            }
          />
        </div>

        <div className='relative flex justify-center gap-[10px] mt-[84px]'>
          {errorMessage && (
            <div className='absolute top-[-80px] text-[#C90415]'>
              {errorMessage}
            </div>
          )}
          <button
            onClick={(e) => handleSubmit(e)}
            type='submit'
            className='text-[14px] font-[700] leading-6 tracking-[-0.006em] bg-[#02378B] rounded-[3px] text-[#fff] px-[53px] py-[13px]'
          >
            POST JOB
          </button>
          <button
            onClick={() => navigate('/jobs')}
            type='submit'
            className='text-[14px] font-[700] leading-6 tracking-[-0.006em] bg-[#808080] rounded-[3px] text-[#222] px-[53px] py-[13px]'
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};
