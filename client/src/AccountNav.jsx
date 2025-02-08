import { Link, Navigate, useLocation, useParams } from "react-router-dom";
export default function AccountNav() {

    const { pathname } = useLocation();
    let subpage = pathname.split('/')?.[2];
    if (subpage === undefined) {
        subpage = 'profile';
    }

    // link 
    function LinkClasses(type = null) {
        let classes = "px-5 px-6";
        if (type === subpage) {
            classes += " bg-primary text-white rounded-full";
        }
        return classes;
    }
    return (
        <nav className=" w-full flex justify-center mt-8 gap-2 mb-9">
            <Link className={LinkClasses('profile')} to={"/account"}>My Profile</Link>
            <Link className={LinkClasses('bookings')} to={"/account/bookings"}>My Bookings</Link>
            <Link className={LinkClasses('places')} to={"/account/places"}>My places</Link>
        </nav>
    );
}