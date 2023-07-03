import Skeletons from "../../components/Skeleton";
import "./styles.css";

const Loading = () => {
  return (
    <div className="screen center">
      <div className="loginContainer center">
        <div className="imageContainer">
          <Skeletons />
        </div>
        <div className="emailContainer center">
          <label>
            <Skeletons width={51} />
          </label>
          <div className="field email">
            <Skeletons />
          </div>
          <label>
            <Skeletons width={190} />
          </label>
        </div>
        <div className="passwordContainer center">
          <label>
            <Skeletons width={51} />
          </label>
          <div className="field">
            <Skeletons height={56} />
          </div>
        </div>
        <div className="buttonContainer center">
          <div className="field" style={{ marginTop: 0 }}>
            <Skeletons />
          </div>
          <label>
            <Skeletons width={126} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Loading;
