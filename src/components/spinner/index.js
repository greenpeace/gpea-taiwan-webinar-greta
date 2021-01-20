import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  border-color: #65CC02;
`;

const clipWrap = {
  position: 'absolute', 
  left: 0, 
  right: 0, 
  marginLeft: 'auto', 
  marginRight: 'auto',
  top: '50%',
  color: '#FFF'
}

const wrap = {
  position: 'absolute',
  top:0,
  bottom:0,
  left:0,
  right:0,
  background: 'rgba(26, 28, 38, .9)',
  zIndex: 99999999,
}

const Spinner = () => {
  return(
    <div className="sweet-loading" style={wrap}>
    <div className="clip-wrap" style={clipWrap}>
      <ClipLoader
        css={override}
        size={50}
        color={"#123abc"}
        loading={true}
      />
      <br/>
      處理中...
    </div>
  </div>
  )
}

export default Spinner;