import React,{useEffect,useState} from "react";
import {Form,Formik,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/Container.style";
import { UserAccountWrapper } from "./useAccounStyle";
import {useDispatch,useSelector} from "react-redux"
import { getUserOrders, getUserInfo, editPartnerInfo } from "../../Redux/userInfos/user";
import exit from "../../assets/img/exit.svg"
import AddProduct from "./AddProduct/Addproduct"
import Purchases from "./Purchases/Purchases";
import Addproduct from "./AddProduct/Addproduct";
import EditProduct from "./EditProduct/EditProduct";
import homeIcon from "../../assets/img/home-black.svg"
import chartIcon from "../../assets/img/chart-black.svg"
import userIcon from "../../assets/img/user-black.svg"
import orderIcon from "../../assets/img/orders.svg"
import {Navigate} from "react-router-dom"
import { useTranslation } from "react-i18next";



export default function UserAccount() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // belong to customer
  const [orderSection,setOrderSection] = useState(false)
  //belong to partner
  const [edit_partnerInfo,set_edit_partnerInfo] = useState(false)
  const [viewPurchase,setViewPurchase] = useState(false)
  const [viewAddProduct,setViewAddProduct] = useState(false)
  const [viewEditProduct,setViewEditProduct] = useState(false)
  const [edit_id,set_edit_id] = useState("")

  

  
  const userInfo = useSelector(state=>state.user.userInfo)
  const userOrders = useSelector(state=>state.user.userOrders.data) ||[] 
  let role = JSON.parse(localStorage.getItem("user_info"))?.data?.user?.role


//universal
  useEffect(()=>{
    let mounting = true;
    if(mounting){
       dispatch(getUserInfo())
    }
    return ()=>{
      mounting = false;
    }
  },[])
//universal
  const logout = ()=>{
    localStorage.removeItem("user_info")
    navigate('/sign-in')
  }

// universal
const toUserDetail = ()=>{
  setOrderSection(false)
  setViewPurchase(false)
  setViewAddProduct(false)
  setViewEditProduct(false)

  dispatch(getUserInfo())
}

// belong to customer
  const toOrdersSection = ()=>{
     setOrderSection(true)
    setViewPurchase(false)
  setViewAddProduct(false)
  setViewEditProduct(false)

     dispatch(getUserOrders())
  }

//belong to partner
 const handlePartnerInfo = ()=>{
    set_edit_partnerInfo(true)
    setViewPurchase(false)
    setViewAddProduct(false)
  setViewEditProduct(false)


 }

 //belong to partner
 const handleViewPurchase = ()=>{
    set_edit_partnerInfo(true)
    setViewPurchase(true)
    setViewAddProduct(false)
  setViewEditProduct(false)

}


//belong to partner
const handleViewAddProduct = ()=>{
  set_edit_partnerInfo(true)
  setViewPurchase(false)
  setViewAddProduct(true)
  setViewEditProduct(false)

}

const handleViewEditProduct = (id)=>{
  set_edit_id(id)
  set_edit_partnerInfo(true)
  setViewPurchase(false)
  setViewAddProduct(false)
  setViewEditProduct(true)
}

 let initialValues = {
  inn:userInfo?.inn || "",
  company_name:userInfo?.company_name || "",
  email:userInfo?.email || "",
  name:userInfo?.name || "",
  phone:userInfo?.phone || "",   
  bank_account:userInfo?.bank_account || "",
  bank_name:userInfo?.bank_name || "",
  ceos_name:userInfo?.ceos_name || "",
  company_address:userInfo?.company_address || "",
  mfo:userInfo?.mfo || "",
}


const handleSubmit = async (data,{resetForm})=>{
  let answer = {
  inn:data.inn,
  company_name:data.company_name,
  bank_account:data.bank_account,
  bank_name:data.bank_name,
  company_address:data.company_address,
  mfo:data.mfo,
  user:{
    id:userInfo.userId,
    email:data.email,
    name:data.name,
    phone:data.phone
  },   
}
  console.log(answer)
  try {
    const originalPromiseResult = await dispatch(editPartnerInfo({content:answer,id:userInfo?.id})).unwrap()
    dispatch(getUserInfo())
    set_edit_partnerInfo(false)
    resetForm({})
  } catch (rejectedValueOrSerializedError) {
  }
  dispatch() 
  resetForm({})
}


  return <StyledContainer>

   {
          !role ? <Navigate exact = {true}  to = "/sign-in"/> : null
    }

    <div className="container">
      {
        role === "Customer" ?
        <UserAccountWrapper>
           <div className="left-side">
              <ul>
                <li onClick = {toUserDetail}> <img src={userIcon} alt="user" />  {t("Личные данные")}</li>
                <li onClick={toOrdersSection}><img src={orderIcon} alt="chart" /> {t("Заказы")}</li>
              <h4  onClick={()=> logout()}> <img src={exit} alt="exit"/>  {t("Выйти")}</h4>
              </ul>
           </div>
           <div className="right-side">
           {
            !orderSection ? <>
            <h2>{t('Личные данные')}</h2>
              <div className = "flex-item">
              <p className = "item">{t( "Ф.И.О")}</p>  <p className = "item">{userInfo?.name}</p>
              </div> 

              <div className = "flex-item">
             <p className = "item">{t("Номер телефона")}</p>  <p className = "item">{userInfo?.phone}</p>
              </div> 

              <div className = "flex-item">
              <p className = "item">{t("ИНН")}</p>   <p className = "item">{userInfo?.inn}</p>
              </div> 

              <div className = "flex-item">
              <p className = "item">{t("Организация")}</p>  <p className = "item">{userInfo?.company_name}</p>
              </div> 

              <div className = "flex-item">
              <p className = "item">{t("Логин")}</p>  <p className = "item">{userInfo?.email}</p>
              </div> 
           </>:<>
           <h2>{t("Заказы")}</h2>
              
           {
                userOrders?.map(item=>{
                  return <div key = {item.id} className = "flex-item">
                  
                       <React.Fragment>
                       <p className = "item">
                        <img style = {{width:"100px"}} src = {"http://137.184.114.36:7774"+item?.product?.cover_image} alt = "images"/>
                      </p>
                    </React.Fragment>
                  
                  
                    <p className = "item">
                    
                      <React.Fragment>
                       {item?.product?.title}
                      <br />
                      {item?.quantity} x {item?.product?.price}
                     <br />
                     {t("Цена")}:{item?.price} UZS
                    <br />
                    {t("Количество")}: {item?.quantity}шт
                    </React.Fragment>
                    
                </p>
              </div>
                })
              }
           </>
           }
           </div>
      </UserAccountWrapper>:
      <UserAccountWrapper>
      <div className="left-side">
         <ul>
           <li onClick = {()=>navigate("/")}> <img src={homeIcon} alt="home" /> {t("Главная страница")}</li>
           <li onClick = {handleViewPurchase}><img src={orderIcon} alt="chart" />{t("p7")}</li>
           <li onClick = {()=>set_edit_partnerInfo(false)}><img src={userIcon} alt="user" />  {t("Личные данные")}</li>
         <h4  onClick={()=> logout()}> <img src={exit} alt="exit"/>{t("Выйти")}</h4>
         </ul>
      </div>
      <div className="right-side">
      {
       !edit_partnerInfo ? <>

       <h2>{t("Личные данные о кампании")}</h2>

       <div className = "flex-item">
        <p className = "item">{t("Полное наименование")}</p>  <p className = "item">{userInfo?.company_name}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">{t("Генеральный директор")}</p>  <p className = "item">{userInfo?.name}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">{t("Наименование банка")}</p>  <p className = "item">{userInfo?.bank_name}</p>
         </div> 
         

         <div className = "flex-item">
        <p className = "item">{t("Номер телефона")}</p>  <p className = "item">{userInfo?.phone}</p>
         </div> 
         

         <div className = "flex-item">
         <p className = "item">{t('ИНН')}</p>   <p className = "item">{userInfo?.inn}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">{t("МФО")}</p>   <p className = "item">{userInfo?.mfo}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">{t("Адрес компании")}</p>  <p className = "item">{userInfo?.company_address}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">{t("Расчетный счет")}</p>  <p className = "item">{userInfo?.bank_account}</p>
         </div> 

         <div className = "flex-item">
         <p className = "item">{t("Логин")}</p>  <p className = "item">{userInfo?.email}</p>
         </div> 


        <div>
          <button className = "changeAccountBtn" onClick = {handlePartnerInfo}>{t("Изменить")}</button>
        </div>
        
        


      </>:<>
       {
        viewPurchase && !viewAddProduct && !viewEditProduct ? <Purchases handleViewAddProduct = {handleViewAddProduct} handleViewEditProduct = {handleViewEditProduct}/>:  !viewPurchase && viewAddProduct && !viewEditProduct ? <Addproduct/>:  !viewPurchase && !viewAddProduct && viewEditProduct ? <EditProduct productId = {edit_id}/> :
        <>
         <h2>{t("Изменение данных")}</h2>

<Formik
     initialValues = {initialValues}
     onSubmit = {handleSubmit}
     enableReinitialize
>
   {
   formik=>{
     return(
      <Form>
        <div className = "flex-item">
        <label className = "item" htmlFor = "company_name">{t("Полное наименование")}</label> 
        <Field className = "inputField" type="text"  id = "company_name"  name = "company_name"/> 
        </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "name">{t("Генеральный директор")}</label>
   <Field className = "inputField" type="text"  id = "name"  name = "name"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "bank_name">{t("Наименование банка")}</label>
   <Field className = "inputField" type="text"  id = "bank_name"  name = "bank_name"/> 
   </div> 
   

   <div className = "flex-item">
  <label className = "item" htmlFor = "phone">{t("Номер телефона")}</label> 
  <Field className = "inputField" type="string"  id = "phone"  name = "phone"/> 
   </div> 
   

   <div className = "flex-item">
   <label className = "item" htmlFor = "inn">{t("ИНН")}</label>   
   <Field className = "inputField" type="string"  id = "inn"  name = "inn"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor ="mfo">{t("МФО")}</label>
   <Field className = "inputField" type="string"  id = "mfo"  name = "mfo"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "company_address">{t("Адрес компании")}</label>
   <Field className = "inputField" type="string"  id = "company_address"  name = "company_address"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "bank_account">{t("Расчетный счет")}</label>
   <Field className = "inputField" type="string"  id = "bank_account"  name = "bank_account"/> 
   </div> 

   <div className = "flex-item">
   <label className = "item" htmlFor = "email">{t("Логин")}</label> 
   <Field className = "inputField" type="email"  id = "email"  name = "email"/> 
   </div>

   <div>
    <button disabled={formik.isSubmitting || !formik.isValid } type = "submit" className = "changeAccountBtn">{t("Сохранить")}</button>
  </div>

      </Form>
      )} 
  }   
</Formik>  

        </>
       }
      </>
      }
      </div>
 </UserAccountWrapper>
      }
    </div>
    </StyledContainer>;
}

