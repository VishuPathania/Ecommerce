import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "../CartContext";
import classes from "./ProductDetail.module.css";


const ProductDetail = () => {
  const {productsArr} = useContext(Cart)

  // console.log(params.id)

  const { id } = useParams(); //params in key, value pair we destrcuring and get key only

  //here array so, for finding that perticular image we use find

  let product = productsArr.find((value) => value.id === id);

  console.log(product);

  return (
    <>
      <div className={classes.itemContainer}>
        <div className={classes.itemImage}>
          <img src={product.imageUrl} alt="product-images" />

          
        </div>

        <div className={classes.itemDetails}>
          <h1 style={{fontFamily:'cursive'}}>{product.title}</h1>

          <h3 style={{fontFamily:'Bahnschrift SemiBold'}}>Price: ${product.price} </h3>
          <span>Extra 55% off</span>

          <div className={classes.itemReview}>
            <p className={classes.reviewtitle}>Reviews : </p>

            {product.ProductReview.map((e) => (
              <div className={classes.itemReview1}>
                <p style={{color:'',fontFamily:'Lucida Sans Unicode'}}>{e.name} - </p>

                <p style={{fontFamily:'Microsoft Tai Le',paddingLeft:'1%'}}>{e.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
