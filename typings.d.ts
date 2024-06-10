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
	summary: PortableTextBlock[];
	summaryShort: PortableTextBlock[];
	excerpt: string;
	description: string;
	comments?: Array<Comments>;
	imageUrl?: string; // Add this line
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
	email: string;
	comment: string;
	isPinned?: boolean;
}

type PageProps = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
	commentsOrder?: string;
};

type Props = PageProps;
