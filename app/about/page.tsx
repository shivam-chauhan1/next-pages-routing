import Link from "next/link";
import data from "@/app/data/data.json";

type Employee = {
  id: string;
  name: string;
  role: string;
};

export default function About() {
  const company = data.company;
  const employees = data.employees;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">About {company.name}</h1>
      <p className="mt-4 text-lg">{company.description}</p>

      <h2 className="text-3xl font-bold mt-8">Our Employees</h2>
      <ul className="mt-4 space-y-2">
        {employees.map((employee: Employee) => (
          <li key={employee.id}>
            <Link href={`/about/${employee.id}`} className="text-blue-500">
              {employee.name} - {employee.role}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
