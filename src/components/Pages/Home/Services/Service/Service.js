import React from 'react';

const Service = (props) => {
	console.log(props)
	const { img, title, text } = props.service
	return (
		<div class="card w-96  shadow-xl">
			<figure class="px-10 pt-10">
				<img src= {img} alt="Shoes" class="rounded-xl" />
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title"> {title}</h2>
				<p> {text} </p>
				
			</div>
		</div>
	);
};

export default Service;