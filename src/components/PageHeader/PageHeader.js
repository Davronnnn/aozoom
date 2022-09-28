import React from 'react'
import { useTranslation } from "react-i18next";
import { StyledPageHeader } from './PageHeader.style'

function PageHeader({title}) {
  return (
    <StyledPageHeader>
      <h2>
         {title}
      </h2>
    </StyledPageHeader>
  )
}

export default PageHeader
