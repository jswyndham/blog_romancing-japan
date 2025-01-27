import { AffiliateBanners } from '@/typings';
import Link from 'next/link';

type Props = {
	affiliateBanners?: AffiliateBanners[];
};

export default function AffiliateBannerSidebar({ affiliateBanners }: Props) {
	// Return nothing if there are no banners
	if (!affiliateBanners || affiliateBanners.length === 0) {
		return null;
	}

	return (
		<aside className="hidden xl:flex flex-col mt-10 xl:mt-6 mb-10 w-full">
			<h3 className="text-lg font-bold mb-4 text-center">Sponsored</h3>
			<div className="flex flex-col items-center">
				{affiliateBanners.map((banner) => (
					<div
						key={banner._id}
						className="flex flex-col items-center mb-6"
					>
						<Link
							href={banner.link || '#'}
							target="_blank"
							rel="noopener noreferrer nofollow sponsored"
						>
							<img
								src={banner.imageUrl}
								alt={banner.altText || banner.title}
								width={250}
								height={660}
								className="w-40 rounded-lg hover:scale-105 transition-transform duration-200"
							/>
						</Link>
						{/* Render tracking pixel if present */}
						{banner.trackingPixel && (
							<img
								src={banner.trackingPixel}
								className="absolute hidden"
								alt=""
							/>
						)}
						<p className="mt-2 text-center text-md text-blue-700 font-semibold">
							{banner.description}
						</p>
					</div>
				))}
			</div>
		</aside>
	);
}
