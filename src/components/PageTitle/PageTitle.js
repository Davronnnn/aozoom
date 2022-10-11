import React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.div`
	h4 {
		font-size: 24px;
		line-height: 29px;
	}
`;
function PageTitle({ title }) {
	return (
		<StyledPageTitle>
			<h4>{title}</h4>
		</StyledPageTitle>
	);
}

export default PageTitle;
