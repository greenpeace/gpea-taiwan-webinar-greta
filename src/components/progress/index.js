import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, target } = props;
  const progress = (completed / target) * 100;
  const containerStyles = {
    height: 24,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 4,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: "4px 12px",
    color: "white",
    fontSize: ".75rem",
    lineHeight: "24px",
    overflow: "visible",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  };

  const targetStyles = {
    color: "white",
    fontSize: ".75rem",
    margin: "4px 4px 8px 4px",
  };

  return (
    <div>
      <div style={targetStyles}>{`目標人數: ${target.toLocaleString()}`}</div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>
            {`${completed.toLocaleString()}`} 已聯署
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
