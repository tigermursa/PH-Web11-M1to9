import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ item, onAddToCart, onToggleFavorite }) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      {/* Image + Favorite Button */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(item.id)}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition"
        >
          <Heart
            size={20}
            className={item.isFavorite ? "text-red-500" : "text-gray-400"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">Brand: {item.brand}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">৳{item.price}</p>

        <div className="mt-2 text-sm">
          <span className="text-gray-500">Sizes:</span>{" "}
          <span className="text-gray-700">{item.sizes.join(", ")}</span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => onAddToCart(item)}
          className="mt-auto w-full py-2 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200"
        >
          <ShoppingCart size={20} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
