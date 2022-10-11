import styled from 'styled-components';
import COLORS from '../../constants/colors';
import DiscountBg from '../../assets/img/discount-img3.svg';
import DiscountBg2 from '../../assets/img/discount-2.png';

export const StyledDiscount = styled.div`
	margin-top: 100px;
	.slick-dots-bottom {
		visibility: hidden;
	}
	.discount_2 {
		background: url(${DiscountBg2});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: end;
		border-radius: 10px;
		width: 100%;
		max-width: 1310px;
		height: 420px;
	}
	.discount {
		background: url(${DiscountBg});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: end;
		border-radius: 10px;
		width: 100%;
		max-width: 1310px;
		height: 420px;
		div {
			width: 50%;
			padding: 100px 180px;
			h2 {
				font-weight: 600;
				font-size: 48px;
				color: ${COLORS.white};
			}
			h4 {
				font-weight: 700;
				font-size: 24px;
				color: ${COLORS.white};
			}
		}
	}
	@media only screen and (max-width: 1200px) {
		.discount {
			div {
				width: 70%;
			}
		}
	}
	@media only screen and (max-width: 992px) {
		.discount,
		.discount_2 {
			width: 100%;
			background-position: center;
			background-size: cover;
			div {
				padding: 55px 10px;
				h2,
				h4 {
					font-size: 24px;
				}
			}
		}
	}
`;
