import React, { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if (isRegistered) {
      //login
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setIsLoggedIn(true);
      } else {
        alert("Wrong credentials... try again.");
      }
    } else {
      //register
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className="font-bold">
        Task: Implement a basic authentification form with login and
        registration.
      </h1>

      {isLoggedIn ? (
        <div>
          <p>hello, {email}</p>
          <button
            className="bg-blue-500 text-white px-3 py-1"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <form>
            <h1 className="font-bold text-xl">
              {isRegistered ? <p>Login Page</p> : <p>Register Page</p>}
            </h1>
            <input
              className="border"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <input
              className="border"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <button
              className="bg-blue-500 text-white px-3 py-1"
              onClick={handleAuthentication}
            >
              {isRegistered ? "login" : "register"}
            </button>
          </form>
          {isRegistered ? (
            <p>Don't have an account? register now!</p>
          ) : (
            <p>Already have an account? Login</p>
          )}
          <button
            className="text-blue-500 font-bold"
            onClick={() => setIsRegistered(!isRegistered)}
          >
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )} <br />
    </>
  );
};
