import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const StyledNavUl = styled.nav`
	display: block;
	background: ${COLORS.main};

	.navigation > nav {
		display: flex;
		height: 54px;
		justify-content: space-evenly;
		div {
			height: 100%;
		}
		&:first-child {
			display: flex;
			align-items: center;
		}
	}
	.nav_link {
		cursor: pointer;
		font-weight: 400;
		height: 100%;
		font-size: 22px;
		padding: 4px 12px;
		display: flex;
		align-items: center;
		line-height: 27px;
		transition: all 0.3s ease-in-out;
		color: ${COLORS.white};
		&:hover {
			background: #ad4d11;
		}
		img {
			margin-right: 10px;
		}
		.ant-space-item {
			display: flex;
			align-items: center;
		}
	}
	.active {
		background: #ad4d11;
	}
	@media screen and (max-width: 992px) {
		display: none;
	}
`;
