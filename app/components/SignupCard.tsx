import React from 'react';

export default function SignupCard() {
	return (
		<div className='h-42 pl-2 pr-4 bg-sign-up bg-cover border-t-2 border-b-2 border-white drop-shadow-md md:h-[100%] md:w-fit md:p-2'>
			<div className='flex flex-col md:justify-around'>
				<div className=' flex justify-center px-5 pt-2'>
					<h2 className='card-title py-4 text-white font-roboto_condensed font-extrabold text-3xl'>
						SIGN UP
					</h2>
				</div>
				<div className='flex justify-center mt-1 mb-1 px-5 py-1 text-white'>
					<p className='text-lg'>
						To receive updates on the latest articles discussing all things
						Japan, register your email now! Your support can help us to help us
						to make this blog even better.
					</p>
				</div>

				<div className='flex flex-row justify-between py-5 md:flex-col'>
					<div className='card-actions justify-center'>
						<input
							type='text'
							name='signup'
							placeholder='email'
							className='w-full flex justify-start p-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400'
						/>
					</div>
					<div className='pr-2 -mt-1 md:justify-start'>
						<button className='w-20 h-12 bg-base-100 outline outline-offset-2 outline-slate-300 rounded-xl text-red-700 font-bold active:bg-red-700 active:text-base-100'>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
