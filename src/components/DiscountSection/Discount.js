import React from 'react';
import { StyledContainer } from '../../styles/Container.style';
import { StyledDiscount } from './Discount.style';
import DiscountBg from '../../assets/img/discount-bg.svg';
import { Carousel } from 'antd';

function Discount() {
	return (
		<StyledDiscount>
			<StyledContainer>
				<div className='container'>
					<Carousel>
						<div className='discount'></div>
						<div className='discount_2'></div>
					</Carousel>
				</div>
			</StyledContainer>
		</StyledDiscount>
	);
}

export default Discount;
