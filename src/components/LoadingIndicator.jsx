import spinner from "../assets/spinner.gif";

export const LoadingIndicator = () => {
  return (
    <div className="absolute top-[0] right-[0] bottom-[0] left-[255px] flex justify-center items-center">
      <img src={spinner} alt="loading indicator" width="150px" height="150px" />
    </div>
  );
};
