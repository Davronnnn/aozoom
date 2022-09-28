import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Button,
  Checkbox,
  Modal,
  Table,
  Space,
  Spin,
  Row,
  Col,
  Pagination,
} from "antd";
import { StyledOrders } from "./Orders.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";
import useDebounce from "../../../../customhooks/useDebounce";

function Orders() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 500);
  const [filteredResults, setFilteredResults] = useState([]);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visiblePartner, setVisiblePartner] = useState(false);
  const [modalData, setModalData] = useState({});
  const [partnerData, setPartnerData] = useState({});
  const [reqLoading, setReqLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(10);
  let adminInfo = JSON.parse(localStorage.getItem("user_info"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  useEffect(() => {
    getOrders();
  }, [offset, limit]);

  const handleShow = () => {
    setVisible((prev) => !prev);
  };
  const handleShowPartner = () => {
    setVisiblePartner((prev) => !prev);
  };

  const setStartDate = async (id) => {
    try {
      const res = await Axios.patch(
        `/adminside/order/${id}`,
        { id, started_at: new Date() },
        { headers: header }
      );
      getOrders();
    } catch (error) {
    }
  };
  const setEndDate = async (id) => {
    try {
      const res = await Axios.patch(
        `/adminside/order/${id}`,
        { id, ended_at: new Date() },
        { headers: header }
      );
      getOrders();
    } catch (error) {
    }
  };

  const onShowSizeChange = (current, pageSize) => {
    // console.log(current, pageSize);
    setLimit(pageSize);
  };
  useEffect(() => {
    async function getSearch() {
      setLoading(true);
      try {
        const res = await Axios.get(
          `/adminside/orders/?search=${debouncedSearch}`,
          { headers: header }
        );
        setData(res?.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    if (debouncedSearch) {
      getSearch();
    } else {
      getOrders();
    }
  }, [debouncedSearch]);

  const getOrders = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(
        `/adminside/orders/?limit=${limit}&offset=${offset}`,
        {
          headers: header,
        }
      );
      setData(res?.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getOrdersCount = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(`/adminside/orders/`, {
        headers: header,
      });
      setDataCount(res?.data?.count);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getById = async (id) => {
    setLoading(true);
    try {
      const res = await Axios.get(`/adminside/order/${id}`, {
        headers: header,
      });
      setModalData(res.data);
      setLoading(false);
      setDataCount(res?.data?.count);
      handleShow();
    } catch (error) {
      setLoading(false);
    }
  };
  const getByIdPartner = async (id) => {
    setLoading(true);
    try {
      const res = await Axios.get(`/adminside/partner/${id}`, {
        headers: header,
      });
      setPartnerData(res.data);
      setLoading(false);
      handleShowPartner();
    } catch (error) {
      setLoading(false);
    }
  };
  // const handlePayment = async (id, status) => {
  //   setLoading(true);
  //   try {
  //     const res = await Axios.patch(
  //       `/adminside/order/${id}`,
  //       { id, paid: status },
  //       { headers: header }
  //     );
  //     if (res?.status == 200) {
  //       getOrders();
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };
  // const handleDelivered = async (id, status) => {
  //   setLoading(true);
  //   try {
  //     const res = await Axios.patch(
  //       `/adminside/order/${id}`,
  //       { id, delivered: status },
  //       { headers: header }
  //     );
  //     if (res?.status == 200) {
  //       getOrders();
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };
  const columns = [
    {
      title: "№",
      dataIndex: "orderName",
      render: (index, record) => <h4>#{record?.id}</h4>,
    },
    {
      title: "Дата начала",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          {record.started_at ? (
            <h4>{moment(record?.started_at).format("DD.MM.YYYY")}</h4>
          ) : (
            <Button onClick={() => setStartDate(record.id)} type="primary">
              Start
            </Button>
          )}
        </>
      ),
    },
    {
      title: "Срок окончания",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          {record.ended_at ? (
            <h4>{moment(record?.ended_at).format("DD.MM.YYYY")}</h4>
          ) : (
            <Button onClick={() => setEndDate(record.id)} type="primary">
              End
            </Button>
          )}
        </>
      ),
    },
    {
      title: "Наименование товара",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4 className="product_name">{record?.product?.title}</h4>
        </>
      ),
    },
    {
      title: "Штук",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4 className="product_name">{record?.quantity}</h4>
        </>
      ),
    },
    {
      title: "Сумма заказа",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4 className="product_name">{record?.price}</h4>
        </>
      ),
    },
    {
      title: "Заказчик",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4 className="product_name" onClick={() => getById(record?.id)}>
            {record?.customer_name}
          </h4>
        </>
      ),
    },
    {
      title: "Поставщик",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4
            className="product_name"
            onClick={() => getByIdPartner(record?.partner_id)}
          >
            {record?.partner_name}
          </h4>
        </>
      ),
    },
    {
      title: "Дополнительная информация",
      dataIndex: "orderPhoneNum",
      render: (text, record) => (
        <>
          <h4 className="product_name">
            {record?.delivery ? "Доставка" : "Самовывоз"}
          </h4>
        </>
      ),
    },
  ];
  console.log(modalData);
  console.log(partnerData);

  useEffect(() => {
    getOrders();
    getOrdersCount();
  }, []);

  return (
    <StyledOrders>
      <Modal
        footer={null}
        visible={visible}
        onCancel={handleShow}
        className="modalInfo"
      >
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Ф.И.О.</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.customer_name}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Номер телефона</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.customer_phone}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>ИНН</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.inn}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Наименование организации</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.partner_name}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Email</h4>
          </Col>
          <Col span={12}>
            <h4>{modalData?.customer_email}</h4>
          </Col>
        </Row>
        <Button onClick={handleShow} type="primary">
          Закрыть
        </Button>
      </Modal>
      <Modal
        footer={null}
        visible={visiblePartner}
        onCancel={handleShowPartner}
        className="modalInfo"
      >
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Полное наименование</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.company_name}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Генеральный директор</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.user?.name}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Наименование банка</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.bank_name}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>ИНН</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.inn}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>МФО</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.mfo}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Адрес компании</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.company_address}</h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Номер телефона</h4>
          </Col>
          <Col span={12}>
            <h4>
              {partnerData?.user?.phone
                ? `+${partnerData?.user?.phone}`
                : "Нет номера"}
            </h4>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col span={12}>
            <h4>Расчетный счет</h4>
          </Col>
          <Col span={12}>
            <h4>{partnerData?.bank_account}</h4>
          </Col>
        </Row>
        <Button onClick={handleShowPartner} type="primary">
          Закрыть
        </Button>
      </Modal>
      <div className="wrapper">
        {reqLoading ? (
          <Spin size="large" />
        ) : (
          <div style={{ width: "100%" }}>
            <header>
              {/* <h4 className="title">Заказы</h4> */}
              <h1>Сделки</h1>
            </header>
            <div className="search_block">
              <div>
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <Button type="link">Поиск</Button>
            </div>
            <div className="table_block">
              <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                pagination={false}
              ></Table>
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
          </div>
        )}
      </div>
    </StyledOrders>
  );
}

export default Orders;
