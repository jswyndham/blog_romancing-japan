'use client';
import { useForm } from 'react-hook-form';
import { restrictedUsernames } from './restrictedUsernames';

interface Props {
	postId: string;
}

const isUsernameRestricted = (username: string) => {
	return restrictedUsernames.some(
		(restricted) => restricted.toLowerCase() === username.toLowerCase()
	);
};

export default function AddComment({ postId }: Props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data: any) => {
		const { name, email, comment } = data;

		const res = await fetch('/api/comment', {
			method: 'POST',
			body: JSON.stringify({ name, email, comment, postId }),
		});
		if (!res.ok) {
			console.log('Failed to add comment');
			return;
		}
		reset();
	};

	return (
		<div className="flex justify-center">
			<div className="flex flex-col w-11/12 mt-12">
				<h2 className="my-3 ml-4 text-2xl text-red-800 font-bold">
					Leave a comment <span role="img">💬</span>
				</h2>
				<form
					className="flex flex-col border shadow-md shadow-slate-400 rounded-lg px-6 py-8 mb-10 bg-slate-50"
					onSubmit={handleSubmit((data) => onSubmit(data))}
				>
					{/* username */}
					<label className="my-1 ml-3 font-semibold">Username</label>
					<input
						{...register('name', {
							required: true,
							validate: {
								restricted: (value) =>
									!isUsernameRestricted(value) ||
									'This username is restricted. Please choose another one.',
							},
						})}
						placeholder="Enter username..."
						className="p-3 mb-3 bg-amber-50 drop-shadow-sm rounded-md border border-slate-300"
					/>
					{errors.name && (
						<p className="text-md text-red-500">
							{String(errors.name.message) ||
								'A username is required.'}
						</p>
					)}

					{/* email */}
					<label className="my-1 ml-3 font-semibold">
						Email{' '}
						<span className="italic font-normal">
							(<span className="text-yellow-500">Optional:</span>{' '}
							Your email will not be published)
						</span>
					</label>
					<input
						{...register('email', {
							required: true,
							pattern:
								/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
						})}
						placeholder="Enter email..."
						className="p-3 mb-3 bg-amber-50 drop-shadow-sm rounded-md border border-slate-300"
					/>
					{errors.email && (
						<p className="text-md text-red-500">
							{String(errors.email.message) ||
								'Please enter a valid email address.'}
						</p>
					)}

					{/* comment text area */}
					<label className="my-1 ml-3 font-semibold">Comment</label>
					<textarea
						{...register('comment', {
							required: true,
							minLength: 2,
						})}
						placeholder="Comment here..."
						className="p-3 mb-3 drop-shadow-sm rounded-md border border-slate-300"
					/>
					{errors.comment && (
						<p className="text-md text-red-500">
							{String(errors.comment.message) ||
								'Enter a minimum of 2 characters.'}
						</p>
					)}
					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-11/12 my-3 p-2 mx-auto bg-blue-500 border border-slate-200 text-white text-lg font-bold rounded-lg drop-shadow-lg hover:shadow-lg hover:shadow-slate-400 hover:bg-blue-600 hover:text-slate-100 disabled:shadow-none focus:shadow-md focus:shadow-slate-400 focus:text-slate-200 ${
							isSubmitting ? 'opacity-50' : 'opacity-100'
						}`}
					>
						{isSubmitting ? 'submitting...' : 'submit'}
					</button>
				</form>
			</div>
		</div>
	);
}
