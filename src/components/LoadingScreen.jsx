import './Style.css';
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";


export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className={`loading-screen ${started ? "hidden" : "visible"}`}
    >
      <div className="text-container">
        <div
          className="progress-text"
          style={{
            width: `${progress}%`,
          }}
        >
          Axel Gumiit
        </div>
        <div className="background-text">Axel Gumiit</div>

        <img
          className="logo"
          src="/images/logo.jpg"
          alt="Logo"
        />

      </div>
    </div>
  );
};
