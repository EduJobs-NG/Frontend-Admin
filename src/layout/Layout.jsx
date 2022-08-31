import { Outlet, useParams } from "react-router-dom";

import { Sidebar } from "../features/Sidebar";
import { Header } from "../features/Header";

export const Layout = ({ pageTitle }) => {
  const { page } = useParams();

  return (
    <div className="flex min-h-screen">
      {page === "login" ? (
        <main className="bg-[#D9D9D9] grow">
          <Outlet />
        </main>
      ) : page === "logout" ? (
        <>
          <Sidebar pageTitle={pageTitle} />
          <main className="grow">
            <Outlet />
          </main>
        </>
      ) : (
        <>
          <Sidebar pageTitle={pageTitle} />
          <div className="flex flex-col grow">
            <Header pageTitle={pageTitle} />
            <main className="bg-[#D9D9D9] px-[45px] py-[25px] grow">
              <Outlet />
            </main>
          </div>
        </>
      )}
    </div>
  );
};
