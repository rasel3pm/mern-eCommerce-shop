import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LayOut from "../common/LayOut";
import axios from "axios";
import swal from "sweetalert";

const Register = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    avater: "",
  });

  const eventHadaler = (e) => {
    if (e.target.name === "avater") {
      let reader = new FileReader();

      reader.onload = () => {
        let data = { ...signUp };
        data[e.target.name] = reader.result;
        setSignUp(data);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      let data = { ...signUp };
      data[e.target.name] = e.target.value;
      setSignUp(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(signUp);
    axios
      .post("http://localhost:5000/api/v1/auth/register", signUp)
      .then((data) => swal("Good job!", "Account created", "success", data))
      .catch((err) => swal(err.data.message + "Account not created", "danger"));
  };

  return (
    <>
      <LayOut>
        <Container>
          <div className="LogIn m-auto">
            <h1 className="text-white">Register Account</h1>

            <div className="my-3">
              <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input
                  onChange={(e) => eventHadaler(e)}
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className="form-control w-50"
                />

                <label for="Email">Email</label>
                <input
                  onChange={(e) => eventHadaler(e)}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="form-control w-50"
                />

                <label for="Password">Password</label>
                <input
                  onChange={(e) => eventHadaler(e)}
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="form-control w-50"
                />
                <label for="File">File</label>
                <input
                  onChange={(e) => eventHadaler(e)}
                  name="avater"
                  type="file"
                  placeholder="Input file"
                  className="form-control w-50 mb-3"
                />

                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
            {/* <button type="submit" onClick={tryss} className="btn btn-primary">
              test
            </button> */}
            <div>
              <p>
                <NavLink to="/login">Log In</NavLink>
              </p>
            </div>
          </div>
        </Container>
      </LayOut>
    </>
  );
};

export default Register;
