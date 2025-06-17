import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthProvider";
import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const { authToken } = useAuth();
  const navigate = useNavigate();

  if (!authToken) {
    navigate("/login");
  }

  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
