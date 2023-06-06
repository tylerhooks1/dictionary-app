import React from "react";
import "./header.css";
import { Switch } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import arrow from "../../assets/icon-arrow-down.svg";
import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <Container>
      <div className="dictionary__header">
        <img src={logo} alt="logo" />
        <div className="dictionary__header-themes">
          <select className="dictionary__header-themes__select">
            <option value={1}>Sans Serif</option>
            <option value={2}>Sans</option>
            <option value={3}>Mono</option>
          </select>
          <div className="dictionary__header-themes__arrow">
            <img src={arrow} alt="arrow" />
          </div>
          <span className="dictionary_header-themes_divider" />
          <Switch size="md" alignSelf="center" marginRight={1.5} />
          <img src={moon} alt="moon" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
