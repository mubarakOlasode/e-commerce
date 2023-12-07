import { useEffect, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Products.css";

const Products = ({
  onRoute,
  photos_data,
  handleClickNxt,
  handleClickPrev,
  buyButton,
  value,
}) => {
  let location = useLocation();
  let id = useId();

  useEffect(() => {
    if (location.pathname === "/products") {
      onRoute("product");
    }
  }, [location.pathname, onRoute]);

  return (
    <div className="product-container-div">
      <section className="changing-img">
        <img src={require("../Asset/Black-sand.jpg")} alt="changingImage" />
      </section>
      <section className="product-div">
        <div className="product_container">
          {photos_data.map((image) => {
            return (
              <article id={id} className="product_article">
                <div className="product_title">{image.title}</div>
                <p>Credit:unsplash</p>
                <Link to={!buyButton ? "/signIn" : "/customer"}>
                  <input
                    className="btnBuy"
                    type="button"
                    onClick={() => onRoute("home")}
                    value={value}
                  />
                </Link>
                <div
                  className="product-img"
                  id="product-img"
                  style={{
                    backgroundImage: `url(${image.photo})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="img_desc">{image.description}</div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="pagination_section">
        <nav className="footer-nav" aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                type="submit"
                className="page-link"
                aria-label="Previous"
                onClick={(e) => handleClickPrev(e)}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Next"
                onClick={(e) => handleClickNxt(e)}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="footer-text">
          <div className="foot3">
            <p> Customer Service</p>
            <ul>
              <li>
                <Link className="Link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li> Returns & Exchanges</li>
              <li> Shipping Terms</li>
              <li> Warranty & Repair</li>
              <li> FAQ</li>
              <li> Payment cards</li>
            </ul>
          </div>
          <div className="foot4">
            <p> FIND US ON</p>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/mubarak_ao/">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/OlasodeM">
              <FaTwitter />
            </a>
          </div>

          <div className="foot5">
            <p id="sign"> Sign up to get latest updates</p>
            <form>
              <input
                type="email"
                className="txt"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button type="submit" className="footer-btn"></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
