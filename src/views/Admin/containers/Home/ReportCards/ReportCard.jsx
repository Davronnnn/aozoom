import React from "react";
import IncreaseImg from "../../../../../assets/img/increase.svg";
import DecreaseImg from "../../../../../assets/img/decrease.svg";
import {StyledReportCard} from './ReportCard.style'

function ReportCard(props) {
  return (
    <StyledReportCard>
      <h5>{props?.title}</h5>
      <h3>{props?.price}</h3>
      {/* <div className="card_footer">
        {props.hasIncrease ? (
          <img src={IncreaseImg} alt="increase" />
        ) : (
          <img src={DecreaseImg} alt="decrease" />
        )}
        {
            props.hasIncrease ? <p className="increase_amount">{props.amount} %</p> : <p className="decrease_amount">{props?.amount} %</p>
        }
      </div> */}
    </StyledReportCard>
  );
}

export default ReportCard;
