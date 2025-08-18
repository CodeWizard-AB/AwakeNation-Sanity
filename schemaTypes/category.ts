import { defineField, defineType } from "sanity";

const category = defineType({
	name: "category",
	title: "Categories",
	type: "document",
	fields: [
		defineField({
			name: "categoryName",
			title: "Category Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "categoryName", maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				defineField({
					name: "alt",
					title: "Alternative Text",
					type: "string",
					description: "Important for SEO and accessibility",
				}),
			],
		}),
	],
});

export default category;
