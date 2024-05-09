import { Button } from "@/components/ui/button";
import { publicRoutes } from "@/lib/data/nav-links";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle.tsx";
import ContactUs from "./contact-us";
import Sidebar from "./sidebar";
import { Search } from "lucide-react";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex justify-center items-center h-16 lg:h-20    shadow-md shadow-secondary w-full fixed top-0 bg-background z-40 ">
      <Button variant={"navbar"}> Food-Int</Button>
      <div className=" ml-auto  pr-4  gap-x-5 hidden lg:flex">
        <Button variant={"outline"}>
          Search <Search className="h-4 w-4 ml-5" />
        </Button>
        {publicRoutes.map((item) =>
          item.path === "/#contact-us" ? (
            <ContactUs label={item.name} key={item.name} />
          ) : (
            <Link to={item.path} key={item.name}>
              <Button variant="ghost">{item.name}</Button>
            </Link>
          )
        )}
        {/* {user?.idToken ? (
          <>
            <Link to={"/account"}>
              <Button variant={"ghost"}>Account</Button>
            </Link>
            <Button variant={"default"} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Link to={"/auth/login"}>
            <Button variant={"default"}>Login</Button>
          </Link>
        )} */}
        <ModeToggle />
      </div>
      <div className=" ml-auto  pr-4  gap-x-3 flex lg:hidden">
        <Sidebar />

        <Button variant={"outline"} size={"icon"}>
          <Search className="h-4 w-4 " />
        </Button>
        <ModeToggle />
        {/* {user?.idToken ? (
          <Button size={"sm"} variant={"default"} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link to={"/auth/login"}>
            <Button size={"sm"} variant={"default"}>
              Login
            </Button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
