import { useToggle } from "../../hooks/useToggle";
import { useWindowSize } from "../../hooks/useWindowSize";

import "./ButtonIcon.scss";

export const ButtonIcon = () => {
  const { toggle, value } = useToggle(false);
  const { width } = useWindowSize();
  return (
    <>
      {width <= 375 ? (
        <svg
          onClick={toggle}
          className="bookmark"
          width="56"
          height="56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle
              fill={value ? "#147A73" : "#2F2F2F"}
              cx="28"
              cy="28"
              r="28"
            />
            <path
              fill={value ? "#FFFFFF " : "#B1B1B1"}
              d="M23 19v18l5-5.058L33 37V19z"
            />
          </g>
        </svg>
      ) : (
        <div
          className={`button-icon-container ${(value && "active") || ""}`}
          onClick={toggle}
        >
          <svg
            className="bookmark"
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle
                fill={value ? "#147A73" : "#2F2F2F"}
                cx="28"
                cy="28"
                r="28"
              />
              <path
                fill={value ? "#FFFFFF " : "#B1B1B1"}
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </svg>

          <span className={`button-icon-span ${(value && "active") || ""}`}>
            {value ? "Bookmarked" : "Bookmark"}
          </span>
        </div>
      )}
    </>
  );
};
