import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {
  return (
    <>
      {/* <aside className="left-header">
          <span className="lh_dec color-bg"></span>
          <div className="left-header_social">
              <ul >
                  <li><a href="https://www.facebook.com/greenpeacehk/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook-square']} size="lg"/>
                  </a></li>
              </ul>
          </div>
      </aside> */}
      {/* MOBILE */}
      <div className="share-btn showshare color-bg">
        <span>
          分享{" "}
          <FontAwesomeIcon icon={["fas", "fa-share"]} size="lg" />
        </span>
      </div>
      {/* DESKTOP */}
      <div className="hc_dec_color">
        <div className="page-subtitle page-subtitle-custom share-btn-desktop">
          <span>
            分享{" "}
            <FontAwesomeIcon
              icon={["fas", "fa-share"]}
              size="lg"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
