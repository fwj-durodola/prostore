"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">
        Oops! Page Not Found.
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Sorry, we couldn&apos;t find the page you were looking for. It might
        have been moved or deleted.
      </p>
      <Button variant="outline" onClick={() => router.push("/")}>
        Go back to the homepage
      </Button>
    </div>
  );
}
