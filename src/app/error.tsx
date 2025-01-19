"use client";

import { Button } from "@/components/ui/button";

type PropsType = {
  error: Error;
  reset: () => void;
};

const ErrorBoundary = ({ error, reset }: PropsType) => {
  return (
    <div>
      <p>{error.message}</p>
      <Button onClick={() => reset()}>Retry again</Button>
    </div>
  );
};

export default ErrorBoundary;
