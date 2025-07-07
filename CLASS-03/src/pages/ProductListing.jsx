import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { ProductTypes } from "../store/actions/ActionTypes";
import { Col, Row, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const allProducts = useSelector((state) => state?.allProducts);
  // console.log(allProducts);

  const getData = async () => {
    const productData = await fetch("https://fakestoreapi.com/products");
    const response = await productData.json();
    dispatch({ type: ProductTypes.ALL_PRODUCTS, payload: response });
    setLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="max-w-[1200px] m-auto p-3">
      {loading ? (
        <Row gutter={[16, 16]}>
          {allProducts.map((item, index) => {
            return (
              <Col key={index} xs={24} s={12} m={12} l={6} xl={6}>
                <Product data={item} />;
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="flex items-center justify-center h-[100vh]">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
      )}
    </div>
  );
};

export default ProductListing;
