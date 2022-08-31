import { useState } from "react";
import { WrapperHeader } from "../components/WrapperHeader";

import profilePics from "../assets/profile-pics.svg";
import search from "../assets/search-chat.svg";
import noChatYet from "../assets/no-chat.svg";
import selectFile from "../assets/select-file.svg";
import camera from "../assets/camera.svg";
import send from "../assets/send.svg";

export const Messaging = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const people = [
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
    {
      img: profilePics,
      name: "James Adeleye",
      location: "Ikorodu, Lagos",
    },
  ];

  return (
    <div className="flex gap-[19px]">
      <div className="bg-[#fff] rounded-[30px] pb-[44px] min-w-[260px]">
        <div className="flex justify-between items-center">
          <WrapperHeader title="Chat" />
          <div className="mr-[25px]">
            <img src={search} alt="search icon" />
          </div>
        </div>

        {people.map((person) => (
          <div
            onClick={() => setCurrentChat(person)}
            className="flex items-center gap-[4px] py-[7px] mx=[9px] cursor-pointer border-b-[0.5px] border-solid border-[#CCCCCC]"
          >
            <img src={person.img} alt="profile icon" className="ml-[21px]" />
            <div>
              <div className="text-[12px] font-[500] leading-[15px] text-[#000]">
                {person.name}
              </div>
              <div className="text-[8px] font-[500] leading-[10px] text-[#303030]">
                {person.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!currentChat && (
        <div className="flex justify-center items-center bg-[#fff] rounded-[30px] grow">
          <img src={noChatYet} alt="no chat yet icon" />
        </div>
      )}

      {currentChat && (
        <div className="flex flex-col bg-[#fff] rounded-[30px] grow overflow-hidden">
          <div className="flex items-center gap-[4px] bg-[#5B90E5] px-[82px] py-[16px]">
            <img
              src={currentChat.img}
              alt="profile icon"
              className="ml-[21px]"
            />
            <div>
              <div className="text-[14px] font-[700] leading-[18px] text-[#fff]">
                {currentChat.name}
              </div>
              <div className="text-[8px] font-[600] leading-[10px] text-[#fff]">
                {currentChat.location}
              </div>
            </div>
          </div>
          <div className="px-[22px] grow">
            <div className="text-[12px] font-[600] leading-[15px] text-[#000] my-[5px] text-center">
              Today
            </div>
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-[13px] bg-[#D9E0FF] rounded-[16px] w-[46%] pt-[14px] pb-[8px] px-[18px] self-end">
                <p className="text-[14px] font-[400] leading-[18px] text-[#303030]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  morbi phasellus leo augue. Vitae arcu eu, facilisi arcu
                  habitant sit malesuada. Orci, nunc vehicula semper quam.
                  Turpis sit egestas sem a felis. Ultrices fusce tincidunt
                  suspendisse eu, at mollis est. At nisi in consectetur volutpat
                  risus, elit posuere vitae. Sagittis tellus nisl malesuada
                  turpis enim facilisi. Egestas egestas eget aliquam ante sit
                  ridiculus a. Neque purus erat egestas aliquet. Nulla elementum
                  sed fusce at et sagittis, odio id sed. Ut in mattis velit
                  fermentum tortor.
                </p>
                <span className="text-[10px] font-[600] leading-[13px] text-[#000E4D] self-end">
                  12:00PM
                </span>
              </div>

              <div className="flex flex-col bg-[#f5f5f5] rounded-[16px] w-[46%] px-[14px] py-[8px]">
                <span className="text-[12px] font-[600] leading-[15px] text-[#000E4D] mb-[7px]">
                  James Adeleye
                </span>
                <p className="text-[14px] font-[400] leading-[18px] text-[#303030] mb-[13px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  morbi phasellus leo augue. Vitae arcu eu, facilisi arcu
                  habitant sit malesuada.
                </p>
                <span className="text-[10px] font-[600] leading-[13px] text-[#000E4D] self-end">
                  12:00PM
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center gap-[6px] mt-[10px] mb-[13px] mx-[22px]">
            <div
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              contentEditable="true"
              onInput={(e) => setInputMessage(e.currentTarget.textContent)}
              className="text-[14px] font-[400] leading-[18px] text-[#4F4F4F] rounded-[25px] py-[10px] pr-[100px] pl-[19px] outline-none border-[1px] border-solid border-[#A4A4A4] grow"
            >
              {!isInputFocused && inputMessage === "" ? "Type a Message" : ""}
            </div>

            <div className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer rounded-[50%] border-[1px] border-solid border-[#A4A4A4] min-w-[40px]">
              <img src={send} alt="send icon" />
            </div>

            <div className="absolute right-[69px] bottom-[11px] flex items-center gap-[16px] select-none">
              <img
                src={selectFile}
                alt="select file icon"
                className="cursor-pointer"
              />
              <img src={camera} alt="camera icon" className="cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
