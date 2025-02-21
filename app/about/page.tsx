import data from "@/app/data/data.json";

export default function About() {
  const company = data.company;
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">About {company.name}</h1>
      <p className="mt-4 text-lg">{company.description}</p>
    </div>
  );
}
