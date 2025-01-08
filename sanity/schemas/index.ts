'use client';

import post from './post';
import category from './category';
import tag from './tag';
import author from './author';
import siteSettings from './siteSettings';
import userSignup from './userEmail';
import blockContent from './blockContent';
import { comment } from './comment';
import { youTubeType } from './youtube';
import tableSchema from './tableSchema';
import { faqs } from './faq';
import { affiliateLinkSideSchema } from './affiliateLinkSideSchema';
import { affiliateLinkMiddleSchema } from './affiliateLinkMiddleSchema';
import { affiliateLinkMobileSchema } from './affiliateLinkMobileSchema';
import { aboutUsSchema } from './aboutPageSchema';

const schemas = [
	post,
	category,
	tag,
	author,
	siteSettings,
	userSignup,
	tableSchema,
	youTubeType,
	blockContent,
	comment,
	faqs,
	affiliateLinkSideSchema,
	affiliateLinkMiddleSchema,
	affiliateLinkMobileSchema,
	aboutUsSchema,
];

export default schemas;
