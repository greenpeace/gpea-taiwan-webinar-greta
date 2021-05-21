import { Helmet } from "react-helmet-async";
import React from "react";

const SEO = () => {
  return (
    <Helmet>
      <html lang="zh" />
      {/* campaign dataLayer */}
      <script>
        {`
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: "health",
            gBasket: "biodiversity",
          });
        `}
      </script>
      {/* title */}
      <title>
        精選香港動物奇妙時刻：桌布/視像會議寫真大放送！立即免費下載！| 香港
      </title>
      <meta
        property="og:title"
        content="精選香港動物奇妙時刻：桌布/視像會議寫真大放送！立即免費下載！| 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="香港這個彈丸之地，坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性。數以千平方公里的海岸線、山脈及郊野公園，令香港成為多種野生生物的居所。這些生活在您身邊的鄰居，跟您一樣是香港的持份者，自認了解香港的您，真的認識牠們嗎？"
      />
      <meta
        property="og:description"
        content="香港這個彈丸之地，坐擁山林、河溪、濕地、草地等多種生態環境，造就出香港的生物多樣性。數以千平方公里的海岸線、山脈及郊野公園，令香港成為多種野生生物的居所。這些生活在您身邊的鄰居，跟您一樣是香港的持份者，自認了解香港的您，真的認識牠們嗎？"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/2963bd89-73_preview.jpg"
      />
    </Helmet>
  );
};

export default SEO;
