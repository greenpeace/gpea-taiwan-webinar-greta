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
            gCampaign: "",
            gBasket: "",
          });
        `}
      </script>
      {/* title */}
      <title>童你講故事」氣候與環境繪本線上共讀會 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="童你講故事」氣候與環境繪本線上共讀會 - Greenpeace 綠色和平 | 香港"
      />
      {/* description */}
      <meta
        name="description"
        content="故事導師Fa La La老師講述由綠色和平自家創作的氣候與環境繪本《無家可歸的我》，歡迎大家與家中小朋友一起聆聽大自然的故事，認識海冰融化、森林大火等環境問題。立即進入連結免費報名。"
      />
      <meta
        property="og:description"
        content="故事導師Fa La La老師講述由綠色和平自家創作的氣候與環境繪本《無家可歸的我》，歡迎大家與家中小朋友一起聆聽大自然的故事，認識海冰融化、森林大火等環境問題。立即進入連結免費報名。"
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