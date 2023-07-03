import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeletons = ({ ...rest }) => {
  return <Skeleton style={{ fontSize: "20px" }} {...rest} />;
};

export default Skeletons;
