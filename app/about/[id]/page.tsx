import { notFound } from "next/navigation";
import data from "@/app/data/data.json";

export default function EmployeeDetail({ params }: { params: { id: string } }) {
  const employee = data.employees.find((e) => e.id === params.id);
  if (!employee) return notFound();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{employee.name}</h1>
      <p className="mt-4 text-lg">Role: {employee.role}</p>
    </div>
  );
}
