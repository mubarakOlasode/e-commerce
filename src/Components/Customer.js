import { useId, useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./Customer.css";

const Customer = ({
  onRoute,
  handleClickNxt,
  handleClickPrev,
  photos_data,
}) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Customer") {
      onRoute("customer");
    }
  }, [location.pathname, onRoute]);
  let id = useId();
  let ref = useRef();
  const getParams = (e) => {
    // const {className,}= ref.current;
  };

  return (
    <div>
      <section className="section-container">
        <section className="product_div">
          <div className="product_container">
            {photos_data.map((image) => {
              return (
                <Link className="product-link" to="/product">
                  <article id={id} ref={ref} className="product_article">
                    <div className="product_title">{image.title}</div>
                    <p>Credit:unsplash</p>
                    <Link to={"/customer"}>
                      <input
                        className="btnBuy"
                        type="button"
                        id={id}
                        onClick={(e) => getParams(e)}
                        value="Add to cart"
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
      </section>
    </div>
  );
};

export default Customer;
