import React from 'react';

const InfoCard = ({img, cardTitle, bgClass, cardBody}) => {
	return (
		<div class={`card lg:card-side bg-base-100 shadow-xl px-8 bg-accent ${bgClass}`}>
			<figure><img src= {img} alt="Album"/></figure>
			<div class="card-body text-white">
				<h2 class="card-title">{cardTitle}</h2>
				<p>{cardBody}</p>
			</div>
		</div>
	);
};

export default InfoCard;