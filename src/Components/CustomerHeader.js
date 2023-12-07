import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import "./Customer.css";

const CustomerHeader = ({ name, getCustomerName, onRoute, routeBuy }) => {
  const [userlname, setUserlname] = useState("");
  const settingUserlname = (props) => {
    setUserlname(props);
  };
  // let count = 0;
  const navigate = useNavigate();
  // const [counter, setCounter] = useState(0);
  // const getParams = (e) => {
  //   count++;
  //   setCounter(count);
  //   // const {className,}= ref.current;
  // };
  useEffect(() => {
    let userName = localStorage.getItem("name");
    let userlname = localStorage.getItem("userlname");
    getCustomerName(userName);
    settingUserlname(userlname);
  }, [name, getCustomerName]);

  const onClickLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("name");
    localStorage.removeItem("userlname");
    routeBuy(false);
    getCustomerName("");
    settingUserlname("");
    navigate("e-commerce/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bgdark nav-container">
        <div className="navbar-con container-fluid">
          <Link to="e-commerce/">
            <p
              onClick={() => onRoute("home")}
              className="navbar-brand"
              style={{ fontSize: 30 }}
            >
              <AiOutlineHome />
            </p>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-link active">
                Men
                <GiConverseShoe />
              </li>
              <li className="nav-item nav-link active">
                Women
                <GiRunningShoe />
              </li>
              <li className="nav-item nav-link active">
                Children
                <TbShoe />
              </li>
            </ul>
          </div>
          <div>
            <p className="nav-user">
              Welcome <span>{userlname}</span>
            </p>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 logout_ul">
              <li className="nav-item nav-link active">
                {/* {counter} */}
                <BsCart4 />
              </li>
              <li className="nav-item nav-link active">
                <p className="customer-initial">{name[0]}</p>
              </li>
              <li className="nav-item nav-link active">
                <button
                  type="button"
                  className="sign-out"
                  onClick={(e) => onClickLogOut(e)}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav2">
        <p>
          We are thankful to all our customers, your satisfaction is our
          aspiration
        </p>
      </nav>
    </div>
  );
};

export default CustomerHeader;
