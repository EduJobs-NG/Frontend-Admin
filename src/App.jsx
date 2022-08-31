import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./layout/PersistLogin";
import RequireAuth from "./layout/RequireAuth";
import { Login } from "./pages/Login";
import { Layout } from "./layout/Layout";
import { Page } from "./layout/Page";
import { Dashboard } from "./pages/Dashboard";
import { PostJobs } from "./pages/PostJobs";

function App() {
  const [pageTitle, setPageTitle] = useState(null);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout pageTitle={pageTitle} />}>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route index element={<Dashboard setPageTitle={setPageTitle} />} />
            <Route
              path=":page"
              element={<Page setPageTitle={setPageTitle} />}
            />

            <Route
              path="jobs/post-jobs"
              element={<PostJobs setPageTitle={setPageTitle} />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
