import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      {/* admin sidebar */}
      <Outlet />
    </>
  );
};

export default AdminLayout;
