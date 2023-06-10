import React from "react";
import play from "../../assets/icon-play.svg";
import "./content.css";

const Content = () => {
  return (
    <div className="dictionary__content">
      <div className="dictionary__content__header">
        <div className="dictionary__content__header-title">
          <h1>Word</h1>
          <p>Phonetic</p>
        </div>
        <button className="dictionary__content__audio">
          <img src={play} alt="play" height={48} width={48} />
        </button>
      </div>
      <div className="dictionary__content-noun">
        <div className="dictionary__content-heading">
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
      <div className="dictionary__content-verb">
        <div className="dictionary__content-heading">
          <p>Verb</p>
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
      </div>
      <div className="dictionary__content-source">
        <p>Source</p>
      </div>
    </div>
  );
};

export default Content;
