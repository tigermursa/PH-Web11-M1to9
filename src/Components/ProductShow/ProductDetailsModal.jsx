import { ShieldCloseIcon } from "lucide-react";

const ProductDetailsModal = ({ item, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition"
          >
            <ShieldCloseIcon
              size={18}
              className="text-gray-500 hover:text-gray-700"
            />
          </button>

          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover rounded-xl"
          />

          {/* Product Details */}
          <h3 className="text-2xl font-bold mt-4">{item.name}</h3>
          <p className="text-gray-600 mt-1">Brand: {item.brand}</p>
          <p className="text-xl font-semibold mt-2">৳{item.price}</p>
          {item.description && (
            <p className="mt-4 text-gray-700">{item.description}</p>
          )}
          <div className="mt-4 text-sm">
            <span className="font-medium">Available Sizes: </span>
            {item.sizes?.join(", ")}
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                // Implement add-to-cart logic here
                alert(`Added ${item.name} to cart!`);
                onClose();
              }}
              className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsModal;
