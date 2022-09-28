import React from 'react'
import { StyledServiceCard } from './ServiceCard.style'

function ServiceCard(props) {
  return (
    <StyledServiceCard>
        <img src={props.imgUrl} alt="service-icon" />
        <h5>{props.serviceTitle}</h5>
    </StyledServiceCard>
  )
}

export default ServiceCard