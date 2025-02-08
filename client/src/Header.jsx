import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";


{/* Hone 3melt il top bar */ }

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className=" flex justify-between ">
      {/* ----------------------------------------------------------------------------------------------------------------------- */}
      {/* House Logo with the Text LOGO */}
      <Link to={"/"} className="flex items-center  gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" // fill color
          viewBox="0 0 24 24" // position on the screen
          strokeWidth={1.5} // edges adesh il width taba3a
          stroke="currentColor" // can change the color
          className="w-8 h-8" //t7akam bil dimensions can also rotate the icon
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
          />  
        </svg>
        <span className="font-bold text-xl">BBB</span>
      </Link>
      {/* ----------------------------------------------------------------------------------------------------------------------- */}


      <div className="flex border border-gray-400 squared-full py-2 px-4 gap-4 shadow-md shadow-gray-200">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>

        {/* Designing the button that has Search Icon, bg-primary is setting the color of the background of the image, rounded full kermel tkun rounded */}
        <button className="bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {/* ----------------------------------------------------------------------------------------------------------------------- */}

      {/* user button and the menu bar top right */}
      <Link to={user ? "/account" : "/login"} className="flex items-center border border-gray-400 rectangle-full py-2 px-4 gap-2 shadow-md shadow gray-200 ">
        {/* menu burger stack */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>

        {/* user icon */}
        <div className="rounded-full border border gray-500 p-0.5 overflow-hidden">
          {/* relative top-1 ta7et bit khaline a3mela shift nzul!!*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>

        {!!user && (
          <div>
            {user.name}
          </div>
        )}
      </Link>
    </header>
  );
}