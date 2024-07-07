import { useState, useEffect } from "react";
import { Pagination } from "antd";
import ProductFrame from "../components/ProductFrame";

const ProductListPage = () => {
  const [productList, setProductList] = useState([]);
  const [productTotal, setProductTotal] = useState(100);
  const [loading, setLoading] = useState(true);

  const [pageNumber, setPageNumber] = useState(1);
  let pageSizeList = [10, 20, 30, 60];
  const [pageSize, setPageSize] = useState(pageSizeList[0]);

  const fetchProductList = async () => {
    const queryParam = `?page_number=${pageNumber}&page_size=${pageSize}`;
    const apiUrl = `http://127.0.0.1:8080/products${queryParam}`;
    try {
      const res = await fetch(apiUrl);
      const response = await res.json();
      setProductList(response.data.products);
      setProductTotal(response.data.total);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, [pageNumber, pageSize]);

  const onPaginationChange = (page, pageSize) => {
    setPageNumber(page);
    setPageSize(pageSize);
    fetchProductList();
  };

  return (
    <main className="mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productList.map((product) => (
          <ProductFrame key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        showSizeChanger
        align="center"
        defaultCurrent={pageNumber}
        total={productTotal}
        onChange={onPaginationChange}
        pageSize={pageSize}
        pageSizeOptions={pageSizeList}
        className="my-8"
      />
    </main>
  );
};

export default ProductListPage;
