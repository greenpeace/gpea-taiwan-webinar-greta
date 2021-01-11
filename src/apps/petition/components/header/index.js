import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegistrationScreen from "apps/petition/components/main/registrationScreen"

const Index = ({theme, toggleTheme}) =>{
  useEffect(() => {
    toggleTheme(false)
  }, []);

  return (
    <header className="main-header">
        <a href="#" className="logo-holder"><img src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png" alt=""/></a>
        {/* <div className="header-contacts">
        <ul>
            <li>
              <div className="dummy-input">
              號召更多朋友參與，達到最新目標：4,000,000 聯署。
              </div>
            </li>
            <li>
              <div className="start-btn" onClick={()=>toggleTheme(!theme.displayForm)}>
                <span>
                  {" "}
                  其他內容
                  {" "}<FontAwesomeIcon icon={['fas', 'check']} />
                </span>
              </div>
            </li>
          </ul>
        </div> */}
        {/* <div className="header-contacts">
          {!theme.displayForm ? <ul onClick={()=>toggleTheme(!theme.displayForm)}>
              <li>
                <div className="dummy-input">
                  <input placeholder={'電子郵件'}></input>
                </div>
              </li>
              <li>
                <div className="start-btn">
                  <span>
                    {" "}
                    立即聯署
                    {" "}<FontAwesomeIcon icon={['fas', 'check']} />
                  </span>
                </div>
              </li>
          </ul>
          :
          <ul>
            <li>
              <div className="dummy-input">
              號召更多朋友參與，達到最新目標：4,000,000 聯署。
              </div>
            </li>
            <li>
              <div className="start-btn" onClick={()=>toggleTheme(!theme.displayForm)}>
                <span>
                  {" "}
                  請填寫簡單表格
                  {" "}<FontAwesomeIcon icon={['fas', 'check']} />
                </span>
              </div>
            </li>
          </ul>
          }
        </div> */}
      </header>
  );
}

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
