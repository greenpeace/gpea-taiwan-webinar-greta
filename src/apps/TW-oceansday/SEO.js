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
            gCampaign: "oceans",
            gBasket: "oceansday",
          });
        `}
      </script>
      {/* title */}
      <title>
        立即報名：彩虹勇士號的海上任務：向世界說出海洋破壞的真相 - Greenpeace 綠色和平 | 臺灣
      </title>
      <meta
        property="og:title"
        content="立即報名：彩虹勇士號的海上任務：向世界說出海洋破壞的真相 - Greenpeace 綠色和平 | 臺灣"
      />
      {/* description */}
      <meta
        name="description"
        content="綠色和平全球海洋數位專案主任黃毓琪Kelly將向大家介紹「彩虹勇士號」船艦，分享保護海洋的工作，以及阻止深海採礦測試的行動，與行動者乘快艇靠近企業商船抗議的時刻。"
      />
      <meta
        property="og:description"
        content="綠色和平全球海洋數位專案主任黃毓琪Kelly將向大家介紹「彩虹勇士號」船艦，分享保護海洋的工作，以及阻止深海採礦測試的行動，與行動者乘快艇靠近企業商船抗議的時刻。"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://change.greenpeace.org.tw/2021/webinar/oceansday/static/media/oceansday-share.jpg"
      />
    </Helmet>
  );
};

export default SEO;
