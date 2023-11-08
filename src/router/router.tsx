import { Route, Routes } from "react-router-dom";
import ErrorPage from "../views/pages/error/Error.page";
import HomePage from "../views/pages/home/Home.page";

function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Router;
