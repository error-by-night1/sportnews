import React from "react";
var bcrypt = require("bcryptjs");
const { useState } = require("react");

//-----------------------------------------------------------------------
const Login = ({ login, signup }) => {
  //____________________________________________________________________

  const [email, setemail] = useState({ email: "" });
  const [pass, setpass] = useState({ password: "" });
  const [logu, setlogu] = useState(false);
  //______________________________________________________________________

  const change = () => {
    setlogu(!logu);
  };

  //____________________________________________________________________
  const logup = () => {
    if (logu === true) {
      return (
        <div>
          {" "}
          <h2 className="login-header">Log in</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setemail({ email: "" });
            }}
            className="login-container"
          >
            <p>
              <input
                onChange={(e) => {
                  setemail({ email: e.target.value });
                }}
                type="text"
                placeholder="Email"
                required="required"
              />
            </p>
            <p>
              <input
                onChange={(e) => {
                  setpass({ password: e.target.value });
                }}
                type="password"
                placeholder="Password"
                required="required"
              />
            </p>
            <p>
              <input
                onClick={async () =>
                  await login({ email: email.email, pass: pass.password })
                }
                type="submit"
                value="Log in"
              />
            </p>
          </form>
        </div>
      );
    } else if (logu === false) {
      return (
        <div>
          {" "}
          <h2 className="login-header">Sign up</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setpass({ password: "" });
            }}
            className="login-container"
          >
            <p>
              <input
                onChange={(e) => {
                  setemail({ email: e.target.value });
                }}
                type="text"
                placeholder="Email"
                required="required"
              />
            </p>
            <p>
              <input
                onChange={(e) => {
                  setpass({ password: e.target.value });
                }}
                type="password"
                placeholder="Password"
                required="required"
              />
            </p>
            <p>
              <input
                onClick={async () =>
                  await signup({
                    email: email.email,
                    pass: bcrypt.hashSync(pass.password, 8),
                  })
                }
                type="submit"
                value="signup"
              />
            </p>
          </form>
        </div>
      );
    }
  };
  //____________________________________________________________________
  return (
    <div className="login">
      <div className="login-triangle"></div>
      {logup()}
      <input
        onClick={() => {
          change();
        }}
        type="submit"
        value={logu ? "signup" : "login"}
      />
    </div>
  );
};
export default Login;
