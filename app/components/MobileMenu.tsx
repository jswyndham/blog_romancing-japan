import Categories from './Categories';
import Tags from './Tags';
import Link from 'next/link';

export default function MobileMenu() {
	return (
		<nav className='h-screen pt-14 bg-slate-600'>
			<button className='absolute top-0 right-0 m-3 text-white font-bold'>
				X
			</button>
			<ul className='flex flex-col py-3 font-bold text-white text-right'>
				<li className='px-6'>
					<Link href={'/collection'}>Collection</Link>
				</li>
				<li className='px-6 cursor-pointer'>
					<Categories />
				</li>
				<li className='px-6 cursor-pointer'>
					<Tags />
				</li>
			</ul>
		</nav>
	);
}
