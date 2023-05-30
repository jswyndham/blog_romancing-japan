import { Inter } from 'next/font/google';
import BlogMediumCard from './components/BlogMediumCard';
import BlogSmallCard from './components/BlogSmallCard';
import SignupCard from './components/SignupCard';
import Image from 'next/image';
import { getLatestPost } from '@/sanity/sanity-utils';

export default async function Home() {
	const post = await getLatestPost();

	return (
		<main>
			<section className='flex flex-col items-center justify-center overflow-hidden'>
				{/* Homepage pic */}
				<div>
					<Image
						src='/images/MtFuji_B&W_pana.png'
						width={3840}
						height={1368}
						alt='Mt.Fuji Black and White'
						priority
					/>
				</div>

				<div className='flex w-full flex-col justify-center px-4 align-middle md:w-11/12'>
					<div className='divider'></div>

					{/* Latest banner */}
					<div className='flex flex-col justify-center px-2 align-middle drop-shadow-2xl '>
						<div className='flex h-8 justify-center bg-secondary px-6 md:h-12'>
							<h1 className='text-2xl font-bold text-white md:text-3xl'>
								Latest Articles
							</h1>
						</div>

						{/* Article post components */}
						<div>
							<div className='flex flex-col lg:flex-row'>
								<div>
									<BlogMediumCard />
								</div>
								<div className='flex justify-center w-screen -ml-6 mb-3 mt-4 text-center'>
									<SignupCard />
								</div>
							</div>

							<div className='divider'></div>

							<div className='flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'>
								<BlogSmallCard />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
