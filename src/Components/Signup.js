import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    sex: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [check, setCheck] = useState(true);
  const [allClear, setAllClear] = useState(true);
  const navigate = useNavigate();
  const ref = useRef();

  const handleChangeName = (e) => {
    let name = e.target.value;
    setUserData({ ...userData, name });
  };
  const handleChangeSurName = (e) => {
    let surname = e.target.value;
    setUserData({ ...userData, surname });
  };
  const handleChangeSex = (e) => {
    let sex = e.target.value;
    setUserData({ ...userData, sex });
  };
  const handleChangeUserName = (e) => {
    let username = e.target.value;
    setUserData({ ...userData, username });
  };
  const handleChangeEmail = (e) => {
    let email = e.target.value;
    setUserData({ ...userData, email });
  };
  const handleChangePassword = (e) => {
    let password = e.target.value;
    setUserData({ ...userData, password });
  };
  const handleChangeConfirmPassword = (e) => {
    let confirmpassword = e.target.value;
    if (userData.password !== confirmpassword) {
      setCheck(false);
      // ref.current.setAttribute("disabled", true);
    } else {
      setCheck(true);
    }
    setUserData({ ...userData, confirmpassword });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/signup";
    if (
      userData.name.length > 0 &&
      userData.surname.length > 0 &&
      userData.sex.length > 0 &&
      userData.username.length > 0 &&
      userData.email.length > 0 &&
      userData.password.length > 0 &&
      userData.confirmpassword.length > 0
    ) {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const serverResp = await response.json();
      const { resp } = serverResp;
      if (resp === true) {
        navigate("/signIn");
      }
      setAllClear(true);
    } else {
      setAllClear(false);
    }

    setUserData({
      name: "",
      surname: "",
      sex: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="signup_container">
      <div className="signup_div">
        <form className="signupform">
          <legend>Register</legend>
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            name="name"
            onInput={(e) => handleChangeName(e)}
            placeholder="first name"
            className="input1"
            maxLength="12"
            autoFocus
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            onInput={(e) => handleChangeSurName(e)}
            placeholder="last name"
            className="input2"
            maxLength="20"
          />
          <label htmlFor="gender">Gender</label>
          <select
            className="select-options"
            name="gender"
            onInput={(e) => handleChangeSex(e)}
          >
            <option hidden name="gender"></option>
            <option value="male" name="gender">
              Male
            </option>
            <option value="female" name="gender">
              Female
            </option>
          </select>
          <label htmlFor="text">User Name</label>
          <input
            type="text"
            name="text"
            onInput={(e) => handleChangeUserName(e)}
            placeholder="alias"
            className="input3"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onInput={(e) => handleChangeEmail(e)}
            placeholder="Email"
            className="input3"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onInput={(e) => handleChangePassword(e)}
            placeholder="Password"
            className="input4"
            required
          />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            onInput={(e) => handleChangeConfirmPassword(e)}
            className="input5"
            required
          />
          <p className={check ? "match" : "no-match"}>
            password does not match
          </p>

          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => handleClick(e)}
            ref={ref}
          >
            submit
          </button>
          <p className={allClear ? "filled" : "un-filled"}>
            All information must be filled
          </p>
        </form>
        <div className="ext_account">
          <p>
            Already have an account?
            <Link to="../signIn" relative="path">
              sign in
            </Link>
          </p>
        </div>
        <p className="agreement-text">
          By clicking "Submit" you are agreeing to our terms and condition of
          service and privacy.
        </p>
      </div>
    </div>
  );
};

export default Signup;
