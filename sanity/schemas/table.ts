import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
	fields: [
		defineField({
			// Include the table as a field
            name: 'sizeChart',
            title: 'Size Chart',
            type: 'table',
		}),
	],
});
