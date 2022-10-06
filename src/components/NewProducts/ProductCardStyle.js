import styled from 'styled-components';

export const StyledProductCard = styled.div`
	border: 1px solid #e0e0e0;
	border-radius: 10px;
	margin: ${(props) => props.margin};
	display: flex;
	flex-direction: column;
	min-height: 450px;
	align-items: center;
	justify-content: center;
	padding: 30px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	&:hover {
		box-shadow: 0px 21px 20px rgba(84, 81, 81, 0.17);
	}
	.card-header {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		height: 220px;
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
	.card-body {
		height: 170px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		div {
			display: flex;
			font-size: 13px;
			justify-content: space-between;
		}
		h3 {
			color: #4f4f4f;
			font-size: 18px;
		}
	}
	.card-footer {
		display: flex;
		width: 100%;
		justify-content: space-between;
		div {
			.counter {
				border: none;
				cursor: pointer;
				margin: 0;
				padding: 2px;
				font-size: 24px;
			}
			span {
				border: 1px solid #bdbdbd;
				border-radius: 5px;
				padding: 6px;
				margin: 0 8px;
			}
		}
	}
`;
