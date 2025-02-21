import { notFound } from "next/navigation";
import data from "@/app/data/data.json";

type ProductDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetail({ params }: ProductDetailProps) {
  const id = (await params).id;
  const product = data.products.find((p) => p.id === id);
  if (!product) return notFound();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 text-xl font-semibold">{product.price}</p>
    </div>
  );
}
