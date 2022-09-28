import React from "react";
import ProductCard from "../../components/NewProducts/ProductCard";
import Service from "../../components/Servise/Service";
import { ProductViewStyle } from "./ProductViewStyle";
import CardImg from "../../assets/img/category-oil.svg";
import { Button, Checkbox, Col, Collapse, InputNumber, Pagination, Row, Spin } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import { useState } from "react";
import { useEffect } from "react";
import useFetchHook from "../../customhooks/useFetchHook";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { SearchContext } from "../Landing/SeacrhContext";
import Axios from "../../utils/axios";
import { SelectContext } from "../../components/Navbar/SelectContext";
import { useRef } from "react";

export default function ProductView() {
  const [productList,setProductList] = useState([]);
  const { results = [] } = productList;
  const [minPrice,setMinPrice] = useState('')
  const [maxPrice,setMaxPrice] = useState("")
  const [loading,setLoading] = useState(false)
  const [category,setCategory] = useState([])
  const {value,setValue} = useContext(SearchContext)
  const {select,setSelect} = useContext(SelectContext)
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation()
  const [width, setWidth] = useState(window.innerWidth);
  const { Panel } = Collapse;
  const check = useRef()
  const check2 = useRef()
  const check3 = useRef()

  const handleChange = (e) => {
    const {value} = e.target
    let newCategory = [...category]
    if(!e.target.checked){
     newCategory = newCategory.filter(item=> item !== value)
    }else {
      newCategory.push(value)
    }
    setCategory(newCategory)
  };

  const onChange = (value) => {
  };

  const makeVisible = () => {
    setVisible(!visible);
  };

  function handleResize() {
    setWidth(window.innerWidth);
  }
  const handleReset = ()=>{
    setMaxPrice(0)
    setMinPrice(0)
    check.current.state.checked = false
    check2.current.state.checked = false
    check3.current.state.checked = false
  }
  const getProducts = async()=>{
    setLoading(true)
    try {
      const res = await Axios.get(`/products/?limit=1000&min_price=${minPrice&& minPrice}&max_price=${maxPrice&&maxPrice}&categories__in=${category.length > 0 ? category.map(item=> item) : select}`)
      setProductList(res?.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(()=>{
    getProducts()
  },[select])

  useEffect(() => {
    if(value) {
      let timer = setTimeout(async () => {
        try {
          const res = await Axios.get(`/products/?search=${value}`);
          setProductList(res?.data)
        } catch (error) {}
      }, 1000);
  
      return () => {
        clearTimeout(timer);
      };
    }
  }, [value]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <StyledContainer>
        <div className="container">
          {width < 768 ? <h3 onClick={() => makeVisible()}>Фильтр</h3> : ""}
          <ProductViewStyle
            style={width < 768 ? { display: "initial" } : { display: "flex" }}
          >
            <div
              style={visible ? { display: "initial" } : { width: "20%" }}
              className="filter-container"
            >
              <h4
                style={
                  width > 768 ? { display: "inherit" } : { display: "none" }
                }
              >
                {t("p50")}
              </h4>
              <Collapse defaultActiveKey={["0", "1", "2"]} ghost>
                <Panel header={t("p51")}>
                  <div>
                    <InputNumber
                      name="min_price"
                      defaultValue={0}
                      value={minPrice}
                      type="number"
                      onChange={(value)=> setMinPrice(value)}
                    />
                    <InputNumber
                      style={{ marginLeft: "15px" }}
                      name="max_price"
                      type="number"
                      value={maxPrice}
                      defaultValue={0}
                      onChange={(value)=> setMaxPrice(value)}
                    />
                  </div>
                </Panel>
                <Panel header={t("p52")}>
                  <div className="checkbox-container">
                    <Checkbox value={"2"} ref={check} onChange={handleChange}>
                     {t("p86")}
                    </Checkbox>
                    <Checkbox value={"1"} ref={check2} onChange={handleChange}>
                     {t("p87")}
                    </Checkbox>
                    <Checkbox value={"3"} ref={check3} onChange={handleChange}>{t("p88")}</Checkbox>
                  </div>
                </Panel>
                {/* <Panel header={t("p53")}>
                  <div className="checkbox-container">
                    <Checkbox onChange={handleChange}>{t("p54")}</Checkbox>
                    <Checkbox onChange={handleChange}>{t("p55")}</Checkbox>
                    <Checkbox onChange={handleChange}>{t("p56")}</Checkbox>
                    <Checkbox onChange={handleChange}>{t("p57")}</Checkbox>
                    <Checkbox onChange={handleChange}> {t("p58")}</Checkbox>
                  </div>
                </Panel> */}
              </Collapse>
              <div className="button-container">
                <Button  type="primary" onClick={getProducts}>{t("p59")}</Button>
                <Button type="default " onClick={handleReset}>{t("p60")}</Button>
              </div>
            </div>
            <div className="product-container">
              <Row>
                { loading ? <Spin/> :
                results.map((item, index) => {
                  return (
                    <Col
                      sm={{
                        span: 24,
                      }}
                      md={{
                        span: 12,
                      }}
                      lg={{
                        span: 8,
                      }}
                      key={index}
                    >
                      <ProductCard margin="10px" key={index} data={item} />
                    </Col>
                  );
                })
                }
              </Row>
            </div>
          </ProductViewStyle>
        {/* <Pagination  onChange={(e)=> console.log(e)} current={1} total={results?.length}/> */}
        </div>
      </StyledContainer>
      <Service />
    </>
  );
}
