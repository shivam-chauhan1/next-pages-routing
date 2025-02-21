import { notFound } from "next/navigation";
import data from "@/app/data/data.json";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = data.products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-xl font-semibold">{product.price}</p>
    </div>
  );
}
