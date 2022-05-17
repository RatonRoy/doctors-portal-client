import React from 'react';
import FooterEnd from '../../Shared/FooterEnd/FooterEnd';
import AppointmentHome from './AppointmentHome/AppointmentHome';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Info from './Info/Info';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
	return (
		<div>
			<Banner> </Banner>
			<Info> </Info>
			<Services> </Services>
			<AppointmentHome> </AppointmentHome>
			<Review></Review>
			<Contact> </Contact>
			<Footer></Footer>	
		</div>
	);
};

export default Home;