import { useParams } from "react-router-dom";

import { Jobs } from "../pages/Jobs";
import { ManageAndDocumentsPage } from "../pages/ManageAndDocumentsPage";
import { ManageJobseekersEmployeers } from "../pages/ManageJobseekersEmployeers";
import { JobseekersEmployeesDocuments } from "../pages/JobseekersEmployeesDocuments";
import { Messaging } from "../pages/Messaging";
import { FAQ } from "../pages/FAQ";
import { Settings } from "../pages/Settings";
import { Logout } from "../pages/Logout";

export const Page = ({ setPageTitle }) => {
  const { page } = useParams();

  const currentPage = () => {
    switch (page) {
      case "jobs":
        setPageTitle("Jobs");
        return <Jobs />;
      case "manage-users":
        setPageTitle("Manage Users");
        return <ManageAndDocumentsPage page="Manage Users" />;
      case "manage-jobseekers":
        setPageTitle("Manage Jobseekers");
        return <ManageJobseekersEmployeers title="Manage Jobseekers" />;
      case "manage-employeers":
        setPageTitle("Manage Employeers");
        return <ManageJobseekersEmployeers title="Manage Employeers" />;
      case "documents":
        setPageTitle("Documents");
        return <ManageAndDocumentsPage page="Documents" />;
      case "jobseekers-documents":
        setPageTitle("Jobseekers Documents");
        return <JobseekersEmployeesDocuments title="Jobseekers Documents" />;
      case "employeers-documents":
        setPageTitle("Employeers Documents");
        return <JobseekersEmployeesDocuments title="Employeers Documents" />;
      case "messaging":
        setPageTitle("Messaging");
        return <Messaging />;
      case "faq":
        setPageTitle("FAQs");
        return <FAQ />;
      case "settings":
        setPageTitle("Settings");
        return <Settings />;
      case "logout":
        setPageTitle("Logout");
        return <Logout />;
      default:
        setPageTitle("404 - Page Not Found");
        return;
    }
  };

  return currentPage();
};
