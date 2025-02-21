"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter === 0) router.push("/");
    const timer = setTimeout(() => setCounter((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [counter, router]);

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        Redirecting to homepage in {counter} seconds...
      </p>
    </div>
  );
}
