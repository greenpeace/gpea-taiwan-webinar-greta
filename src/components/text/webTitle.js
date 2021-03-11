import React, { useState, useEffect } from "react";

const WebTitle = ({ text, titleStyle }) => {
  return (
    <>
      <h3 style={titleStyle}>{text}</h3>
    </>
  );
};

export default WebTitle;
