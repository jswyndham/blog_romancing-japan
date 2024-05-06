'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import SocialMediaLinks from './SocialMediaLinks';
import SignupCardHooks from '../hooks/SignupCardHooks';

const SignupCard = () => {
	// CUSTOM HOOKS
	const {
		firstNameRef,
		emailRef,
		contactDetails,
		setContactDetails,
		handleSubmit,
	} = SignupCardHooks();

	return (
		<div className="h-full w-full flex flex-col justify-center md:justify-between bg-slate-600 drop-shadow-md md:p-2 lg:px-1 lg:py-0 2xl:p-2 2xl:text-center">
			{/* TITLE */}
			<div className=" flex justify-center px-5 pt-2 md:my-2 lg:pt-0 2xl:my-12">
				<p className="card-title items-center text-center font-carter_one text-base-100 font-extrabold text-3xl md:text-4xl lg:mt-6 g:py-0 xl:py-2 xl:text-5xl">
					Subscribe now
				</p>
			</div>

			{/* DESCRIPTION */}
			<div className="flex justify-center my-1 px-5 md:my-4 2xl:my-12 pb-4 text-base-100 text-xl lg:my-1 lg:text-lg 2xl:text-2xl">
				<p>
					To receive updates on the latest articles discussing all
					things Japan, register your email now! Your support can help
					us to make this blog even better.
				</p>
			</div>

			{/* FORM SECTION */}
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center space-y-4 md:pb-2 2xl:space-y-8 lg:my-8 xl:mx-1 xl:my-2"
			>
				{/* FIRST NAME INPUT */}
				<div className="card-actions relative">
					<Image
						src="/images/firstName-24.png"
						width={24}
						height={24}
						alt="name input icon"
						className="absolute mt-2 ml-5 lg:mt-1 2xl:mt-2"
						loading="lazy"
					/>
					<input
						type="text"
						name="signup"
						placeholder="first name"
						className="w-full flex justify-start py-2 pl-8 lg:py-1 2xl:py-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400 active:disabled disabled:outline-slate-500"
						required
						ref={firstNameRef}
						value={contactDetails.firstName}
						onChange={(e: any) =>
							setContactDetails({
								...contactDetails,
								firstName: e.target.value,
							})
						}
					/>
				</div>

				{/* EMAIL INPUT */}
				<div className="card-actions relative">
					<Image
						src="/images/mail-24.png"
						width={24}
						height={24}
						alt="romancing japan white logo"
						className="absolute mt-2 ml-5 lg:mt-1 2xl:mt-2 "
						loading="lazy"
					/>
					<input
						type="text"
						name="signup"
						placeholder="email"
						className="w-full flex justify-start py-2 pl-8 ml-4 mr-2 lg:py-1 2xl:py-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400 active:disabled disabled:outline-slate-500"
						minLength={2}
						maxLength={100}
						required
						ref={emailRef}
						value={contactDetails.email}
						onChange={(e: any) =>
							setContactDetails({
								...contactDetails,
								email: e.target.value,
							})
						}
					/>
				</div>

				{/* SEND BUTTON */}
				<div className="my-4 py-2 mx-3 2xl:mx-2 2xl:my-8">
					<button
						id="button-subscribe"
						className="w-full h-full py-1 outline outline-offset-2 outline-base-100 rounded-xl text-base-100 bg-red-700 font-bold hover:bg-base-100 hover:outline-red-600 hover:text-red-700 active:bg-red-400 active:text-base-200 active:outline-red-800 transition-all duration-300 active:disabled disabled:bg-red-300"
						aria-label="Subscribe button"
						type="submit"
					>
						Subscribe
					</button>
				</div>
			</form>

			{/* FOLLOW US (SM LINKS)*/}
			<div className="flex flex-col items-center justify-center pb-1 my-3 2xl:pb-4">
				<div className="pb-3 2xl:pb-6">
					<p className="font-patrick_hand  text-4xl md:text-5xl text-base-100">
						Follow us!
					</p>
				</div>
				<SocialMediaLinks />
			</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(SignupCard), { ssr: false });
