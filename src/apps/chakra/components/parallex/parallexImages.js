import * as React from "react";
import { useState, useRef, useLayoutEffect } from "react";
import { Box, Text} from "@chakra-ui/react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./parallexImages.css";

const ParallaxImage = ({ sub, content, src, ...style }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 0.5], [0, -0.5], {
    clamp: false
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" style={{ ...style, y }}>
      {sub && <img src={sub} /> }
      {/* {content && <Box alignItems="center" textAlign="center" fontWeight="normal" color="#fff" p="7">
        <Text fontSize="3xl">
          {content}
        </Text>
      </Box>} */}
      </motion.div>
      {/* <img src={src} alt="" />

      {content &&<Stack spacing={1} pt="6">
        <Text color={'white.600'} fontSize={'l'}>
          我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢，全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，生態價值絕不應被刻意低估。
        </Text>
      </Stack>} */}

    </div>
  );
};

export default ParallaxImage
