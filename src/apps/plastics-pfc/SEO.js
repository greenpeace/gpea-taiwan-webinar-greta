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
            gCampaign: "plastics",
            gBasket: "plastics-pfc",
          });
        `}
      </script>
      {/* title */}
      <title>
        立即報名：「綠色社區點做起？達人同你渾身解塑」網上共學教室 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即報名：「綠色社區點做起？達人同你渾身解塑」網上共學教室 - Greenpeace 綠色和平 | 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="綠色和平邀請到兩位積極於社區中尋求改變的「社區達人」來分享：大埔街坊暨社區營造行動者連桷璋，以及「日常豊作」裸買店店主Ann。談談過去在營造社區過程中的的社區實驗，必定有成功有失敗，一起探討如何在社區推動議題，如何見招拆招！而要講社區走塑，嘉賓又有何想法？綠色和平想同你一齊設計社區走塑計劃，即刻參加「全城走塑社區小隊」，一齊學一齊試，實現理想走塑社區！"
      />
      <meta
        property="og:description"
        content="綠色和平邀請到兩位積極於社區中尋求改變的「社區達人」來分享：大埔街坊暨社區營造行動者連桷璋，以及「日常豊作」裸買店店主Ann。談談過去在營造社區過程中的的社區實驗，必定有成功有失敗，一起探討如何在社區推動議題，如何見招拆招！而要講社區走塑，嘉賓又有何想法？綠色和平想同你一齊設計社區走塑計劃，即刻參加「全城走塑社區小隊」，一齊學一齊試，實現理想走塑社區！"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/c6ed7dbc-pfc-webinar-banner-2-preview.jpg"
      />
    </Helmet>
  );
};

export default SEO;
