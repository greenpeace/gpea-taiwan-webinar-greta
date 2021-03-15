import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react"

import Nav from './components/header/nav'
import ContentForm from './components/form/contentForm'
import Banner from './components/hero/banner'
import Content from './components/feature/content'
import Tab from './components/tab'
import Footer from './components/footer'

const Index = ({ initState, fakeSubmit, submitted, petition }) => {
  return (
    <ChakraProvider>
      <Nav/>
      <Banner/>
      <Tab/>
      <Footer/>
      {/* <ContentForm/> */}
    </ChakraProvider>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
