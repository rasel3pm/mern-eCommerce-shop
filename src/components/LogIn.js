import React, { useState } from "react";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LayOut from "./common/LayOut";
import axios from "axios";
import swal from "sweetalert";
const LogIn = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const eventHadaler = (e) => {
    let data = { ...login };
    data[e.target.name] = e.target.value;
    setLogin(data);
  };

  const loginhandelar = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/auth/login", login)
      .then((data) => swal("login", "success", data))
      .catch((err, data) => err.response.data.message);
  };
  return (
    <>
      <LayOut>
        <Container>
          <div className="LogIn">
            <h1 className="text-white">LogIn Your Account</h1>

            <div className="my-3">
              <form onClick={loginhandelar}>
                <label for="Email">Email</label>
                <input
                  onChange={(e) => eventHadaler(e)}
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  className="form-control w-50"
                />

                <label for="Email" className="mt-3">
                  Password
                </label>
                <input
                  onChange={(e) => eventHadaler(e)}
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="form-control w-50 mb-3"
                />

                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </form>
            </div>

            <div>
              <p>
                Do not have an Account ?{" "}
                <NavLink to="/register">Register Now</NavLink>
              </p>
            </div>
          </div>
        </Container>
      </LayOut>
    </>
  );
};

export default LogIn;
