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
            gBasket: "fukushima",
          });
        `}
      </script>
      {/* title */}
      <title>福島十年 力阻核廢水排放 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="福島十年 力阻核廢水排放 - Greenpeace 綠色和平 | 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="福島第一核電廠事故已經發生十年。日本政府欲將125萬噸（仍在不斷增加）對人體及海洋有害的核廢水，排放到太平洋。請即聯署阻止核廢水污染大海，一起守護海洋生態。"
      />
      <meta
        property="og:description"
        content="福島第一核電廠事故已經發生十年。日本政府欲將125萬噸（仍在不斷增加）對人體及海洋有害的核廢水，排放到太平洋。請即聯署阻止核廢水污染大海，一起守護海洋生態。"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/02/e1abe0f4-20210225_fukushima10th_petition_thumbnial-02.jpg"
      />
    </Helmet>
  );
};

export default SEO;
