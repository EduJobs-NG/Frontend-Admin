import dashboard from "../assets/dashboard.svg";
import job from "../assets/job.svg";
import user from "../assets/user.svg";
import document from "../assets/document.svg";
import message from "../assets/message.svg";
import faq from "../assets/faq.svg";
import settings from "../assets/settings.svg";
import logout from "../assets/logout.svg";

export const navs = [
  {
    name: "Dashboard",
    path: "/",
    icon: dashboard,
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: job,
  },
  {
    name: "Manage Users",
    icon: user,
    path: "/manage-users",
    options: [
      {
        name: "Manage Jobseekers",
        path: "/manage-jobseekers",
      },
      {
        name: "Manage Employeers",
        path: "/manage-employeers",
      },
    ],
  },
  {
    name: "Documents",
    icon: document,
    path: "/documents",
    options: [
      {
        name: "Jobseekers Documents",
        path: "/jobseekers-documents",
      },
      {
        name: "Employeers Documents",
        path: "/employeers-documents",
      },
    ],
  },
  {
    name: "Messaging",
    path: "/messaging",
    icon: message,
  },
  {
    name: "FAQs",
    path: "/faq",
    icon: faq,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: settings,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: logout,
  },
];
