import MainLayout from "@/layout/main-layout";
import HomePage from "@/pages/HomePage";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
