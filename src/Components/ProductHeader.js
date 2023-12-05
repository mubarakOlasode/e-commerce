import React from "react";
import { Link } from "react-router-dom";
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import "./Products.css";

const ProductHeader = ({ handleSearch }) => {
  return (
    <div>
      <section>
        <nav class="navbar navbar-expand-lg navbar-dark bgdark">
          <div className="navbar-con">
            <Link to="/">
              <p className="navbar-brand" style={{ fontSize: 30 }}>
                <AiOutlineHome />
              </p>
            </Link>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item nav-link active">
                  Men
                  <GiConverseShoe />
                </li>
                <li class="nav-item nav-link active">
                  Women
                  <GiRunningShoe />
                </li>
                <li class="nav-item nav-link active">
                  Children
                  <TbShoe />
                </li>
              </ul>
              <div>
                <p class="navbar-brand">Putting a smile on your face</p>
              </div>
              <form className="d-flex search-form">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => handleSearch(e)}
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default ProductHeader;
