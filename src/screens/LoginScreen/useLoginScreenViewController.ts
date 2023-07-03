import { useState } from "react";

const useLoginScreenViewController = () => {
  const [isLoading, setIsLoading] = useState(true);

  return {
    isLoading,
    setIsLoading,
  };
};

export default useLoginScreenViewController;
