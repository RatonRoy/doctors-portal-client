import React from 'react';
import treatment from '../../../../../assets/images/treatment.png'

const ServiceHero = () => {
	return (
		<div class="hero min-h-screen px-10">
			<div class="hero-content flex-col lg:flex-row">
				<img src= {treatment} class="max-w-sm rounded-lg shadow-2xl" />
				<div className='pl-24 flew-col'>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
					<p class="py-6 h-1/2"> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. </p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceHero;