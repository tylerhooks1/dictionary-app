import React, { useContext, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Switch from "react-switch";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FontContext } from "../../contexts/FontContext";
import logo from "../../assets/logo.svg";
import MoonIcon from "./MoonIcon";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [font, setFont] = useContext(FontContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const onChange = (event) => {
    const value = event.target.value;
    setFont(value);
  };

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
            <select onChange={onChange}>
              <option value={"sans-serif"}>Sans Serif</option>
              <option value={"serif"}>Serif</option>
              <option value={"mono"}>Mono</option>
            </select>
          </div>
          <span className="dictionary_header-themes__divider" />
          <Switch
            className="dictionary__header-themes__switch"
            offColor="#757575"
            onColor="#a445ed"
            height={20}
            width={40}
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={14}
            onChange={() =>
              setTheme((curr) => (curr === "light" ? "dark" : "light"))
            }
            checked={theme === "light" ? false : true}
          />
          <div className="dictionary__header-themes__moonIcon">
            {theme === "dark" ? (
              <MoonIcon stroke="#a445ed" />
            ) : (
              <MoonIcon stroke="#757575" />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
