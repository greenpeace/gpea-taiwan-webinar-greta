export const mainShare = (shareMessage, fbURL, mainURL) => {
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u = fbURL;
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
        text: shareMessage,
        url: mainURL,
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

export const whatsAppShare = (shareMessage, whatsappURL) => {
  var w = `https://api.whatsapp.com/send?text=${shareMessage} ${whatsappURL}`;
  window.open(w);
};
