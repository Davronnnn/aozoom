import React from 'react';
import { StyledNewsCard } from './landing.style';
import moment from 'moment';

function NewsCard(props) {
	const { item } = props;
	return (
		<StyledNewsCard>
			<div className='card_header'>
				<img src={item?.cover_image?.image} alt={item?.title} />
			</div>
			<p className='news_date'>
				{moment(item?.published_date).format('DD.MM.YYYY')}
			</p>
			<h3 className='news_title'>
				{item?.title.length > 35
					? `${item.title.substring(0, 35)}..`
					: item?.title}
			</h3>
			<p className='news_subtitle'>
				{item?.short_description.length > 110
					? `${item.short_description.substring(0, 110)}..`
					: item?.short_description}
			</p>
		</StyledNewsCard>
	);
}

export default NewsCard;
