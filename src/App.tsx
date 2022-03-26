import "./assets/styles.css";
import { Route, Routes, useNavigate } from "react-router-dom";

import { RouteProvider } from "@billers/library";
import ErrorBoundary from "components/shared/ErrorBoundary";
import { RecoilRoot } from "recoil";

import Nav from "./components/layout/Nav";
import Home from "./components/pages/Home";

const App = () => {
  const push = useNavigate();
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <RouteProvider push={push}>
          <Nav />
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </RouteProvider>
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export default App;
