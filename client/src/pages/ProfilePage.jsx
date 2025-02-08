import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";


export default function ProfilePage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  // 7ota fo2 kermel warning of order of hooks
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
  }

  if (!ready) {
    return "loading..."
  }

  // kermel when i refreshed sar 3ande meshkle eno 3am tekhedne deghre 3a; /login so 3melet metel a ready boolean heke kermel ma tekhedne la honik
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    if (redirect) {
      return <Navigate to={redirect} />
    }
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>)}
      {subpage == 'places' && (
        <PlacesPage />
      )}
    </div>
  );

}
