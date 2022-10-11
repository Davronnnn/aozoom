import styled from 'styled-components';

export const StyledProductCard = styled.div`
	min-height: 450px;
	margin: ${(props) => props.margin};
	padding: 30px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	box-shadow: 0px 21px 20px rgba(84, 81, 81, 0.17);
	border: 1px solid #e0e0e0;
	border-radius: 10px;

	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: 0px 21px 20px rgba(84, 81, 81, 0.17);
	}
	.card-quick {
		padding: 10px;

		position: absolute;
		top: 5%;
		right: 5%;
		cursor: grab;

		&:hover::after {
			content: 'Кўриш';
			position: absolute;
			bottom: -10px;
			left: 50%;
			transform: translateX(-50%);
			color: rgba(244, 115, 33, 0.8);
			text-transform: uppercase;
		}
	}

	.quick-img {
		transition: all 0.8s ease;

		&:hover {
			fill: #f47321;
			transform: scale(1.5);
		}
	}
	.card-header {
		width: 100%;
		height: 220px;

		padding: 10px;

		display: flex;
		align-items: center;
		justify-content: center;

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
