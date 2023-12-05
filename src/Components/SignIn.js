import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./signup.css";

const SignIn = ({ onRoute, routeBuy }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/SignIn") {
      onRoute("home");
    }
  }, [location.pathname, onRoute]);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email: email,
      password: password,
    };

    const url = "https://chopifyreact.nn.r.appspot.com/signIn";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginDetails),
    });
    const data = await response.json();
    let initial = data.name;
    let username = data.username;
    localStorage.setItem("name", initial);
    localStorage.setItem("userlname", username);

    if (data.resp) {
      routeBuy(true);
      navigate("/Customer");
    } else {
      navigate("/SignIn");
    }
  };
  return (
    <div className="sign-container">
      <div className="signIn-tag">Chopify</div>
      <div className="form-div">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => handleChangeEmail(e)}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="exampleInputPassword1"
              onChange={(e) => handleChangePassword(e)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary submit_btn"
            onClick={(e) => onClickSubmit(e)}
          >
            Submit
          </button>
        </form>
        <div className="new-to-chopify">
          <div className="line"></div>
          <div>
            <p>New to Chopify?</p>
          </div>
          <div className="line"></div>
        </div>

        <div className="create_acc_div">
          <Link to="/signup">
            <p>Create your Chopify account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
