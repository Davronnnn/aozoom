import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "../../../styles/Container.style";
import Axios from "../../../utils/axios";
import { StyledNewsPage } from "./landing.style";
import PageHeader from "../../../components/PageHeader/PageHeader";
import NewsCard from "./NewsCard";
import News from "../../../components/News/News";

function LandingNews() {
  const [news, setNews] = useState([]);

  // const getById = (id) => {
  //   navigate(`/news/${id}`);
  // };

  const getNews = async () => {
    try {
      const res = await Axios.get("/blog/?limit=10000");
      setNews(res?.data?.results);
    } catch (error) {
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <StyledNewsPage>
      <StyledContainer>
        <div className="container">
          <News />
          <div className="news_wrapper">
            {news.map((item, index) => (
              <Link key={index} to={`/news/${item.id}`}>
                <NewsCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </StyledContainer>
    </StyledNewsPage>
  );
}

export default LandingNews;
