import { lazy, Suspense } from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Browse = lazy(() => import("./Browse"));

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/browse"
          element={
            <Suspense fallback={<div>Loading..</div>}>
              <Browse />
            </Suspense>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
