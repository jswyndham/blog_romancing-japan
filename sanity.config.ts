import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';
import { deskStructure } from './deskStructure';
import { visionTool } from '@sanity/vision';
import { table } from '@sanity/table';

// This configures the sanity studio, where the model object is stored.
const config = defineConfig({
	projectId: 'x0c10dda',
	dataset: 'production',
	title: 'Blog_Japan',
	apiVersion: '2023-04-25',
	basePath: '/admin',
	plugins: [
		structureTool({
			structure: deskStructure,
		}),
		visionTool(),
		table(),
	],
	schema: { types: [...schemas] },
});

export default config;
