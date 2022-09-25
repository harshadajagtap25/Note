import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleResgister = () => {
    const payload = {
      email: email,
      password: password,
      age: age,
    };
    axios
      .post("http://localhost:8080/signup", payload)
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>Register Here</h1>
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

        <input
          type="age"
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <button onClick={handleResgister}>Register</button>
      </div>
    </div>
  );
};

export default Signup;
