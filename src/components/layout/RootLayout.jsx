import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div className="w-full px-[20px] max-xsm:px-0">
        <Outlet />
      </div>
      
    </>
  );
}
