import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import treatment from '../../../../assets/images/whitening.png'
import cavity from '../../../../assets/images/cavity.png'
import Service from './Service/Service';
import ServiceHero from './ServiceHero/ServiceHero';

const Services = () => {
	const servicesData = [
		{
			_id: 1, 
			img: fluoride,
			title: 'Title One ',
			text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, soluta? Commodi, illo?',
		},
		{
			_id: 2, 
			img: treatment,
			title: 'Title One ',
			text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, soluta? Commodi, illo?',
		},
		{
			_id: 3, 
			img: cavity,
			title: 'Title One ',
			text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, soluta? Commodi, illo?',
		},
	]
	return (
		<div className='py-6 px-8'>
			<div className="services-header text-center">
				<h1 className='text-primary font-bold text-2xl'> Our Services </h1>
				<h2 className='text-3xl'> Services We Provide </h2>
				
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{
					servicesData.map(service => <Service
						key={service._id} service = {service}
					></Service>)
				}
			</div>
			<ServiceHero></ServiceHero>
		</div>
	);
};

export default Services;