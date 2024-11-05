import React, { useState } from "react";
import { useAuth } from "./AuthContext";

export const Auth2 = () => {
  const { user, login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1 className="font-bold">
        Task: Create a user authentication system using useContext to manage
        login and logout states.
      </h1>
      {user ? (
        <div>
          <p>Welcome {user.username}</p>
          <button className="bg-red-500 text-white" onClick={logout}>
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <input
            className="border-2"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <input
            className="border-2"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button
            className="bg-blue-500 text-white"
            onClick={() => {
              login({ username: username, password: password });
              setPassword("");
              setUsername("");
            }}
          >
            Login
          </button>
        </div>
      )} <br />
    </>
  );
};
