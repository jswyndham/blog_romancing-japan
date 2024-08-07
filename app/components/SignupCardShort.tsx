'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import SocialMediaLinks from './SocialMediaLinks';
import SignupCardHooks from '../hooks/SignupCardHooks';

const SignupCardShort = () => {
	// CUSTOM HOOKS
	const {
		firstNameRef,
		emailRef,
		contactDetails,
		setContactDetails,
		handleSubmit,
	} = SignupCardHooks();

	return (
		<div className="flex items-center justify-center flex-col h-full w-full bg-slate-600 text-center">
			<div className="flex flex-col">
				<div className="">
					{/* TITLE */}
					<div className="flex flex-col items-center justify-center align-middle">
						<div className="flex justify-center px-1 pt-2 mt-2">
							<p className="card-title font-carter_one text-base-100 text-4xl">
								Subscribe
							</p>
						</div>

						{/* DESCRIPTION */}
						<div className="px-3 pb-2 text-base-100 text-xl my-2">
							<p>for updates on the latest articles!</p>
						</div>
					</div>

					{/* FORM SECTION */}
					<form
						onSubmit={handleSubmit}
						className="flex flex-col m-1 justify-center space-y-4"
					>
						<div className="flex flex-col gap-4">
							{/* FIRST NAME INPUT */}
							<div className="card-actions relative">
								<Image
									src="/images/firstName-24.png"
									width={24}
									height={24}
									alt="name input icon"
									className="absolute mt-2 ml-5"
								/>
								<input
									type="text"
									name="signup"
									placeholder="first name"
									className="w-full flex justify-start py-2 pl-8 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400 active:disabled disabled:outline-slate-500"
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
									alt="email input icon"
									className="absolute mt-2 ml-5"
									loading="lazy"
								/>
								<input
									type="text"
									name="signup"
									placeholder="email"
									className="w-full flex justify-start py-2 pl-8 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400 active:disabled disabled:outline-slate-500"
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
						<div className="my-4 py-3 mx-2">
							<button
								id="button-subscribe-signup-short"
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
				<div className="flex flex-col items-center justify-center align-middle pb-4">
					<div className="px-5 pt-2 pb-4">
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

export default dynamic(() => Promise.resolve(SignupCardShort), { ssr: false });
