import React from 'react'
import { StyledCard } from './Card.style'

function Card({data}) {

  return (
    <StyledCard>
      <h4>{data?.title}</h4>
      <img src={data?.imgUrl} alt="oil" />
    </StyledCard>
  )
}

export default Card
