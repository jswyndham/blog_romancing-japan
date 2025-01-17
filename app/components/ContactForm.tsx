'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

const ContactForm = () => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const subjectRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	// State boolean to trigger send alerts - success or error
	const [messageSuccess, setMessageSuccess] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessageSuccess(false);
		setMessageError(false);

		const data = {
			firstName: firstNameRef.current?.value,
			lastName: lastNameRef.current?.value,
			email: emailRef.current?.value,
			subject: subjectRef.current?.value,
			message: messageRef.current?.value,
		};

		console.log('Form Data:', data);

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await res.json();
			console.log('Response:', result);

			if (res.status === 200) {
				setMessageSuccess(true);
				clearInputs();
			} else {
				setMessageError(true);
				console.error('Error:', result.message);
			}
		} catch (error) {
			console.error('Fetch Error:', error);
			setMessageError(true);
		} finally {
			setLoading(false);
		}
	};

	const clearInputs = () => {
		if (firstNameRef.current) firstNameRef.current.value = '';
		if (lastNameRef.current) lastNameRef.current.value = '';
		if (emailRef.current) emailRef.current.value = '';
		if (subjectRef.current) subjectRef.current.value = '';
		if (messageRef.current) messageRef.current.value = '';
	};

	return (
		<>
			{/* Form */}
			<form onSubmit={handleSubmit} className="w-full">
				<div className="flex flex-wrap -mx-3 mb-6">
					{/* First Name */}
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="firstName"
						>
							First Name
						</label>
						<input
							className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="firstName"
							name="firstName"
							type="text"
							placeholder="First Name"
							required
							minLength={2}
							maxLength={20}
							ref={firstNameRef}
						/>
					</div>

					{/* Last Name */}
					<div className="w-full md:w-1/2 px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="lastName"
						>
							Last Name
						</label>
						<input
							className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
							id="lastName"
							type="text"
							name="lastName"
							placeholder="Last Name"
							required
							minLength={2}
							maxLength={20}
							ref={lastNameRef}
						/>
					</div>
				</div>

				{/* Email Address */}
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="email"
						>
							Email Address
						</label>
						<input
							className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
							id="email"
							name="email"
							type="email"
							placeholder="********@*****.**"
							required
							ref={emailRef}
						/>
					</div>
				</div>

				{/* Subject Field */}
				<div className="w-full md:w-1/2 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="subject"
					>
						Subject
					</label>
					<input
						className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
						id="subject"
						name="subject"
						type="text"
						placeholder="Email Subject"
						required
						minLength={2}
						maxLength={50}
						ref={subjectRef}
					/>
				</div>

				{/* Message Section */}
				<div className="flex flex-wrap -mx-3 mb-6">
					{/* Message Input */}
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-message"
						>
							Your Message
						</label>
						<textarea
							rows={10}
							className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
							id="grid-message"
							required
							name="message"
							ref={messageRef}
						></textarea>
					</div>

					<div className="flex flex-row items-center justify-between w-full mx-2">
						{/* Send Button */}
						<button
							id="button-send"
							className="shadow mx-3 mt-2 bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white py-2 px-6 rounded-md hover:shadow-lg hover:shadow-slate-500 focus:shadow-slate-200 active:bg-indigo-600"
							type="submit"
							aria-label="Contact button"
							disabled={
								!firstNameRef ||
								!lastNameRef ||
								!emailRef ||
								!subjectRef ||
								!messageRef
							}
						>
							Send Message
						</button>

						{/* Alert - Success */}
						{messageSuccess && (
							<div
								className="bg-green-200 border-l-8 border-success flex flex-row items-center justify-center align-middle w-full mx-4 mt-2 p-2 text-lg font-bold transition duration-1000 ease-in-out text-black shadow-lg shadow-slate-500 rounded-sm"
								role="alert"
							>
								<div className="text-2xl px-2">
									<AiOutlineCheckCircle />
								</div>
								<div className="px-4">
									<p>Success! Message sent.</p>
								</div>
							</div>
						)}

						{/* Alert - Error */}
						{messageError && (
							<div
								className="bg-red-200 border-l-8 border-error flex flex-row items-center justify-center align-middle w-full mx-4 mt-2 p-2 text-lg font-bold transition duration-1000 ease-in-out text-black shadow-lg shadow-slate-500 rounded-sm"
								role="alert"
							>
								<div className="text-2xl px-2">
									<BiErrorCircle />
								</div>
								<div>
									<p>Error! Message not sent.</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</form>
		</>
	);
};
export default dynamic(() => Promise.resolve(ContactForm), { ssr: false });
