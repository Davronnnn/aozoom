import styled from 'styled-components';

export const ProductViewStyle = styled.div`
	display: flex;
	padding: 48px 0;
	.filter-container {
		width: 20%;
		background: #fafafa;
		margin-right: 40px;
		h4 {
			padding: 4px 16px 0;
			font-size: 24px;
			font-weight: 300;
			width: 70%;
		}
		.ant-collapse-ghost
			> .ant-collapse-item
			> .ant-collapse-content
			> .ant-collapse-content-box {
			padding-top: 0;
		}
		.checkbox-container {
			display: flex;
			flex-direction: column;
			.ant-checkbox-wrapper {
				margin: 4px 0;
			}
		}
		.button-container {
			padding: 12px 16px;
			button {
				margin: 5px 0;
				min-width: 80%;
				border-radius: 6px;
			}
		}
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	.product-container {
		width: 80%;
		.ant-row {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}
		@media only screen and (max-width: 768px) {
			width: 100%;
		}
	}
	@media only screen and(max-width:768px) {
		display: initial;
	}
`;
