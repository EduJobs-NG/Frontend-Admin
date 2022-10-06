export const Alert = ({ title, text, setIsPositive, callBack }) => {
  return (
    <div className='bg-[#F5F5F5] rounded-[20px] p-[34px] w-[90%] max-w-[439px] text-center'>
      <div
        className={`${
          title === 'DELETE' ? 'text-[#C90415]' : 'text-[#000]'
        } text-[16px] font-[700] leading-[20px] mb-[29px]`}
      >
        {title}
      </div>
      <p className='text-[#000] text-[16px] font-[600] leading-[20px] mb-[52px]'>
        {text}
      </p>
      <div className='flex flex-col items-center gap-[7px]'>
        <button
          onClick={() => {
            setIsPositive('yes');
            callBack('yes');
          }}
          className='text-[#303030] text-[12px] font-[700] leading-6 bg-[#E6E6E6] rounded-[19px] px-[86px] py-[4px] tracking-[-0.006em]'
        >
          YES
        </button>
        <button
          onClick={() => {
            setIsPositive('no');
            callBack('no');
          }}
          className='text-[#fff] text-[12px] font-[700] leading-6 bg-[#02378B] rounded-[19px] px-[86px] py-[4px] tracking-[-0.006em]'
        >
          NO
        </button>
      </div>
    </div>
  );
};
