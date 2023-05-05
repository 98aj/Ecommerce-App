import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import {addToCart} from '../redux/Action'

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const dispatch = useDispatch();
  const addProduct = (product)=>{
    dispatch(addToCart(product))
    alert('Product Added To Cart')
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(await result.data);

      setLoading(false);
    };
    fetchData();
  }, []);

  const Loading = () => {
    return (
      <div className="loading d-flex justify-content-center">Loading....</div>
    );
  };

  const Details = () => {
    return (
      <div className="row">
        <div className="col-md-5">
          <div className="img">
            <img src={product.image} height="500px" width="500px" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button className="btn btn-primary" onClick={()=> addProduct(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  };
  return <div className="productpage">{loading ? <Loading /> : <Details />}</div>;
}
