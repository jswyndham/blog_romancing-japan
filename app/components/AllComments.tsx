'use client';

import { Comments as CommentsType } from '@/typings';
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useSearchParams, useRouter } from 'next/navigation';
import { GoPin } from 'react-icons/go';

interface AllCommentsProps {
	comments: Array<CommentsType>;
	slug: string;
	commentsOrder: string;
}

const AllComments = ({
	comments,
	slug,
	commentsOrder: initialCommentsOrder,
}: AllCommentsProps) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [sortedComments, setSortedComments] = useState<CommentsType[]>([]);
	const [pinnedComments, setPinnedComments] = useState<CommentsType[]>([]);
	const [commentsOrder, setCommentsOrder] = useState(initialCommentsOrder);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const order = searchParams.get('commentsOrder') || initialCommentsOrder;
		setCommentsOrder(order);

		const pinned = comments.filter((comment) => comment.isPinned);
		const regular = comments.filter((comment) => !comment.isPinned);

		const sortedRegularComments = regular.sort((a, b) => {
			const dateA = new Date(a._createdAt).getTime();
			const dateB = new Date(b._createdAt).getTime();
			return order === 'asc' ? dateA - dateB : dateB - dateA;
		});

		setPinnedComments(pinned);
		setSortedComments([...pinned, ...sortedRegularComments]);
		setLoading(false);
	}, [searchParams, comments, initialCommentsOrder]);

	const ensureTrailingSlash = (url: string) =>
		url.endsWith('/') ? url : `${url}/`;

	const cleanedSlug = ensureTrailingSlash(slug);

	const handleSortChange = (order: string) => {
		const newUrl = `/posts/${cleanedSlug}?commentsOrder=${order}`;
		router.push(newUrl, { scroll: false });
	};

	const getInitials = (name: string) => {
		return name
			.split(' ')
			.map((part) => part.charAt(0))
			.join('');
	};

	if (loading) {
		return (
			<div className="flex justify-center align-middle w-full h-20 my-12 p12 bg-slate-300 text-center  text-red-800 rounded-lg shadow-xl shadow-slate-400">
				<p className="mt-5 text-3xl font-heading font-bold">
					Loading Comments...
				</p>
			</div>
		); // Render loading state
	}

	return (
		<div>
			<div className="py-5">
				{sortedComments.length === 0 && pinnedComments.length === 0 && (
					<div className="w-full h-24 mx-3 mb-6 flex border border-red-300 bg-red-50 justify-center items-center shadow-md shadow-slate-400 rounded-lg">
						<div className="text-center">
							<p className="text-2xl font-catTags">
								No comments yet
							</p>
							<p>Be the first to leave a comment!</p>
						</div>
					</div>
				)}
				{/* 
				{(sortedComments.length > 0 || pinnedComments.length > 0) && (
					<div className="flex flex-row m-4">
						<div>
							<button
								type="button"
								onClick={() => handleSortChange('desc')}
								className={`mr-4 text-md ${
									commentsOrder === 'desc'
										? 'text-purple-500 font-bold'
										: 'text-slate-400 font-semibold'
								}`}
							>
								Newest
							</button>
						</div>
						<div>
							<button
								type="button"
								onClick={() => handleSortChange('asc')}
								className={`mr-4 text-md ${
									commentsOrder === 'asc'
										? 'text-purple-500 font-bold'
										: 'text-slate-400 font-semibold'
								}`}
							>
								Oldest
							</button>
						</div>
					</div>
				)}
					*/}

				{sortedComments.map((comment) => (
					<div
						key={comment?._id} // Ensure the key is valid
						className={`mx-4 my-16`}
					>
						{comment.isPinned ? (
							<div className="relative border-2 border-slate-300 rounded-lg bg-slate-200">
								<div className="flex flex-row">
									{/* User Initial Box */}
									<div className="absolute flex justify-center w-20 h-20 -left-4 -top-3 border-2 border-slate-500 bg-gradient-radial from-red-700   via-red-500 to-red-300 p-4 rounded-xl">
										<p className="text-white text-5xl font-semibold -mt-1">
											{comment?.name &&
												getInitials(comment.name)}
										</p>
									</div>

									{/* User name and time pasted since posted */}
									<div className="flex flex-row ml-20 -mt-2">
										<div className="mt-4">
											<GoPin />
										</div>
										<div className="flex flex-col">
											<p className="text-lg text-blue-600 pt-2 pb-1 px-5">
												<strong>{comment?.name}</strong>
											</p>
											<p className="text-slate-600 text-sm px-7 pb-2 font-semibold">
												{formatDistanceToNow(
													new Date(
														comment?._createdAt
													),
													{
														addSuffix: true,
													}
												)}
											</p>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="relative border-2 border-slate-300 rounded-lg bg-slate-200">
								<div className="flex flex-row">
									{/* User Initial Box */}
									<div className="absolute flex justify-center w-20 h-20 -left-4 -top-3 border-2 border-red-700 bg-gradient-radial from-white   via-slate-50 to-slate-300 p-4 rounded-xl">
										<p className="text-red-700 text-5xl font-semibold -mt-1">
											{comment?.name &&
												getInitials(comment.name)}
										</p>
									</div>

									{/* User name and time pasted since posted */}
									<div className="flex flex-col ml-20 -mt-2">
										<p className="text-lg text-blue-600 pt-2 pb-1 px-5">
											<strong>{comment?.name}</strong>
										</p>
										<p className="text-slate-600 text-sm px-7 pb-2 font-semibold">
											{formatDistanceToNow(
												new Date(comment?._createdAt),
												{
													addSuffix: true,
												}
											)}
										</p>
									</div>
								</div>
							</div>
						)}

						{/* User comment */}
						<div className="pt-3 pb-6 m-1">
							<p className="text-md xl:text-lg text-black pl-20 pr-4">
								{comment?.comment}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllComments;
