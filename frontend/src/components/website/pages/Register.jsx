import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the captured input values (e.g., send them to the server)
    try {
      const result = await fetch("http://localhost:5001/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          type: "customer",
        }),
      });
      console.log({ result });
      let res = await result.json();
      console.log({ res });
      if (!result.ok) {
        const errorMessage = res.message;
        console.log(errorMessage);
        throw new Error(errorMessage);
      }
      console.log("Register Data:", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: "customer",
      });
      toast.success("User Registered Successfully");
      setTimeout(() => {
        props.setShownPage(5);
      }, 1000);
    } catch (errorData) {
      const errorMessage =
        errorData?.message || "An error occurred during registration";
      toast.error("Error Registering: " + errorMessage);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="register-section">
          <div className="account-wall">
            <form className="form-signin" onSubmit={handleSubmit}>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="material-icons"> perm_identity </span>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="material-icons"> lock </span>
                  </div>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <label className="checkbox pull-left d-flex align-items-center justify-content-around">
                Remember me
                <input
                  type="checkbox"
                  value="remember-me"
                  style={{ width: "fit-content" }}
                />
              </label>
              <button
                onClick={handleSubmit}
                className="btn btn-lg btn-danger btn-block"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
          <div className="register-footer">
            <div className="pull-left">
              <a href="#" className="text-center new-account">
                Forget Password?
              </a>
            </div>
            <Link className="pull-right" to="/login">
              <a
                onClick={() => {
                  props.setShownPage(5);
                }}
                href="#"
                className="text-center new-account"
              >
                Already Have Account <b>Sign in</b>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
