interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  colors: string[];
  hasShoppingBag?: boolean;
}

export default function ProductCard({
  image,
  category,
  title,
  price,
  colors,
  hasShoppingBag,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative mb-4 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 px-3 py-1 text-xs font-medium text-gray-600 rounded">
            {category}
          </span>
        </div>
        {hasShoppingBag && (
          <div className="absolute top-4 right-4">
            <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-amber-700 font-medium mb-4">{price}</p>

      {/* Size Options */}
      <div className="flex gap-2 mb-3">
        <button className="w-8 h-8 border border-gray-300 text-sm text-gray-800 hover:border-gray-900 transition-colors">
          L
        </button>
        <button className="w-8 h-8 border border-gray-900 bg-gray-900 text-white text-sm">
          M
        </button>
        <button className="w-8 h-8 border border-gray-300 text-sm text-gray-800 hover:border-gray-900 transition-colors">
          S
        </button>
        <button className="w-8 h-8 border border-gray-300 text-sm text-gray-800 hover:border-gray-900 transition-colors">
          XL
        </button>
        <button className="w-8 h-8 border border-gray-300 text-sm text-gray-800 hover:border-gray-900 transition-colors">
          XS
        </button>
      </div>

      {/* Color Options */}
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full border ${
              color === "black"
                ? "bg-black border-gray-300"
                : color === "white"
                ? "bg-white border-2 border-gray-900"
                : color === "green"
                ? "bg-green-600 border-gray-300"
                : color === "red"
                ? "bg-red-600 border-gray-300"
                : color === "gray"
                ? "bg-gray-600 border-gray-300"
                : color === "light-gray"
                ? "bg-gray-200 border-gray-300"
                : color === "dark-gray"
                ? "bg-gray-800 border-gray-300"
                : color === "amber"
                ? "bg-amber-100 border-gray-300"
                : "bg-gray-300 border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
