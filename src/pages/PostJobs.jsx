import { useNavigate } from "react-router-dom";

export const PostJobs = ({ setPageTitle }) => {
  setPageTitle("Jobs");

  const navigate = useNavigate();

  return (
    <div className="bg-[#fff] rounded-[30px] h-[100%] pt-[28px] pb-[65px] px-[43px] text-[#000]">
      <h3 className="text-[24px] font-[700] leading-6 tracking-[-0.006em] mb-[10px]">
        POST JOBS
      </h3>
      <p className="text-[14px] leading-6 tracking-[-0.006em] mb-[46px]">
        Kindly fill in the following fields to post available jobs on EduJobs NG
      </p>

      <form className="flex flex-col gap-[22px]">
        <div className="flex flex-col gap-[1px]">
          <label
            htmlFor="title"
            className="text-[14px] leading-6 tracking-[-0.006em]"
          >
            Job Title
          </label>
          <input
            type="text"
            id="title"
            className="px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]"
          />
        </div>
        <div className="flex flex-col gap-[1px]">
          <label
            htmlFor="title"
            className="text-[14px] leading-6 tracking-[-0.006em]"
          >
            Organization Name
          </label>
          <input
            type="text"
            id="title"
            className="px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]"
          />
        </div>
        <div className="flex flex-col gap-[1px]">
          <label
            htmlFor="title"
            className="text-[14px] leading-6 tracking-[-0.006em]"
          >
            Location
          </label>
          <input
            type="text"
            id="title"
            className="px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]"
          />
        </div>

        <div className="flex flex-col gap-[1px]">
          <label htmlFor="title">Job Summary</label>
          <textarea className="p-[15px] h-[139px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]"></textarea>
        </div>

        <div className="flex flex-col gap-[1px]">
          <label htmlFor="title">
            Job Description (Requirements, Responsibilities etc.)
          </label>
          <textarea className="p-[15px] h-[139px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]"></textarea>
        </div>

        <div className="flex flex-col gap-[1px]">
          <label
            htmlFor="title"
            className="text-[14px] leading-6 tracking-[-0.006em]"
          >
            Pay Range
          </label>
          <input
            type="text"
            id="title"
            className="px-[15px] h-[50px] bg-[#FBFBFB] rounded-[9px] outline-none border-[1px] border-solid border-[#808080]"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <button
            type="submit"
            className="text-[14px] font-[700] leading-6 tracking-[-0.006em] bg-[#02378B] rounded-[3px] text-[#fff] mt-[84px] px-[53px] py-[13px]"
          >
            POST JOB
          </button>
          <button
            onClick={() => navigate("/jobs")}
            type="submit"
            className="text-[14px] font-[700] leading-6 tracking-[-0.006em] bg-[#808080] rounded-[3px] text-[#222] mt-[84px] px-[53px] py-[13px]"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};
