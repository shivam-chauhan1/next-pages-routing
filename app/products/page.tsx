import Link from "next/link";
import data from "@/app/data/data.json";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
};

export default function Products() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {data.products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 font-bold">{product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="text-blue-500 mt-4 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
