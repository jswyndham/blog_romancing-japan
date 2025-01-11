import { PortableTextBlock, Slug } from 'sanity';

type Base = {
	_createdAt: string;
	_id: string;
	_updatedAt: string;
};

interface Post extends Base {
	caption: string;
	name: string;
	pageName: string;
	slug: Slug;
	author: Author[];
	category: Category[];
	tag: Tag[];
	image: string;
	url: string;
	content: PortableTextBlock[];
	content2: PortableTextBlock[];
	summary: PortableTextBlock[];
	summaryShort: PortableTextBlock[];
	excerpt: string;
	description: string;
	comments?: Array<Comments>;
	imageUrl?: string;
	faqs: FAQs[];
	affiliateBanners: AffiliateLink[];
	affiliateMiddleBanners: AffiliateLinkMiddle[];
	affiliateMobileBanners: AffiliateBannerMobile[];
}

interface Author {
	_createdAt: string;
	_id: string;
	name: string;
	slug: Slug;
	image: string;
	biography: PortableTextBlock[];
}

interface Category extends Base {
	title: string;
	image: string;
	description: string;
	slug: Slug;
}

interface Tag extends Base {
	title: string;
	image: string;
	description: string;
	slug: Slug;
}

interface UserEmail extends Base {
	firstName: string;
	lastName: string;
	email: string;
}

interface Comments extends Base {
	name: string;
	email?: string;
	comment: string;
	isPinned?: boolean;
	likes?: boolean;
	dislikes?: boolean;
}

type PageProps = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
	commentsOrder?: string;
};

type Props = PageProps;

// Define types for the table data structure
interface TableCell {
	_key: string;
	_type: string;
	text: string;
}

interface TableRow {
	_key: string;
	_type: string;
	cells: TableCell[];
}

interface TableData {
	_key: string;
	_type: string;
	rows: TableRow[];
}

interface FAQs {
	_id: string;
	question: string;
	answer: string;
}

// Define the data structure for affiliate links
interface AffiliateBanners {
	_id: string;
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	link: string;
	trackingPixel?: string;
}

interface AffiliateMiddleBanners {
	_id: string;
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	link: string;
	trackingPixel?: string;
}

interface AffiliateBannerMobile {
	_id: string;
	title: string;
	description: string;
	imageUrl: string;
	altText: string;
	link: string;
	trackingPixel?: string;
}

export interface AboutUs extends Base {
	_id: string;
	_createdAt: string;

	content: PortableTextBlock[]; // Primary content section
	content2: PortableTextBlock[]; // Secondary content section
	content3: PortableTextBlock[]; // Third content section
	content4: PortableTextBlock[]; // Fourth content section

	// Primary Image
	image: {
		url: string;
		altText: string;
		caption: string;
	};

	// Secondary Image
	image2: {
		url: string;
		altText: string;
		caption: string;
	};

	// Third Image
	image3: {
		url: string;
		altText: string;
		caption: string;
	};
}
