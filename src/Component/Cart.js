import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../redux/Action";

export default function Cart() {
  const state = useSelector((state) => state.handelCart);
  const dispatch = useDispatch();
  // const [total , setTotal] = useState(0)

  const deletepro = (product) => {
    dispatch(deleteCart(product));
  };

  const addPro = (product) => {
    dispatch(addToCart(product));
  };

  console.log(state);
  let price = state.map((val) => val.price * val.qty);
  let total = price.length == 0 ? 0 : price.reduce((a, b) => a + b);

  console.log(price, total);

  return (
    <div className="cart">
      <div className="container ">
        <h1>My Cart</h1>

        {state.map((product, i) => {
          return (
            <>
              <div className="row ">
                <div className="col-md-6 d-flex justify-content-start">
                  <div className="image">
                    <img src={product.image} height="150px" width="150px" />
                  </div>
                  <div className="description ">
                    <h5>{product.title}</h5>
                    <p>
                      <em>
                        <strong>Price</strong>
                      </em>
                      : ${product.price}
                    </p>
                    <p>
                      <em>
                        <strong>Qty</strong>
                      </em>
                      : {product.qty}
                    </p>
                    <p>
                      <em>
                        <strong>Amount</strong>
                      </em>
                      : ${price[i]}
                    </p>
                    <button
                      className="btn btn-dark me-2"
                      onClick={() => {
                        addPro(product);
                      }}
                    >
                      Add Item
                    </button>
                    <button
                      className="btn btn-dark"
                      onClick={() => deletepro(product)}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
        {total == 0 ? (
          <div className="checkOut">
            <h3>Your cart is empty.... Add product to see changes </h3>
          </div>
        ) : (
          <div className="checkOut">
            <h3>
              <em>
                <strong>Total Amount</strong>
              </em>
              : ${total}
            </h3>

           <button className="btn btn-dark" onClick={()=>{alert('Order Placed Successfully')}}>Place Order </button>
          </div>
        )}
      </div>
    </div>
  );
}
