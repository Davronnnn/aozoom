import React, { useState, useEffect } from "react";
import { Button, Checkbox, Popconfirm, Table } from "antd";
import { FiPlus } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineDelete } from "react-icons/ai";
import { StyledPurchases } from "./Purchases.style";
import OilImg from "../../../assets/img/oil-img.svg";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../utils/axios";
import EditIcon from "../../../assets/img/edit-alt.svg";
import { useTranslation } from "react-i18next";

function Purchases({ handleViewAddProduct, handleViewEditProduct }) {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    getUserInfo();
  }, []);

  let adminInfo = JSON.parse(localStorage.getItem("user_info"))?.data;
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const getUserInfo = async () => {
    setLoading(true);
    try {
      const res = await Axios.get("/accounts/myaccount/", { headers: header });
      setUserInfo(res?.data?.details);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await Axios.get("/adminside/products/?limit=1000", {
        headers: header,
      });
      setData(res.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const getById = (id) => {
    handleViewEditProduct(id);
    // navigate(`/purchases/${id}`);
  };
  const handleProductSale = async (id, status) => {
    setLoading(true);
    try {
      const res = await Axios.patch(`/adminside/product/${id}`, {
        id,
        available: status,
      });
      if (res?.status == 200) {
        getProducts();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const columns = [
    {
      dataIndex: "productName",
      render: (text, record) => (
        <td className="ant-table-cell">
          <div className="img_column">
            {record?.images[0]?.image ? (
              <img
                className="product_img"
                src={record?.images[0].image}
                alt="Product"
              />
            ) : (
              <img className="product_img" src={OilImg} alt="Product" />
            )}
            <div>
              <h3 className="product_name">{record.title}</h3>
              <Checkbox
                checked={record?.available}
                size="small"
                onClick={() =>
                  handleProductSale(record?.id, !record?.available)
                }
              >
                {t("В наличии")}
              </Checkbox>
            </div>
          </div>
        </td>
      ),
    },
    {
      dataIndex: "price",
      render: (text) => (
        <td className="ant-table-cell">
          <h3 className="product_price">{text}</h3>
        </td>
      ),
    },
    {
      dataIndex: "id",
      render: (text, record) => (
        <td className="ant-table-cell">
          <div className="edit_column">
            <div onClick={() => getById(text)}>
              <img src={EditIcon} alt="edit-icon" />
            </div>
            <div>
              <Popconfirm
                title="Are you sure？"
                okText="Yes"
                cancelText="No"
                onConfirm={() => handleDelete(record.id)}
              >
                <AiOutlineDelete
                  className="edit_column"
                  color="red"
                  size="20"
                />
              </Popconfirm>
            </div>
          </div>
        </td>
      ),
    },
  ];
  const handleDelete = async (id) => {
    try {
      const res = await Axios.delete(`/adminside/product/${id}`);
      if (res.status == 204) {
        let filterData = data.filter((item) => item.id !== id);
        setData(filterData);
      }
    } catch (error) {
    }
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      let searchedData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(searchedData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <StyledPurchases>
      <header>
        <h2 className="title">{t("Товары")}</h2>
        {userInfo?.active ? (
          <Button type="primary" size="large" onClick={handleViewAddProduct}>
            <FiPlus color="#fff" size="16" />
            {t("Добавить товар")}
          </Button>
        ) : (
          <Button
            disabled
            type="primary"
            size="large"
            onClick={handleViewAddProduct}
          >
            <FiPlus color="#fff" size="16" />
            {t("Добавить товар")}
          </Button>
        )}
        <div className="search_block">
          <input
            type="text"
            placeholder="Название товара,артикул,уникальный код"
            value={searchInput}
            onChange={(e) => searchItems(e.target.value)}
          />
          <AiOutlineSearch color="#000" size="24" />
        </div>
      </header>
      <div className="wrapper">
        {searchInput.length > 1 ? (
          <Table
            dataSource={filteredResults}
            columns={columns}
            loading={loading}
          />
        ) : (
          <Table dataSource={data} columns={columns} loading={loading} />
        )}
      </div>
    </StyledPurchases>
  );
}

export default Purchases;
