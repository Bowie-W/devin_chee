import './Login.scss'
import {useState } from 'react'
import axios from "axios";

export default function Login(){

    const Serv_URL = "http://localhost:5173/"

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passerror, setPassError] = useState(false)
    const [userError, setUserError] = useState(false)


    const handleLogin = (e) => {
        e.preventDefault();
        axios
          .post(`${Serv_URL}/login`, {
            username: username,
            password: password,
          })
          .then((response) => {
            if (response.status === 200) {
              sessionStorage.authToken = response.data.token;
              const grabbedToken = response.data.token
              const decodedToken = jwtDecode(grabbedToken)
              setTokenInfo(decodedToken)
    
              setLogStatus(true);
            } 
          })
          .catch((response) => {
    
            if (response.response.status === 400) {
              setUserError(true)
            }
    
            else if (response.response.status === 403) {
              setUserError(false)
              setPassError(true)
    
            }
    
            setLogStatus(false);
            
          });
      };


    return(

        
        <div>
              <div>
      <form
        onSubmit={handleLogin}
      
      >
        <div className="">
          <label htmlFor="username" >Username:</label>
          <input
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          {userError && <p><span className="text-red-500">User not Found </span></p>}
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {passerror && <p><span className="text-red-500">Incorrect Password </span></p>}
          <button type="submit">Log On!</button>
          <Link to={"/signup"}>
            <p className="my-5  border-b"> New ? Sign up here !</p>
          </Link>
        </div>
      </form>
    </div>

            
        </div>
    )
}