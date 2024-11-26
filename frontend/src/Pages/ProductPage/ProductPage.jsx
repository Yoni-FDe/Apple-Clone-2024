import { useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const [products, setProducts] = useState([]);

  const { pID } = useParams();
  // console.log(productID);
  //fetch data from backend function
  const fetchData = () => {
    fetch("http://localhost:3004/iphone")
      .then((res) => res.json())
      .then((data) => {
        const productList = data;
        // console.log(productList);
        const singleProduct = productList.filter(
          (product) => product.product_id == pID
        );
        // console.log(singleProduct);
        setProducts(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  };

  useEffect(() => {
    fetchData();
  }, [pID]);
  // console.log(products);

  // if (products.length) {
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          {products?.map((product) => {
            let id = product.product_id;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            // let productPage = "get-product/" + id;
            let details = product.product_description;

            let productDiv = (
              <div key={id}>
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5">
                    <div className="title-wrapper font-weight-bold">
                      {title}
                    </div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="product-image">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
  // } else {
  //   return <Four04 />;
  // }
};

export default ProductPage;
