import AdminNavbar from "@/conponents/Admin/Bars/AdminNavbar";
import AdminSideBar from "@/conponents/Admin/Bars/AsminSIdebar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="">
        <AdminNavbar />
      </div>
      <div className=" flex ">
        <AdminSideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
