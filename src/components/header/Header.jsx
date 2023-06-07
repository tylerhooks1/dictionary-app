import React from "react";
import "./header.css";
import { Switch } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import moon from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <Container>
      <div className="dictionary__header">
        <img
          src={logo}
          alt="logo"
          height={32}
          width={28}
          className="dictionary__header-logo"
        />
        <div className="dictionary__header-themes">
          <div className="dictionary__header-themes__select">
            <select>
              <option value={1}>Sans Serif</option>
              <option value={2}>Sans</option>
              <option value={3}>Mono</option>
            </select>
          </div>
          <span className="dictionary_header-themes__divider" />
          <Switch size="md" alignSelf="center" marginRight={1.5} />
          <img src={moon} alt="moon" height={20} width={20} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
