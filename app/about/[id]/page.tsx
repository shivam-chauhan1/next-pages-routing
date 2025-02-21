import { notFound } from "next/navigation";
import data from "@/app/data/data.json";

type EmployeeDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EmployeeDetail({ params }: EmployeeDetailProps) {
  const id = (await params).id;
  const employee = data.employees.find((e) => e.id === id);
  if (!employee) return notFound();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{employee.name}</h1>
      <p className="mt-4 text-lg">Role: {employee.role}</p>
    </div>
  );
}
