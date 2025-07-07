import { ShoppingOutlined } from "@ant-design/icons";
import { Badge, Drawer, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Header = () => {
  const [open, setOpen] = useState(false);
  const cartData = useSelector((state) => state?.cart);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [cartData.length == 0]);

  const totalAmount = cartData.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  return (
    <div className="bg-slate-400 py-4">
      <div className="max-w-[800px] m-auto flex justify-between">
        <h1 className="font-bold text-4xl">Product Store</h1>
        <div className="text-3xl">
          <Badge count={cartData?.length}>
            <ShoppingOutlined className="text-3xl" onClick={showDrawer} />
          </Badge>

          <Drawer
            title="Products"
            closable={{ "aria-label": "Close Button" }}
            onClose={onClose}
            open={open}
          >
            <div className="h-[500px] overflow-y-auto">
              {cartData.length > 0 ? (
                <>
                  {cartData.map((item) => {
                    return <CartProduct key={item.id} data={item} />;
                  })}
                </>
              ) : (
                <Empty description="No Product Found" />
              )}
            </div>

            <p>TOTAL AMOUNT : {totalAmount}</p>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
