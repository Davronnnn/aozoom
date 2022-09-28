import React, { useState, useEffect } from "react";
import { Button, Col, Row, Pagination } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import EditIcon from "../../../../assets/img/edit-alt.svg";
import { StyledNews } from "./News.style";
import Axios from "../../../../utils/axios";

function News() {
  const [news, setNews] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(10);

  let adminInfo = JSON.parse(localStorage.getItem("user_info"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  useEffect(() => {
    getNews();
  }, [offset, limit]);

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
  };
  const getNews = async () => {
    try {
      const res = await Axios.get(`/blog/?limit=${limit}&offset=${offset}`, {
        headers: header,
      });
      console.log(res);
      setNews(res?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  const getNewsCount = async () => {
    try {
      const res = await Axios.get(`/blog/`, { headers: header });
      console.log(res);
      setDataCount(res?.data?.count);
    } catch (error) {
    }
  };

  const deleteNew = async (id) => {
    let filtereData = news.filter((item) => item.id !== id);
    try {
      const res = await Axios.delete(`/blog/${id}`, { headers: header });
      setNews(filtereData);
    } catch (error) {}
  };
  useEffect(() => {
    getNews();
    getNewsCount();
  }, []);
  return (
    <StyledNews>
      <header>
        <h1>Новости</h1>
        <Link to="/add-news">
          <Button type="primary" size="large">
            <AiOutlinePlus color="white" />
            Добавить новость
          </Button>
        </Link>
      </header>
      <div className="main">
        {news.length ? (
          news.map((item, index) => (
            <div className="news" key={index}>
              <div>
                <img
                  className="news_img"
                  src={item?.cover_image?.image}
                  alt="news"
                />
              </div>
              <div>
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.short_description}</p>
              </div>
              <div className="news_handle">
                <p className="news_date">
                  {moment(item?.published_date).format("DD.MM.YYYY")}
                </p>
                {/* <FiEdit color="#364a7e" size="20" /> */}
                <AiOutlineDelete
                  style={{ cursor: "pointer" }}
                  color="red"
                  size="20"
                  onClick={() => deleteNew(item.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="no_data">
            <h2>No data</h2>
          </div>
        )}
        <div className="pagination_block">
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            defaultPageSize={10} //default size of page
            onChange={(value) => setOffset((value - 1) * 10)}
            total={dataCount} //total number of card data available
          />
        </div>
      </div>
    </StyledNews>
  );
}

export default News;
