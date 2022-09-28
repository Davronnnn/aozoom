import React from 'react'
import {StyledPageTitle} from './PageTitle.style'

function PageTitle({title}) {
  return (
    <StyledPageTitle>
      <h4>
        {title}
      </h4>
    </StyledPageTitle>
  )
}

export default PageTitle
