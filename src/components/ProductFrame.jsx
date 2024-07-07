import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { useNavigate } from "react-router-dom";

const ProductFrame = ({ product }) => {
  const navigate = useNavigate();
  const metaDescription = product.description.substring(0, 30) + "...";

  return (
    <div className="flex justify-center">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={product.image_url} />}
        onClick={() => navigate(`/products/${product.id}`)}
        bordered={true}
      >
        <Meta title={product.title} description={metaDescription} />
      </Card>
    </div>
  );
};

export default ProductFrame;
