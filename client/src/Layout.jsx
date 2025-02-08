import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
         {/* default flex is row but we set it to column*/},
        <div className="p-4 flex flex-col min-h-screen"> 
            <Header /> 
             {/* Outlet helps render child routes */}
            <Outlet />
        </div>
    );
}
