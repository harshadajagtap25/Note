import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://noteapp25.herokuapp.com/user/login", payload)
      .then((r) => {
        console.log(r.data);
        if (r.data.token){
          localStorage.setItem("note_app_token", r.data.token);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>Login Here</h1>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
