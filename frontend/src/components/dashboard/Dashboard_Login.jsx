import React from "react";

export default function Dashboard_Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 offset-md-4">
            <div className="login-section">
              <div className="account-wall">
                <form className="form-signin">
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <span className="material-icons"> perm_identity </span>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Username/Email"
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
                      id="inlineFormInputGroupUsername2"
                      placeholder="password"
                    />
                  </div>
                  <label className="checkbox pull-left">
                    <input type="checkbox" value="remember-me" />
                    Remember me
                  </label>
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
                <div className="pull-right">
                  <a href="#" className="text-center new-account">
                    Get New Account <b>Sign up</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
