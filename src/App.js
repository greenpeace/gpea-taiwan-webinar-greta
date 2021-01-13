import { hot } from "react-hot-loader/root";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import "App.less";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'rsuite/lib/styles/index.less';
import "react-sliding-pane/dist/react-sliding-pane.css";
import "form.less";
import Main from "apps/pet/components/main";
import Panel from "apps/pet/components/panel";
import Spinner from "components/spinner"
import RegistrationForm from "./components/form/registrationForm";

let App = ({loading}) => {
  return (
    <div className="App">
      {loading && <Spinner/>}
      <Main />
      <div className="custom-form-wrap">
        <RegistrationForm/>
      </div>
      <Panel/>
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    loading: theme.lastAction === themeActions.SUBMIT_FORM
  };
};

App = connect(mapStateToProps)(App);

export default hot(App);