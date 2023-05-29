import { getCategories } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function Categories() {
	const categories = await getCategories();

	return (
		<div className='dropdown dropdown-end mt-6'>
			<label tabIndex={0} className='m-1'>
				Categories
			</label>
			<nav>
				<ul
					tabIndex={0}
					className='dropdown-content bg-red-700 text-white menu p-2 shadow rounded-box w-52'
				>
					{categories.map((category: any) => (
						<li key={category._id}>
							<Link href={`/categories/${category.slug}`}>
								{category.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
