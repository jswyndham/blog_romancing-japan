import { AffiliateMiddleBanners } from '@/typings';
import Link from 'next/link';

type Props = {
	affiliateMiddleBanners?: AffiliateMiddleBanners[];
};

export default function AffiliateMiddleBanner({
	affiliateMiddleBanners,
}: Props) {
	// Return nothing if there are no banners
	if (!affiliateMiddleBanners || affiliateMiddleBanners.length === 0) {
		return null;
	}

	return (
		<aside className="w-full flex flex-col items-center justify-center bg-yellow-50 mt-6 mb-4 border-t-4 border-accent drop-shadow-lg">
			<h3 className="text-lg font-bold mb-4 text-center">Sponsored</h3>
			<div className="w-full flex flex-col items-center justify-center border-b-4 border-accent">
				{affiliateMiddleBanners.map((banner: any) => (
					<div
						key={banner._id}
						className="flex flex-col items-center justify-center mb-4"
					>
						<Link
							href={banner.link || '#'}
							target="_blank"
							rel="noopener noreferrer nofollow sponsored"
						>
							<img
								src={banner.imageUrl}
								alt={banner.altText || banner.title}
								width={300}
								height={250}
								className="mb-2 rounded-sm shadow-lg hover:scale-105 transition-transform duration-200"
							/>
						</Link>
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
