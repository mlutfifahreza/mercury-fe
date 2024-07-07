import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LinkCard from "../components/LinkCard";
import { Image } from "antd";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const apiUrl = `http://127.0.0.1:8080/products/${id}/detail`;
      try {
        const res = await fetch(apiUrl);
        const response = await res.json();
        setProductDetail(response.data);
        if (response.data.link_details != null) {
          setLinks(response.data.link_details);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetail();
  }, []);

  let descriptionWithLineBreak = productDetail.description
    ? productDetail.description.split("\n").map((text, index) => (
        <React.Fragment key={index}>
          {text}
          <br />
        </React.Fragment>
      ))
    : "";

  return (
    <div
      className="grid gap-8 grid-auto-rows max-w-5xl 
                  mx-4 md:mx-auto
                  grid-cols-1 md:grid-cols-2"
    >
      <div className="row-span-1 ">
        <div className="flex justify-center">
          <Image src={productDetail.image_url} />
        </div>
      </div>

      <div className="row-span-1">
        <h1 className="text-4xl	font-medium mb-4">{productDetail.title}</h1>
        <p>{descriptionWithLineBreak}</p>

        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
