export const ErrorIndicator = ({ error }) => {
  return (
    <div className="absolute top-[0] right-[0] bottom-[0] left-[255px] flex justify-center items-center">
      <p className="text-[20px] font-[700]">{error}</p>
    </div>
  );
};
