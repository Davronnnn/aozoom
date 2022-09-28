import React, { useEffect, useState } from "react";
import {
  Table,
  Checkbox,
  Modal,
  Row,
  Col,
  Button,
  Form,
  Input,
  message,
  Pagination
} from "antd";
import { StyledPartners } from "./Partners.style";
import Axios from "../../../../utils/axios";
import useFetchHook from "../../../../customhooks/useFetchHook";

function Partners() {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [editComp, setEditComp] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [partnerData, setPartnerData] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  let adminInfo = JSON.parse(localStorage.getItem("user_info"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  useEffect(() => {
    getPartners();
  }, [offset, limit]);
  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
  };
  const getPartners = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(
        `/adminside/partners/?limit=${limit}&offset=${offset}`,
        { headers: header }
      );
      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getPartnersCount = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(`/adminside/partners/`, { headers: header });
      setDataCount(res?.data?.count);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const [formValues, setFormValues] = useState({
    compName: modalData?.company_name,
    ceo: modalData?.user?.name,
    nameBank: modalData?.bank_name,
    inn: modalData?.inn,
    mfo: modalData?.mfo,
    addressComp: modalData?.company_address,
    phoneNum: modalData?.user?.phone,
    accountNum: modalData?.bank_account,
  });

  const closeModal = () => {
    setIsVisible(false);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  const handleEditComp = () => {
    setEditComp((prev) => !prev);
  };
  const columns = [
    {
      dataIndex: "ceos_name",
      render: (text, record) => (
        <td className="ant-table-cell" onClick={() => getCompInfo(record.id)}>
          {record.user.name ? record.user.name : "Partner name"}
        </td>
      ),
    },
    {
      dataIndex: "active",
      render: (text, record) => (
        <Checkbox
          onChange={() => handleAccess(record.id, !text)}
          checked={text}
        />
      ),
    },
  ];

  const updatePartner = async (e, id) => {
    e.preventDefault();
    try {
      const res = await Axios.patch(`adminside/partner/${id}`, {
        ceos_name: formValues.ceo,
        bank_name: formValues.nameBank,
        inn: formValues.inn,
        mfo: formValues.mfo,
        company_address: formValues.addressComp,
        bank_account: formValues.accountNum,
        user: { id, phone: formValues.phoneNum, name: formValues.compName },
      });
      if (res?.status == 200) {
        message.success("Успешно завершено");
        closeModal();
        getPartners();
      }
    } catch (error) {
      message.error("Что-то пошло не так");
    }
  };
  const handleAccess = async (id, status) => {
    setLoading(true);
    try {
      const res = await Axios.patch(
        `adminside/partner/${id}`,
        { id, active: status },
        { headers: header }
      );
      setLoading(false);
      if (res.status == 200) {
        getPartners();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getCompInfo = async (id) => {
    try {
      const res = await Axios.get(`adminside/partner/${id}`, {
        headers: header,
      });
      setModalData(res?.data);
      setFormValues({
        compName: res?.data?.company_name,
        ceo: res?.data?.user?.name,
        nameBank: res?.data?.bank_name,
        inn: res?.data?.inn,
        mfo: res?.data?.mfo,
        addressComp: res?.data?.company_address,
        phoneNum: res?.data?.user?.phone,
        accountNum: res?.data?.bank_account,
      });
      openModal();
    } catch (error) {
      // console.log(error);
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getPartners();
    getPartnersCount();
  }, []);
  return (
    <StyledPartners>
      <div className="wrapper">
        <header>
          <h1>Партнеры</h1>
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
        <Modal visible={isVisible} footer={null} onCancel={closeModal}>
          <div className="modal_body">
            <Form layout="vertical">
              {editComp ? (
                <>
                  <div style={{ margin: "10px 0px" }}>
                    <label htmlFor="compName">Полное наименование</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.compName}
                      name="compName"
                      id="compName"
                    />
                  </div>
                  <div>
                    <label htmlFor="ceo">Генеральный директор</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.ceo}
                      name="ceo"
                      id="ceo"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="nameBank">Наименование банка</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.nameBank}
                      name="nameBank"
                      id="nameBank"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="inn">ИНН</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.inn}
                      name="inn"
                      id="inn"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="mfo">МФО</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.mfo}
                      name="mfo"
                      id="mfo"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="addressComp">Адрес компании</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.addressComp}
                      name="addressComp"
                      id="addressComp"
                    />
                  </div>
                  <div style={{ margin: "15px 0px" }}>
                    <label htmlFor="phoneNum">Номер телефона</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.phoneNum}
                      name="phoneNum"
                      id="phoneNum"
                    />
                  </div>
                  <div>
                    <label htmlFor="accountNum">Расчетный счет</label>
                    <Input
                      required
                      onChange={handleInput}
                      value={formValues.accountNum}
                      name="accountNum"
                      id="accountNum"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Полное наименование</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.company_name}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Генеральный директор</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.user?.name}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Наименование банка</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.bank_name}</h5>
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
                      <h5>{modalData?.inn}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>МФО</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.mfo}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Адрес компании</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.company_address}</h5>
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
                      <h5>{modalData?.user?.phone}</h5>
                    </Col>
                  </Row>
                  <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>Расчетный счет</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5>{modalData?.bank_account}</h5>
                    </Col>
                  </Row>
                </>
              )}

              <div className="modal_footer" style={{ margin: "20px 0px" }}>
                {editComp ? (
                  <Row gutter={[16, 16]}>
                    <Col>
                      <Button onClick={handleEditComp}>Отмена</Button>
                    </Col>
                    <Col>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={(e) => updatePartner(e, modalData?.id)}
                        >
                          Разместить
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                ) : (
                  <Button type="primary" onClick={handleEditComp}>
                    Изменить
                  </Button>
                )}
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </StyledPartners>
  );
}

export default Partners;
