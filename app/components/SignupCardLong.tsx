'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import SocialMediaLinks from './SocialMediaLinks';
import SignupCardHooks from '../hooks/SignupCardHooks';

const SignupCardLong = () => {
	// CUSTOM HOOKS
	const {
		firstNameRef,
		emailRef,
		contactDetails,
		setContactDetails,
		handleSubmit,
	} = SignupCardHooks();

	return (
		<div className="flex flex-col items-center justify-center  md:justify-between h-full w-full bg-slate-600 drop-shadow-md md:p-1 lg:px-1 lg:py-0 2xl:text-center">
			<div className="flex flex-col xl:flex-row-reverse xl:gap-16">
				<div className="">
					{/* TITLE */}
					<div className="flex flex-col md:flex-row items-center justify-center align-middle">
						<div className=" flex justify-center px-1 pt-2 mt-2 md:my-2 xl:py-1 lg:pt-0">
							<p className="card-title font-carter_one text-base-100 text-4xl ">
								Subscribe
							</p>
						</div>

						{/* DESCRIPTION */}
						<div className="md:mt-7 px-3 lg:mt-5 pb-2 md:pb-4 text-base-100 text-xl lg:text-lg 2xl:text-2xl">
							<p>for updates on the latest articles!</p>
						</div>
					</div>

					{/* FORM SECTION */}
					<form
						onSubmit={handleSubmit}
						className="flex flex-col m-4 justify-center md:items-center space-y-4 md:space-y-0 xl:mx-1 xl:mt-0 xl:mb-4 md:flex-row md:gap-4"
					>
						<div className="flex flex-col md:flex-row gap-4 md:gap-1">
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
						</div>

						{/* SEND BUTTON */}
						<div className="my-4 py-3 md:w-[25%] md:mb-4">
							<button
								id="button-subscribe-signup-long"
								className="w-full h-full py-1 outline outline-offset-2 outline-base-100 rounded-xl text-base-100 bg-red-700 font-bold hover:bg-base-100 hover:outline-red-600 hover:text-red-700 active:bg-red-400 active:text-base-200 active:outline-red-800 transition-all duration-300 active:disabled disabled:bg-red-300"
								aria-label="Subscribe button"
								type="submit"
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>

				{/* FOLLOW US */}
				<div className="flex flex-row items-center justify-center align-middle pb-4">
					<div className="px-8">
						<p className="font-patrick_hand  text-4xl text-base-100">
							Follow us!
						</p>
					</div>
					<SocialMediaLinks />
				</div>
			</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(SignupCardLong), { ssr: false });
