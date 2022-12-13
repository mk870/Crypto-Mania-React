import React, { useEffect } from "react";
import { colors } from "../utils/ThemeColors";
import HTMLReactParser from "html-react-parser";
import newspic from "../../images/news.png";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiNewsStyles } from "./AiNewsStyles";

const AiNews = ({
  aiNews,
  voicePageNavigation,
  setVoicePageNavigation,
  activeArticle,
}) => {
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();

  const source = (data) => {
    if (!data) {
      return "Null";
    } else {
      return HTMLReactParser(data);
    }
  };
  const author = (data) => {
    if (!data) {
      return "Unknown Author";
    } else {
      const newdata = HTMLReactParser(data.split("\n")[0]);
      if (newdata.includes("https:")) {
        return new URL(newdata).hostname.replace("www.", "");
      } else {
        return newdata;
      }
    }
  };
  const titlecleaner = (data) => {
    return data.replace(/[^a-zA-Z0-9]/g, " ");
  };

  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  return (
    <AiNewsStyles colors={colors(theme)}>
      <div className="header">
        {`article num ${activeArticle}`}
        <h2>Latest Crypto currency news</h2>
        <span className="moreInfo">
          Click News Article for more information
        </span>
      </div>
      {aiNews && (
        <div className="grid">
          {aiNews.map((story, index) => (
            <div
              className={activeArticle === index ? "highlight" : "article"}
              key={index}
            >
              <a href={story.url} target="_blank" rel="noreferrer">
                <div className="title">
                  <h4>{titlecleaner(story.title)}</h4>
                  <img src={story.urlToImage || newspic} alt="newsImage" />
                </div>
                <p>
                  {source(story.description) > 100
                    ? `${source(story.description).substring(0, 100)}...`
                    : source(story.description)}
                </p>
                <div className="provider">
                  <div className="sources">
                    <span>{author(story.author)}</span>
                    <span>{source(story.source.name)}</span>
                  </div>
                  <span>
                    {moment(story.publishedAt).startOf("ss").fromNow()}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </AiNewsStyles>
  );
};

export default AiNews;
