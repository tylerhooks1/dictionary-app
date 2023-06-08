import React from "react";
import { Container } from "@chakra-ui/react";
import play from "../../assets/icon-play.svg";
import "./content.css";

const Content = () => {
  return (
    <Container>
      <div className="dictionary__content">
        <div className="dictionary__content__header">
          <div className="dictionary__content__header-title">
            <h1>Word</h1>
            <p>Phonetic</p>
          </div>
          <button className="dictionary__content__audio">Audio</button>
        </div>
        <div className="dictionary__content-noun">
          <div className="dictionary__content-heading-noun">
            <p>Noun</p>
            <span />
          </div>
          <p>Meaning</p>
          <ol className="dictionary__content__list-noun">
            <li>something</li>
          </ol>
          {/**
           * api.map(()=>{
           *  <ol>
           * <li>something</li>
           * </ol>
           * })
           */}
          <p>Synomyms</p>
        </div>
      </div>
    </Container>
  );
};

export default Content;
