import styled from 'styled-components';
import COLORS from '../constants/colors';

export const StyledLanding = styled.div`
	background-color: ${COLORS.white};
	.conveniences_block {
		padding: 40px 0px;
	}
	.entry-section {
		background: url(${(props) => props.img});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		height: 600px;
		padding: 50px 0px;
		.buttonContainer {
			display: flex;
			flex-direction: column;
			justify-content: start;
			/* align-items: center; */
			.heading_btn {
				width: 215px;
				height: 45px;
				margin: 10px 0px;
			}
		}
		.img-block {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			button {
				display: none;
			}
		}
		.heading-title {
			font-weight: 600;
			font-size: 60px;
			color: ${COLORS.darkGrey};
			line-height: 103.5%;
		}
		.heading-paragraph {
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 22px;
			color: ${COLORS.darkGrey};
		}
		.headeing-btn {
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			text-align: center;
			cursor: pointer;
			width: 215px;
			margin-top: 50px;
		}
		.oilImg {
			width: 100%;
			max-width: 375px;
		}
	}

	.category-section {
		padding-bottom: 40px;
		.rec-arrow {
			display: none;
		}
		.rec-dot {
			border-radius: 2px;
			background-color: ${COLORS.lightGrey};
			width: 6px;
			height: 2px;
			box-shadow: none;
		}
		.rec-dot_active {
			border-radius: 2px;
			background-color: ${COLORS.main};
			width: 16px;
		}
	}

	@media only screen and (max-width: 992px) {
		.buttonContainer {
			display: none !important;
		}
		.headeing-btn {
			display: none;
		}
		.img-block > button {
			display: block !important;
		}
	}
	@media only screen and (max-width: 768px) {
		.entry-section .heading-title {
			font-size: 28px;
		}
		.entry-section .heading-paragraph {
			font-size: 16px;
			line-height: 19px;
		}
		.img-block {
			width: 100%;
			.oilImg {
				max-width: 285px;
			}
			button {
				width: 100% !important;
			}
		}
	}
	.news_link {
		display: flex;
		align-items: center;
		justify-content: end;
	}
`;
