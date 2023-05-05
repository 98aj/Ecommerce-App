import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  
  //Fetch data from api ans store in state
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let result = await axios.get("https://fakestoreapi.com/products");
      setData(await result.data);
      setFilter(await result.data);
      console.log(filter);
      setLoading(false);
    };
    fetchData();
  }, []);

  //Loading component
  const Loading = () => {
    return (
      <div className="loading d-flex justify-content-center">Loading....</div>
    );
  };

  //product display component


  const filterData = (str) => {
    let updatedFilter = data.filter((val) => val.category === str);

    setFilter(updatedFilter);
  };

  const ShowProduct = () => {
    return (
      <>
     {/* Filter section of app */}
        <div className="buttons d-flex justify-content-center ">
          <button
            className="btn btn-outline-dark me-2 "
            type="button"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            type="button"
            onClick={() => filterData("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            type="button"
            onClick={() => filterData("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            type="button"
            onClick={() => filterData("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            type="button"
            onClick={() => filterData("electronics")}
          >
            Electronics
          </button>
        </div>

       
        
        <hr />

        {/* Main Display of Products according to filter  */}
        <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {filter.map((product) => {
              return (
                <div className="col-md-3">
                  <div class="card h-100 text-center p-4" key={product.id}>
                    <img
                      src={product.image}
                      class="card-img-top"
                      height="250px"
                    />
                    <div class="card-body">
                      <h5 class="card-title mb-0">
                        {product.title.substring(0, 20)}
                      </h5>
                      <p class="card-text fw-bold">${product.price}</p>
                      <Link
                        to={`/productpage/${product.id}`}
                        class="btn btn-primary"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  };
  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
}
