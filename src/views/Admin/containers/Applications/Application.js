import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Row, Col, Pagination} from "antd";
import moment from "moment";
import { StyledApplication } from "./Application.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";
import axios from "axios";

function Application() {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [questionModal, setQuestionModal] = useState(false);
  const [applicationModal, setApplicationModal] = useState(false);
  const [questionData, setQuestionData] = useState({});
  const [applicationData, setApplicationData] = useState({});
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(10);

  let adminInfo = JSON.parse(localStorage.getItem("user_info"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };


  
  useEffect(() => {
    getQuestions();
  }, [offset, limit]);
  const getQuestions = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(`/adminside/requests/?limit=${limit}&offset=${offset}`, {
        headers: header,
      });
        setData(res?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getQuestionsCount =  async () => {
    setLoading(true);
    try {
      const res = await Axios.get(`/adminside/requests/`, {
        headers: header,
      });
     setDataCount(res?.data?.count)
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize)
  };

  const columns = [
    {
      render: (record) => (
        <>{record?.type == "question" ? "Вопрос" : "Заявка на партнертсво"}</>
      ),
    },
    {
      render: (record) => (
        <>
          <h5
            style={{ cursor: "pointer" }}
            onClick={() => getRequestById(record?.id)}
          >
            открыть
          </h5>
        </>
      ),
    },
    {
      render: (record) => (
        <>
          {record?.reviewed ? (
            <h5>Просмотрено</h5>
          ) : (
            <h5 style={{ color: "green" }}>Не рассматривается</h5>
          )}
        </>
      ),
    },
  ];

  const handleReviewd = async (id) => {
    try {
      const res = await Axios.patch(
        `/adminside/request/${id}`,
        { id, reviewed: true },
        { headers: header }
      );
      getQuestions();
    } catch (error) {}
  };
  const getRequestById = async (id) => {
    try {
      const res = await Axios.get(`/adminside/request/${id}`, {
        headers: header,
      });
      if (res?.data?.type == "question") {
        setQuestionData(res?.data);
        handleQuestionModal();
        handleReviewd(id);
      } else {
        setApplicationData(res?.data);
        handleApplicationModal();
        handleReviewd(id);
      }
    } catch (error) {
    }
  };

  const handleQuestionModal = () => {
    setQuestionModal((prev) => !prev);
  };
  const handleApplicationModal = () => {
    setApplicationModal((prev) => !prev);
  };

  // getQuestions();
  useEffect(() => {
    getQuestions();
    getQuestionsCount();
  }, []);

  return (
    <StyledApplication>
      <div className="wrapper">
        <header>
          <h1>Заявки и вопросы</h1>
        </header>
        <Table
          thead={false}
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={false}
        />
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
      <Modal
        visible={questionModal}
        onCancel={handleQuestionModal}
        footer={null}
      >
        <>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Ф.И.О.</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{questionData?.name}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Номер телефона</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{questionData?.phone}</h5>
            </Col>
          </Row>
          <div
            className="question_block"
            style={{
              background: "white",
              border: "1px solid black",
              "border-radius": "8px",
              padding: "20px",
              "text-align": "center",
            }}
          >
            <h5>{questionData?.text}</h5>
          </div>
          <div className="modal_footer">
            <Row
              className="modal_row"
              style={{ margin: "15px 0px" }}
              gutter={[24, 0]}
            >
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <Button type="primary" onClick={handleQuestionModal}>
                  Закрыть
                </Button>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <h5>{moment(questionData?.created_at).format("DD.MM.YYYY")}</h5>
              </Col>
            </Row>
          </div>
        </>
      </Modal>
      <Modal
        visible={applicationModal}
        onCancel={handleApplicationModal}
        footer={null}
      >
        <>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Ф.И.О.</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.name}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Номер телефона</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.phone}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>ИНН</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.inn}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Наименование организации</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.company_name}</h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Дата сделки</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>
                {moment(applicationData?.created_at).format("DD.MM.YYYY")}
              </h5>
            </Col>
          </Row>
          <Row
            className="modal_row"
            style={{ margin: "15px 0px" }}
            gutter={[24, 0]}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>Номер сделки</h5>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <h5>{applicationData?.dealNum}</h5>
            </Col>
          </Row>
        </>
        <Button type="primary" onClick={handleApplicationModal}>
          Закрыть
        </Button>
      </Modal>
    </StyledApplication>
  );
}

export default Application;
