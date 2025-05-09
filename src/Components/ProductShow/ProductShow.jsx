import { use, useState } from "react";
import ProductCard from "./ProductCard";

const dataPromise = fetch("/public/bd_products.json").then((res) => res.json());

const ProductShow = () => {
  const products = use(dataPromise);
  const [showAll, setShowAll] = useState(false);
  const initialData = products.slice(0, 8);
  return (
    <div>
      {showAll ? (
        <div className="grid grid-cols-4 gap-5 container mx-auto mt-10 mb-5">
          {products.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 container mx-auto mt-10 mb-5">
          {initialData.map((item, index) => (
            <div key={index}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowAll(!showAll)}
        className=" border p-2 rounded-xl font-bold text-sm flex mx-auto  mt-10 mb-10 cursor-pointer hover:text-gray-600"
      >
        Show All
      </button>
    </div>
  );
};

export default ProductShow;
