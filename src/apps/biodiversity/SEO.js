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
        「與生態專家探索香港『野』」網上教室 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="「與生態專家探索香港『野』」網上教室 - Greenpeace 綠色和平 | 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="綠色和平邀請到著名生態研究學者馬昀祺博士 (Dr. Xoni Ma) 與本地生態攝影師馮漢城和您分享香港生物多樣性的現況，包括本地獨特物種巡禮、基建工程對生態的破壞與相關保育工作，以及製作港版「Discovery Channel」生態紀錄片的點滴，令您在一小時內認識「香港野」。"
      />
      <meta
        property="og:description"
        content="綠色和平邀請到著名生態研究學者馬昀祺博士 (Dr. Xoni Ma) 與本地生態攝影師馮漢城和您分享香港生物多樣性的現況，包括本地獨特物種巡禮、基建工程對生態的破壞與相關保育工作，以及製作港版「Discovery Channel」生態紀錄片的點滴，令您在一小時內認識「香港野」。"
      />
      {/* meta image */}
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/f378964b-artboard-1_2-bd-webinar-final-tinypng.jpg"
      />
    </Helmet>
  );
};

export default SEO;
