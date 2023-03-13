import "./Login.scss";
import { useState } from "react";
import axios from "axios";

export default function Login({ logStatus, setLogStatus }: boolean) {
  const Serv_URL = "http://localhost:5173/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passerror, setPassError] = useState(false);
  const [userError, setUserError] = useState(false);

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post(`${Serv_URL}/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          setLogStatus(true);
        }
      })
      .catch((response) => {
        if (response.response.status === 400) {
          setUserError(true);
        } else if (response.response.status === 403) {
          setUserError(false);
          setPassError(true);
        }
        setLogStatus(false);
      });
  };

  return (
    <div className="login_container">
      <form onSubmit={handleLogin} className="login_main">
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        {userError && (
          <p>
            <span className="text-red-500">User not Found </span>
          </p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          s
        ></input>
        {passerror && (
          <p>
            <span className="text-red-500">Incorrect Password </span>
          </p>
        )}
        <button type="submit">Log On!</button>
      </form>
    </div>
  );
}
