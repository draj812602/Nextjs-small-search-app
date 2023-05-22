"use client"; // Error components must be Client components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="bg-warning mx-auto  py-1 px-4">
      <h2 className="my-4 fs-5 font-bold">Something went wrong!</h2>
      <button
        className="mb-4 p-4 bg-danger text-white rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <p className="fs-3">
        Or go back to{" "}
        <Link href="/" className="text-underline">
          Home 🏠
        </Link>
      </p>
    </main>
  );
}
