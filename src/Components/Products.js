import { useEffect, useId } from "react";
import { Link, useLocation } from "react-router-dom";
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
    <div>
      <section className="changing-img">
        <img src={require("../Asset/Black-sand.jpg")} alt="changingImage" />
      </section>
      <section className="product_div">
        <div className="product_container">
          {photos_data.map((image) => {
            return (
              <Link className="product-link" to="/product">
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
                    className="img_div"
                    style={{
                      backgroundImage: `url(${image.photo})`,
                      backgroundSize: "cover",
                      height: "200px",
                      width: "250px",
                      marginTop: "20px",
                    }}
                  ></div>
                  <div className="img_desc">{image.description}</div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="pagination_section">
        <nav aria-label="Page navigation example">
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
      </section>
    </div>
  );
};

export default Products;
