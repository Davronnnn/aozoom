import { Button } from "antd";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useParams, Link } from "react-router-dom";
import { StyledContainer } from "../../../styles/Container.style";
import Axios from "../../../utils/axios";
import { StyledDetails } from "./landing.style";

function NewsDetail() {
  const [data, setData] = useState({});
  const { newsId } = useParams();

  const getNew = async () => {
    try {
      const res = await Axios.get(`/blog/${newsId}`);
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getNew();
  }, []);
  return (
    <StyledDetails>
      <StyledContainer>
        <div className="container">
          <div className="main">
            <Link to="/news">
              <Button type="primary" ghost size="large">
                Назад
              </Button>
            </Link>
            <div className="wrapper">
              <div className="news_inner">
                <h1 className="title">{data?.title}</h1>
                <p className="date">
                  {moment(data?.published_date).format("DD.MM.YYYY")}
                </p>
                <h4 className="description">{data?.short_description}</h4>
                <img
                  className="main_img"
                  src={data?.cover_image?.image}
                  alt="news"
                />
                {data?.components?.map((item, index) => (
                  <div key={index} className="extra_news">
                    <div dangerouslySetInnerHTML={{__html: JSON.parse(item?.text)}}/>
                    {
                      item.img ? <img className="main_img" src={item?.image} alt="news" /> : null
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </StyledContainer>
    </StyledDetails>
  );
}

export default NewsDetail;
