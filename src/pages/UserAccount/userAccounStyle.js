import styled from 'styled-components';
import colors from '../../constants/colors';

export const UserAccountWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 50px 0;
	.left-side {
		width: 20%;
		background: #f4f7fa;
		margin-right: 20px;
		ul {
			list-style: none;
			padding: 50px 25px;
		}
		h4 {
			color: red;
			cursor: pointer;
		}
		li {
			margin-bottom: 25px;
			cursor: pointer;
		}
	}
	.right-side {
		width: 80%;
		background: #f4f7fa;
		height: 100%;
		padding: 15px;
	}
	.flex-item {
		display: flex;
		width: 450px;
		margin-bottom: 10px;
		justify-content: space-between;
		align-items: center;
	}
	.item {
		width: 45%;
		font-size: 16px;
	}
	.changeAccountBtn {
		background: ${colors.main};
		color: white;
		padding: 5px 10px;
		outline: none;
		font-size: 20px;
		margin-top: 10px;
		border: transparent;
		cursor: pointer;
	}
	.inputField {
		outline: none;
		border: 1px solid gray;
		backogrund: transparent;
		width: 55% !important;
		border-radius: 5px;
		padding: 3px;
	}
`;
