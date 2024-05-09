import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { SidebarOpen } from "lucide-react";
import { FC, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { publicRoutes } from "@/lib/data/nav-links";
import ContactUs from "./contact-us";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useMemo(() => {
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <Button variant={"ghost"} onClick={() => setOpen(true)}>
          <SidebarOpen className="w-6 h-6" />
        </Button>
        <SheetContent
          className="max-w-[80%]  bg-secondary text-secondary-foreground   "
          side={"left"}
        >
          <SheetHeader className="mt-5">
            <div className="w-full flex flex-col justify-center items-center gap-y-6 md:gap-y-8  ">
              {publicRoutes.map((item) =>
                item.path === "/#contact-us" ? (
                  <div
                    key={item.name}
                    className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12"
                  >
                    <ContactUs label={item.name} />
                  </div>
                ) : (
                  <Link to={item.path} key={item.name} className="w-full">
                    <div className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12">
                      {item.name}
                    </div>
                  </Link>
                )
              )}
              {/* {user?.idToken && (
                <Link to={"/account"} className="w-full">
                  <div className="min-w-full p-3 m-1  md:p-4  rounded-md text-lg font-medium bg-muted/30 text-muted-foreground  flex justify-center items-center  min-h-12">
                    Account
                  </div>
                </Link>
              )} */}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
