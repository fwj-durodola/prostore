import React from "react";
import ProductCard from "./product-card";
import { Product } from "../../../../types";

type PropType = {
  data: Product[];
  title?: string;
};

const ProductList = ({ data, title }: PropType) => {
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length <= 0 ? (
        <div>
          <p>No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((product: Product) => (
            <ProductCard key={product?.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
