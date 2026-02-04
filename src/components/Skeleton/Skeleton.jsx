import "./Skeleton.css";
import { assets } from "../../assets/assets";

const Skeleton = () => {
  return (
    <div className="gemini-skeleton">
      {/* Gemini sparkle icon */}
      <img
        src={assets.gemini_icon}
        alt="gemini"
        className="skeleton-icon"
      />

      {/* Animated lines */}
      <div className="skeleton-lines">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
};

export default Skeleton;
