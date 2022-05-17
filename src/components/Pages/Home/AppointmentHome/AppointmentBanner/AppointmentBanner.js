import React, { useState } from 'react';
import MainButton from '../../../../Shared/MainButton/MainButton';
import chair from '../../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
	const [date, setDate] = useState( new Date());

	return (
		<div className="hero min-h-screen">
			<div class="hero-content flex-col lg:flex-row-reverse justify-between">
				<img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<DayPicker
						  mode="single"
						  selected={date}
						  onSelect={setDate}
					
					
					/>
					 <p>You picked {format( date, 'PP')}.</p>;
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;