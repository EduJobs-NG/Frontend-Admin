import { useContext } from "react";
import AdminContext from "../context/AdminProvider";
import { Link } from "react-router-dom";

export const ManageAndDocumentsPage = ({ page }) => {
  const { setExpandManageUsers, setExpandDocuments } = useContext(AdminContext);

  const handleCloseSidenav = () => {
    setExpandManageUsers(false);
    setExpandDocuments(false);
  };

  const pageDetails = {
    text:
      page === "Manage Users"
        ? ["Manage JobSeekers", "Manage Employeers"]
        : ["Jobseekers Documents", "Employeers Documents"],
    path:
      page === "Manage Users"
        ? ["/manage-jobseekers/", "/manage-employeers/"]
        : ["/jobseekers-documents/", "/employeers-documents/"],
  };

  return (
    <div className="flex flex-col gap-[14px]">
      <Link
        onClick={handleCloseSidenav}
        to={pageDetails.path[0]}
        className="text-[#000] text-[14px] font-[700] leading-[18px] py-[22px] px-[70px] bg-[#fff] rounded-[8px]"
      >
        {pageDetails.text[0]}
      </Link>
      <Link
        onClick={handleCloseSidenav}
        to={pageDetails.path[1]}
        className="text-[#000] text-[14px] font-[700] leading-[18px] py-[22px] px-[70px] bg-[#fff] rounded-[8px]"
      >
        {pageDetails.text[1]}
      </Link>
    </div>
  );
};
