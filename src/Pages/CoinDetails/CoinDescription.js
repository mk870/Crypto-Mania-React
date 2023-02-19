import HTMLReactParser from "html-react-parser";
import React from "react";
import { useSelector } from "react-redux";

import { colors } from "../../components/utils/ThemeColors";
import { CoinDescriptionStyles } from "./Styles/CoinDescriptionStyles";

const CoinDescription = ({ coindata }) => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <CoinDescriptionStyles colors={colors(theme)}>
      <h2>What is {coindata.name}</h2>
      <div className="description">{HTMLReactParser(coindata.description)}</div>
      <div className="links">
        <h3>{coindata.name} Links</h3>
        <div className="linklist">
          {coindata.links.map((link, index) => (
            <div className="row" key={index}>
              <span>{link.type}</span>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </CoinDescriptionStyles>
  );
};

export default CoinDescription;
