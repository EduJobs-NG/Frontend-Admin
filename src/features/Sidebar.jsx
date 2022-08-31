import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import AdminContext from "../context/AdminProvider";

import { navs } from "../constants/routeData";
import dropdown from "../assets/dropdown.svg";

export const Sidebar = ({ pageTitle }) => {
  const {
    expandManageUsers,
    setExpandManageUsers,
    expandDocuments,
    setExpandDocuments,
  } = useContext(AdminContext);

  return (
    <div className="sticky top-[0] bg-[#02378B] h-[100vh] min-w-[255px] w-[255px] max-w-[255px] z-[3]">
      <div className="text-[#f0f0f0] mt-[45px] mb-[20px] mx-[19px] text-[14px] font-[700] leading-6">
        Main Menu
      </div>
      <nav>
        <ul>
          {navs.map((nav) => (
            <Fragment key={nav.name}>
              {nav.name === "Settings" && (
                <div className="h-[1px] bg-[#fff] mt-[22px] mr-[34px] mb-[18px] ml-[10px]"></div>
              )}

              <li key={nav.name}>
                <>
                  {nav.name === "Manage Users" && (
                    <>
                      <div
                        onClick={() => {
                          setExpandManageUsers(!expandManageUsers);
                          setExpandDocuments(false);
                        }}
                      >
                        <NavLink
                          to={`${nav.path}`}
                          className={`flex items-center text-[#fff] text-[16px] font-[700] leading-6 px-[24px] py-[10px] cursor-pointer ${
                            pageTitle === "Manage Users" ||
                            pageTitle === "Manage Jobseekers" ||
                            pageTitle === "Manage Employeers"
                              ? "bg-[#FFFFFF80] border-l-[5px] border-solid border-[#D2E4FF]"
                              : "bg-[inherit] border-[none]"
                          }`}
                        >
                          <img
                            src={nav.icon}
                            alt="nav icons"
                            className="mr-[18px]"
                          />
                          <div>{nav.name}</div>
                          <img
                            src={dropdown}
                            alt="icon"
                            className={`ml-[auto] transition-transform duration-[750ms] ${
                              expandManageUsers ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </NavLink>
                      </div>

                      {expandManageUsers && (
                        <div className="ml-[66px]">
                          {nav.options.map((link) => (
                            <div
                              key={link.name}
                              onClick={() => setExpandManageUsers(false)}
                              className="text-[#fff] text-[16px] font-[700] leading-6 py-[10px] cursor-pointer"
                            >
                              <NavLink to={`${link.path}`}>{link.name}</NavLink>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {nav.name === "Documents" && (
                    <>
                      <div
                        onClick={() => {
                          setExpandDocuments(!expandDocuments);
                          setExpandManageUsers(false);
                        }}
                      >
                        <NavLink
                          to={`${nav.path}`}
                          className={`flex items-center text-[#fff] text-[16px] font-[700] leading-6 px-[24px] py-[10px] cursor-pointer ${
                            pageTitle === "Documents" ||
                            pageTitle === "Jobseekers Documents" ||
                            pageTitle === "Employeers Documents"
                              ? "bg-[#FFFFFF80] border-l-[5px] border-solid border-[#D2E4FF]"
                              : "bg-[inherit] border-none"
                          }`}
                        >
                          <img
                            src={nav.icon}
                            alt="nav icons"
                            className="mr-[18px]"
                          />
                          <div>{nav.name}</div>
                          <img
                            src={dropdown}
                            alt="icon"
                            className={`ml-[auto] transition-transform duration-[750ms] ${
                              expandDocuments ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </NavLink>
                      </div>

                      {expandDocuments && (
                        <div className="ml-[66px]">
                          {nav.options.map((link) => (
                            <div
                              key={link.name}
                              onClick={() => setExpandDocuments(false)}
                              className="text-[#fff] text-[16px] font-[700] leading-6 py-[10px] cursor-pointer"
                            >
                              <NavLink to={`${link.path}`}>{link.name}</NavLink>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  {nav.name !== "Documents" && nav.name !== "Manage Users" && (
                    <div
                      onClick={() => {
                        setExpandDocuments(false);
                        setExpandManageUsers(false);
                      }}
                    >
                      <NavLink
                        to={`${nav.path}`}
                        className={`flex items-center text-[#fff] px-[24px] py-[10px] text-[16px] font-[700] leading-6 cursor-pointer ${
                          pageTitle === nav.name
                            ? "bg-[#FFFFFF80] border-l-[5px] border-solid border-[#D2E4FF]"
                            : "bg-[inherit] border-none"
                        }`}
                      >
                        <img
                          src={nav.icon}
                          alt="nav icons"
                          className="mr-[18px]"
                        />
                        <div>{nav.name}</div>
                      </NavLink>
                    </div>
                  )}
                </>
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};
