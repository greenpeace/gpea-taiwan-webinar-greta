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
        立即報名：直擊「彩虹勇士號」工作：3個月的海上任務 - Greenpeace 綠色和平
        | 香港
      </title>
      <meta
        property="og:title"
        content="立即報名：直擊「彩虹勇士號」工作：3個月的海上任務 - Greenpeace 綠色和平 | 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="綠色和平全球守護海洋專員黃毓琪Kelly將帶領大家線上遊覽「彩虹勇士號」船艦，了解機構保護海洋的工作，Kelly亦會分享阻止深海採礦測試的行動，與大家直擊團隊乘快艇靠近企業大輪抗議的時刻。"
      />
      <meta
        property="og:description"
        content="綠色和平全球守護海洋專員黃毓琪Kelly將帶領大家線上遊覽「彩虹勇士號」船艦，了解機構保護海洋的工作，Kelly亦會分享阻止深海採礦測試的行動，與大家直擊團隊乘快艇靠近企業大輪抗議的時刻。"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/06/3fd19734-hero_v2_preview.jpg"
      />
    </Helmet>
  );
};

export default SEO;
