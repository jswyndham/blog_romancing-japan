import Image from 'next/image';
import { AffiliateBannerMobile } from '@/typings';
import Link from 'next/link';

type Props = {
	affiliateMobileBanners?: AffiliateBannerMobile[];
};

export default function AffiliateBannersMobile({
	affiliateMobileBanners,
}: Props) {
	// Return nothing if there are no banners
	if (!affiliateMobileBanners || affiliateMobileBanners.length === 0) {
		return null;
	}

	return (
		<aside className="flex flex-col xl:hidden mt-40 smx:mt-12 xl:mt-6 w-full">
			<h3 className="text-lg font-bold mb-4 text-center">Sponsored</h3>
			<div className="flex flex-col items-center">
				{affiliateMobileBanners.map((banner) => (
					<div key={banner._id} className="mb-6">
						<Link
							href={banner.link || '#'}
							target="_blank"
							rel="noopener noreferrer nofollow sponsored"
						>
							<Image
								src={banner.imageUrl}
								alt={banner.altText || banner.title}
								width={970}
								height={90}
								className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
							/>
						</Link>
						<p className="mt-2 text-center text-md text-blue-700 font-semibold">
							{banner.description}
						</p>
					</div>
				))}
			</div>
		</aside>
	);
}
