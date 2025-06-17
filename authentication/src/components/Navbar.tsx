import { useAuth } from "@/context/AuthProvider";
import { ModeToggle } from "./mode-toggle";

function Navbar() {
    const {handleLogout}=useAuth();
    return (
        <div className="flex flex-row items-center justify-between gap-4 m-5 p-5 rounded-2xl border-2">
            <h1 className="text-2xl">Auth</h1>
            <ModeToggle/>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Navbar;