import { PortableTextBlock, Slug } from 'sanity';

type Base = {
	_createdAt: string;
	_id: string;
	_updatedAt: string;
};

interface Post extends Base {
	map(arg0: (post: any) => Promise<JSX.Element>): unknown;
	name: string;
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

interface About extends Base {
	titleMain: string;
	author: Author[];
	content: PortableTextBlock[];
	subTitleOne: string;
	subContentOne: PortableTextBlock[];
	subTitleTwo: string;
	subContentTwo: PortableTextBlock[];
	subTitleThree: string;
	subContentThree: PortableTextBlock[];
	description: string;
}

