import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LinkCard from "../components/LinkCard";

const ProductDetailPage = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, []);

  return (
    <section className="bg-sky-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-60/40 w-full gap-4">
          <main>
            <img src={productDetail.image_url} className="rounded-md" />
          </main>

          <aside>
            <div className="bg-sky-500 p-6 rounded-md shadow-md">
              <h1 className="text-4xl	font-medium text-white">
                {productDetail.title}
              </h1>
            </div>

            <div className="bg-white mt-4 p-6 rounded-md shadow-md">
              <h1 className="text-3xl mb-4">Description</h1>
              <p>{productDetail.description}</p>
            </div>

            {links.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
