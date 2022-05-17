import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';

const Review = () => {
	const reviews = [
		{
			_id: 1,
			img: people1,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem vitae ipsa, impedit error dolorum?',
			name: 'Jhon Lennon',
			location: 'Sylhet',
		},
		{
			_id: 2,
			img: people2,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem vitae ipsa, impedit error dolorum?',
			name: 'Jhon Lennon',
			location: 'Sylhet',
		},
		{
			_id: 3,
			img: people3,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem vitae ipsa, impedit error dolorum?',
			name: 'Jhon Lennon',
			location: 'Sylhet',
		},
	]
	return (
		<section className='py-6 px-12'>
			<div className="review-header flex justify-between items-center">
				<div className="review-header-info">
					<h1 className='text-primary'> Testimonials </h1>
					<h1 className='text-2xl'> What says our patients </h1>

				</div>
				<div>
					<img src={quote} alt="" className='w-48 h-40' />
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{
					reviews.map(review => <div key={review._id}>

						<article className='mb-7'>
							{review.description}
						</article>
						<div class="avatar flex items-center">
							<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
								<img src={review.img} />

							</div>
							<div className='mt-6'>
								<h2> {review.name} </h2>
								<h4> {review.location} </h4>
							</div>
						</div>


					</div>)
				}
			</div>
		</section>
	);
};

export default Review;