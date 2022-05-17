import React from 'react';
import appointment from '../../../../assets/images/appointment.png';

const Contact = () => {
	return (
		<section
			style={{ background: `url(${appointment})` }}
			className='min-h-screen py-8 flex justify-center items-center'
		>
			<div>
				<h1 className='text-center text-primary text-3xl mb-8'>Contact Us </h1>

				<div>
					
					<input type="email" placeholder="email" class="input input-bordered input-md w-full max-w-xs mb-3" />
                     <br />
					<input type="text" placeholder="Subject " class="input input-bordered input-md w-full max-w-xs mb-3" />
                     <br />
					
					<input type="textarea" placeholder="text" class="input input-bordered input-lg w-full max-w-xs mb-3" />
					<input type="submit" value= 'Submit' class="input input-bordered input-md mb-3 btn btn-secondary" />
                     <br />
				</div>

			</div>


		</section>
	);
};

export default Contact;
