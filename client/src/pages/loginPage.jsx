import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // redirect to the homepage, initially false, then if successfull set true
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext); //


  // handle the login
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      // to accept cookies b7ot withCredentials heke bit sayev bi myPort fiye bil app 7ot axios.defualts.withCredentials
      const response = await axios.post('/login', { email, password }, { withCredentials: true });
      alert('Login successful');
      setUser(response.data);
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="grow flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto border p-4" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="w-full mb-2 p-2 border"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="w-full mb-2 p-2 border"
          />

          <button className="w-full p-2 bg-primary text-white rounded-full">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text" to={"/register"}>
              Register!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
