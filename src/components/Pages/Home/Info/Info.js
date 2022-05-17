import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const Info = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-8'>
			<InfoCard cardTitle='Opening Ours ' img={clock} bgClass='bg-gradient-to-r from-secondary to-primary'
			cardBody = 'Every People Should take care about their time because time is most important thing in our life.'
			>
				
			</InfoCard>
			<InfoCard cardTitle='Our Location' img={marker} bgClass='bg-accent'
			 cardBody = 'If your want to find our location Please do not wast your time instead of Google search'
			>
				
			</InfoCard>
			<InfoCard cardTitle=' Contact' img={phone} bgClass='bg-gradient-to-r from-secondary to-primary'
				cardBody = 'Please contact us to know the details about us'
			>
				
			</InfoCard>
		</div>
	);
};

export default Info;