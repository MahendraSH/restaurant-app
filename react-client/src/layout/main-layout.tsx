import Navbar from "@/components/layout-comp/navbar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <div>
      <Navbar />
      <div className="py-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
