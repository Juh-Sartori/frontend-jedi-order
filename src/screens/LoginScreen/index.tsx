import "./styles.css";
import Loading from "./loading";
import useLoginScreenViewController from "./useLoginScreenViewController";
import { useEffect } from "react";

const LoginScreen = () => {
  const { isLoading, setIsLoading } = useLoginScreenViewController();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [setIsLoading]);
  return <>{isLoading && <Loading />}</>;
};

export default LoginScreen;
