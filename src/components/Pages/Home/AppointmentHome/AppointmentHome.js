import React from 'react';
import appointment from '../../../../assets/images/appointment.png';
import doctor from '../../../../assets/images/doctor.png';
import MainButton from '../../../Shared/MainButton/MainButton';
import './AppointmentHome.css'

const AppointmentHome = () => {
	return (
		<div class="min-h-screen hero mt-200px"
			style={{ background: `url(${appointment})` }}
			className='flex flex-col md:flex-row md:justify-between items-center'
		>
			{/* <div class="hero-overlay bg-opacity-60"></div> */}
			<div className='mt-[-100px]' >
				<img src={doctor} alt="" />
			</div>
			<div className='text-white'

			>
				<h1 className='text-3xl text-center md:text-left'> Lorem ipsum dolor sit amet. </h1>
				<p className='text-center md:text-left px-50 md:px-0 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio laborum asperiores facilis. Magnam aliquid magni sed, alias distinctio libero quia tenetur dolorem suscipit veritatis mollitia cupiditate itaque iusto similique? </p>
				<p className='flex flex-row justify-center md:justify-start py-5'>
					<MainButton> </MainButton>
				</p>

			</div>

		</div>
	);
};

export default AppointmentHome;