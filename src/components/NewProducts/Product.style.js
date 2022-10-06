import styled from 'styled-components';

export const StyledProducts = styled.div`
	.btn_wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 40px;
		.btn_read_more {
			width: 100%;
			max-width: 421px;
		}
	}

	@media screen and (max-width: 768px) {
		.btn_read_more {
			max-width: 300px !important;
		}
	}
`;
