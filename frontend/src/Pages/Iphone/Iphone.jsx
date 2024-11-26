import React, { useEffect, useState } from "react";
import "./Iphone.css";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/iphone")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wrapper font-weight-bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {data?.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            // let productPage = "get-product/" + product.product_id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }
            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`${product.product_id}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt="product" />
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
};

export default Iphone;

// import React, { useEffect, useState } from "react";
// import "./Iphone.css";
// import { Link } from "react-router-dom";

// const Iphone = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:3004/iphone");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);
//   let order = 1;

//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-12 mt-5">
//               <div className="title-wrapper font-weight-bold">Iphones</div>
//               <div className="brief-description">
//                 The best for the brightest.
//               </div>
//             </div>
//           </div>
//           {data?.map((product) => {
//             let id = product.product_url;
//             let title = product.product_name;
//             let img = product.product_img;
//             let Brief = product.product_brief_description;
//             let StartPrice = product.starting_price;
//             let PriceRange = product.price_range;
//             let order1 = 1;
//             let order2 = 2;

//             if (order !== 1) {
//               order1 = 2;
//               order2 = 1;
//               order--;
//             } else {
//               order++;
//             }

//             return (
//               <div
//                 key={id}
//                 className="row justify-content-center text-center product-holder h-100"
//               >
//                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                   <div className="product-title">{title}</div>
//                   <div className="product-brief">{Brief}</div>
//                   <div className="starting-price">
//                     {`Starting at ${StartPrice}`}
//                   </div>
//                   <div className="monthly-price">{PriceRange}</div>
//                   <div className="links-wrapper">
//                     <ul>
//                       <li>
//                         <Link to={`${product.product_id}`}>Learn more</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                   <div className="product-image">
//                     <img src={img} alt="product" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Iphone;

