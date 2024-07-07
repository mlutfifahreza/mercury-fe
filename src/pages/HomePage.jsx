import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Title } = Typography;

import ProductFrame from "../components/ProductFrame";

const HomePage = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductList = async () => {
    const queryParam = `?page_number=1&page_size=6&order_by_field=id&order_by_value=DESC`;
    const apiUrl = `http://127.0.0.1:8080/products${queryParam}`;
    try {
      const res = await fetch(apiUrl);
      const response = await res.json();
      setProductList(response.data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <div className="mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="flex justify-center align-middle mx-auto mb-2">
        <Title>Latest products ⚡️</Title>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productList.map((product) => (
          <ProductFrame key={product.id} product={product} />
        ))}
      </div>

      <div
        className="flex justify-center align-middle mx-auto my-8"
        onClick={() => navigate(`/products`)}
      >
        <Button
          type="primary"
          icon={<RightCircleOutlined />}
          iconPosition="end"
        >
          Show All Products
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
