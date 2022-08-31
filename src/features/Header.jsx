import notification from "../assets/notification.svg";
import profile from "../assets/profile.svg";

export const Header = ({ pageTitle }) => {
  return (
    <header className="sticky flex justify-end items-center px-[23px] py-[10px] bg-[#fff] top-[0] z-[10]">
      <h2 className="absolute text-[#000 text-[20px] font-[700] leading-6] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {pageTitle}
      </h2>

      <div className="flex gap-[10px]">
        <div className="relative w-[40px] h-[40px] bg-[#E6E6E6] rounded-[10px] cursor-pointer">
          <img
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={notification}
            alt="notification"
          />
        </div>
        <div className="relative  w-[40px] h-[40px] bg-[#E6E6E6] rounded-[10px] cursor-pointer">
          <img
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
};
