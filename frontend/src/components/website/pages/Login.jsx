import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contextss/AuthContext";

export default function Login(props) {
  let { customerLogin } = useAuth();
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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

  const submitform = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch(
        import.meta.env.VITE_NODE_ENV == "development"
          ? `http://localhost:${import.meta.env.VITE_PORT}/api/users/auth`
          : "https://ren-a-car.onrender.com/api/users/auth",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      let res = await result.json();
      console.log({ res });
      if (!result.ok) {
        const error = res.message;
        throw new Error(error);
      }
      console.log("login Data:", {
        email: formData.email,
        password: formData.password,
      });
      toast.success("User Login Successfully");
      customerLogin(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (e) {
      toast.error(e.message);
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
        <div className="login-section">
          <div className="account-wall">
            <form onSubmit={submitform} className="form-signin">
              <div className="input-group mb-2 mr-sm-2">
                <div
                  className="input-group-prepend"
                  style={{ cursor: "pointer" }}
                >
                  <div className="input-group-text">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername1"
                  placeholder="Email"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-2 mr-sm-2">
                {!showPassword ? (
                  <>
                    <div className="input-group-prepend">
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="input-group-text"
                        style={{ cursor: "pointer" }}
                      >
                        <span class="material-symbols-outlined">lock</span>{" "}
                      </div>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Password"
                      value={formData.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <div className="input-group-prepend">
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="input-group-text"
                        style={{ cursor: "pointer" }}
                      >
                        <span class="material-symbols-outlined">lock_open</span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Password"
                      value={formData.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>
              {
                <label className="checkbox pull-left d-flex align-items-center justify-content-around">
                  Remember me
                  <input
                    type="checkbox"
                    value="remember-me"
                    style={{ width: "fit-content" }}
                  />
                </label>
              }
              <a href="#" className="pull-right need-help">
                <button
                  className="btn btn-lg btn-danger btn-block"
                  type="submit"
                >
                  Log in
                </button>
              </a>
              <span className="clearfix"></span>
            </form>
          </div>
          <div className="login-footer">
            <div className="pull-left">
              <a href="#" className="text-center new-account">
                Forget Password?
              </a>
            </div>
            <Link className="pull-right" to="/register">
              <a href="#" className="text-center new-account">
                Get New Account <b>Sign up</b>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
