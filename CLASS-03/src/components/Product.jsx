import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../store/actions/ActionTypes";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state)=>state);
  console.log(cartData)
  const { id, title, description, image, price, category } = data;
  return (
    <div>
      <Card
        key={id}
        className="relative"
        hoverable
        cover={
          <img
            className="w-100 h-100 object-contain"
            alt="example"
            src={image}
          />
        }
      >
        <h1 className="text-2xl">category : {category}</h1>
        <Meta title={title} description={description.slice(0, 50)} />
        <p className="text-3xl">Price : {price}</p>
        <p>
          <ShoppingCartOutlined onClick={()=>dispatch({type:ProductTypes.CART_PRODUCT, payload:data})} className="top-0 right-5 absolute text-2xl font-bold" />
        </p>
      </Card>
    </div>
  );
};

export default Product;
