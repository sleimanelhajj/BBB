import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        // send all these to /register
        name,
        email,
        password,
      });
      alert('Registration is successful! Now you can log in!');
    } catch (e) {
      alert('duplicate emails');
    }
  }

  return (
    <div className="mt-60 grow flex items-center justify-around">
      <div className="-mt-60">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form
          className="max-w-md mx-auto border relative top-3"
          onSubmit={
            registerUser // Call the registerUser function
          }
        >
          <input
            type="text"
            placeholder="User"
            value={name}
            // Here when i setName im getting the ev value and setting the "name" variable as the new input name
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text" to={"/login"}>
              Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
