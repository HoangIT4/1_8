import React, { useEffect, useState } from "react";
import {getProducts} from '@/Apis/ProductAPI.js';
import "./ProductPage.scss";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data || []); // giả sử API trả về { products: [...] }
      })
      .catch((err) => {
        console.error("Lỗi tải sản phẩm:", err);
      });
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  };

  return (
    <div className="product-page">
      <h1>Danh sách sản phẩm</h1>
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h2>{p.name}</h2>
            <p className="category">{p.category}</p>
            <p className="price">{formatCurrency(p.price)}</p>
            <p className="stock">Số lượng: {p.stock}</p>
            <p className="desc">{p.description}</p>
            <p className="date">
              Ngày thêm: {new Date(p.createdAt).toLocaleDateString("vi-VN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
