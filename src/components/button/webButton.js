import React, { useState, useEffect } from 'react';

const WebButton = ({text}) => {
  const [size, setSize] = useState('small');

  return(
  <>
    {text}
  </>
  )
}

export default WebButton