import styled from 'styled-components';

export const ProductDetailPageStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 30px;

	.detail-heading {
		padding: 15px 7px;
		display: flex;
		border-bottom: 1px solid;
		.heading-images {
			width: 50%;
			display: flex;
			.ant-image {
				width: 80%;
				cursor: pointer;
				height: 100%;
				img {
					width: 100%;
					/* height: 80%; */
					object-fit: contain;
				}
			}
			div {
				width: 20%;
				margin: 8px;
				display: flex;
				flex-direction: column;
				img {
					width: 100%;
				}
			}
		}
		.heading-info {
			width: 50%;
			display: flex;
			flex-direction: column;
			padding: 25px 0;
			justify-content: space-between;
			button {
				background: ${(props) => props.color};
				border: 1px solid transparent;
				border-radius: 8px;
				opacity: 0.8;
				&:hover {
					opacity: 1;
				}
			}
			h3 {
				font-style: normal;
				font-weight: 400;
				font-size: 28px;
				line-height: 1.4;
			}
			h4 {
				font-style: normal;
				font-weight: 400;
				font-size: 20px;
				line-height: 46px;
			}
			button {
				width: 50%;
				margin-top: 15px;
			}
		}
		@media only screen and (max-width: 768px) {
			flex-direction: column;
			.heading-images {
				width: 100%;
			}
			.heading-info {
				width: 100%;
			}
		}
	}
	.detail-body {
		h3 {
			font-size: 4rem;
			font-weight: 500;
			margin: 0;
		}
		p {
			font-size: 3.2rem;
			font-weight: 300;
			margin: 0;
		}
		&:nth-child(2) {
			max-height: 200px;
			overflow-y: scroll;
		}
	}
`;
