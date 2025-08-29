"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorComponent = ({ error, reset }) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh(); // Refresh the route
      reset(); // Reset the error boundary
    });
  };

  return (
    <div>
      <h1>Error in review: {error.message}</h1>
      <button onClick={reload}>Try Again</button> {/* Correct: pass the function, don't call it */}
    </div>
  );
};

export default ErrorComponent;
